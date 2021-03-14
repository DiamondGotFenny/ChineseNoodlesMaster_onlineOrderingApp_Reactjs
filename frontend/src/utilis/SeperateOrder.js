//this should done in server in real project
import { v4 as uuidv4 } from 'uuid';
import { getOrderChargeInfo } from './calculateOrderTotal';
import { orderExtraCharge } from './temOrderExtraCharge';
import makeid from './createId';
const arrayIncludesInObj = (arr, product) => {
  //if it's empty array, we push the first array with the product
  if (arr.length === 0) {
    arr.push([product]);
    return;
  }
  //then we iterate every array in that array, to check which one contain same value
  //if yes, we push the product to that array
  //if not we create a new array and push the product into it
  const CheckArr = arr.find(
    (subArr) =>
      subArr[0]['product']['vendorInfo']['vendor_id'] ===
      product.product.vendorInfo.vendor_id
  );
  if (CheckArr) {
    CheckArr.push(product);
    return;
  }
  if (!CheckArr) {
    arr.push([product]);
    return;
  }
};

export const SeperateOrder = (orderItems) => {
  const newOrdersArr = [];
  if (!orderItems) return;
  orderItems.forEach((ele) => {
    arrayIncludesInObj(newOrdersArr, ele);
  });
  return newOrdersArr;
};

//this should be done in the web server, but now here we do it here
export const getSeperatedOrders = (orderInfo) => {
  if (!orderInfo.shoppingCart || orderInfo.shoppingCart.length <= 0) return;

  const { shoppingCart, selectedAdrs, deliveryTime } = orderInfo;
  const ordersArr = SeperateOrder(shoppingCart);
  const orderObjArr = ordersArr.map((eleArr) => {
    const vendorInfo = eleArr[0]['product']['vendorInfo'];
    const selectedAdrsNew = { ...selectedAdrs };
    const extraCharge = orderExtraCharge();
    const orderChargeInfo = getOrderChargeInfo(eleArr, extraCharge);
    const id_preStr = makeid(4);
    const id = `${id_preStr}-${uuidv4().split('-')[4]}`;
    const date = new Date();
    const order = {
      id: id,
      date: date,
      vendorInfo: vendorInfo,
      items: eleArr,
      orderChargeInfo: {
        vatRate: extraCharge.vat,
        discountRate: extraCharge.discount,
        subTotal: orderChargeInfo.subTotal,
        deliveringFeeVal: extraCharge.deliveringFee,
        discountVal: orderChargeInfo.discountVal,
        vatVal: orderChargeInfo.vatVal,
        total: orderChargeInfo.totalCost,
      },
      payMethod: {},
      EstimatedTime: deliveryTime,
      status: 'Order Completed',
      shipInfo: {
        receiver: selectedAdrsNew.receiver,
        address: selectedAdrsNew.addressDetail,
        phoneNum: selectedAdrsNew.phoneNumber,
        zipcode: selectedAdrsNew.zipcode,
      },
    };
    return order;
  });
  return orderObjArr;
};

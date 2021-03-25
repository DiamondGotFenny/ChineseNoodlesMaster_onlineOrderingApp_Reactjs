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

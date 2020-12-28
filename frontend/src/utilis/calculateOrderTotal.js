export const calculateOrderSubTotal = (cart) => {
    let total=0;
    if (cart.length===0) return total=0;
    total=cart.reduce(((acc,cur)=>acc+cur.product.price*cur.quantity),0)
    return total.toFixed(2);
}
 
export const calculateOrderTotal=(subTotal,discountVal,vatVal,deliveringFeeVal)=>{
    let total=0;
    const subTotalNum=parseFloat(subTotal);
    const discountNum=parseFloat(discountVal);
    const vatNum=parseFloat(vatVal);
    const delivNum=parseFloat(deliveringFeeVal);
    if(subTotal===0) return total=0;
    total=subTotalNum+delivNum+vatNum-discountNum;
    return total.toFixed(2);
}

export const calDiscountVal=(subTotal,discount)=>{
    let val=0;
    if(subTotal===0) return val=0;
    val=parseFloat(subTotal)*discount;
    return val.toFixed(2);
}

export const calVatVal=(subTotal,vat)=>{
    let val=0;
    if(subTotal===0) return val=0;
    val=parseFloat(subTotal)*vat;
    return val.toFixed(2);
}

export const calDeliveryFee=(subTotal,rate)=>{
    let val=0;
    if(subTotal===0) return val=0;
    val=rate;
    return  val.toFixed(2);
}
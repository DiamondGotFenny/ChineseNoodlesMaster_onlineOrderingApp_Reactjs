import  React  from 'react';

const OrderChargeInfo = (props) => {
    const {subTotal,deliveringFeeVal,discountPercentage,discountVal,vatPercentage,vatVal,total}=props.data;
    return ( 
        <ul className="list-group mt-2">
            <li
                id="subtotal"
                className="list-group-item d-flex justify-content-between"
            >
                <span>Subtotal</span>
                <strong className="subtotal-value">${subTotal}</strong>
            </li>
            <li
                id="Delivering-fee"
                className="list-group-item d-flex justify-content-between"
            >
                <span>Delivering Fee</span>
                <strong>${deliveringFeeVal}</strong>
            </li>
            <li
                id="discount"
                className="list-group-item d-flex justify-content-between bg-light"
            >
                <div className="text-success discount">
                <h6 className="my-0">Discount</h6>
                <small className="discount-percent">{discountPercentage}%</small>
                </div>
                <span className="text-success discount-value">-${discountVal}</span>
            </li>
            <li
                id="vat"
                className="list-group-item d-flex justify-content-between bg-light"
            >
                <div className="text-warning vat">
                <h6 className="my-0">VAT</h6>
                <small className="vat-percent">{vatPercentage}%</small>
                </div>
                <span className="text-warning vat-value">${vatVal}</span>
            </li>
            <li
                id="total"
                className="list-group-item d-flex justify-content-between"
            >
                <span>Total (USD)</span>
                <strong className="total-value">${total}</strong>
            </li>
        </ul>    
     );
}
 
export default OrderChargeInfo;
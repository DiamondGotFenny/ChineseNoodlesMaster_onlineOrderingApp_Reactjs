import  React from 'react';
import { Button,InputGroup,FormControl } from 'react-bootstrap';


const ProductQuantityCounter = (props) => {
    const {TrackQtyChange}=props;
    let {quantity}=props;
    const handleQuantityPlus=(e)=>{
        if (quantity>99||quantity<0)  return;
        quantity++;
        TrackQtyChange(quantity)
    }
    const handleQuantityMinus=(e)=>{
        if (quantity>99||quantity<=0)  return;
        quantity--;
        TrackQtyChange(quantity)
    }
    const handleInputQty=(e)=>{
        const num=e.target.value;
        if (num>99||num<=0)  return;
        quantity=parseInt(num, 10);
        TrackQtyChange(quantity)
    }
    return ( 
        <InputGroup >
                <InputGroup.Prepend >
                    <Button className="qty-btn-plus" variant="outline-secondary" onClick={handleQuantityPlus}>
                         +
                    </Button>
                </InputGroup.Prepend>
                        <FormControl type="number" value={quantity} min="1" max="99" step="1" onChange={handleInputQty} className="update-product-input pt-1"   />
                <InputGroup.Append>
                    <Button variant="outline-secondary" className="qty-btn-minus" onClick={handleQuantityMinus}>
                        -
                    </Button>
                </InputGroup.Append>
        </InputGroup> 
     );
}
 
export default ProductQuantityCounter;
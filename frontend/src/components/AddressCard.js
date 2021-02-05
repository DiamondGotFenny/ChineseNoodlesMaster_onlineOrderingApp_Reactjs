import  React  from 'react';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import EditAddressBtn from './EditAddressBtn';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfoAction } from 'actions/userAction';

const AddressCard = (props) => {
    const {addressTitle,receiver,addressDetail,zipcode,phoneNumber,id}=props.item;
    const authInfo=useSelector(state=>state.authInfo);
    const userInfo=useSelector(state=>state.userInfo);
    const dispatch=useDispatch();
    const handleSetDefault=()=>{
        const orginalDefault=userInfo.data.address.find(ele=>ele.addressTitle==="Default Address");
        const targetAdrs=userInfo.data.address.find(ele=>ele.id===id);
        const updatedAddressList=userInfo.data.address.filter(ele=>ele.addressTitle!=="Default Address"&&ele.id!==id)
        if (orginalDefault) {
            orginalDefault.addressTitle=`Address ${id}`;
            updatedAddressList.push(orginalDefault);
        }
        targetAdrs.addressTitle="Default Address";
        updatedAddressList.unshift(targetAdrs);
        userInfo.data.address=updatedAddressList;
        dispatch(updateUserInfoAction(authInfo,userInfo.data,userInfo.data.id))
    }
    const renderSetDefaultBtn=(title)=>{
        if (title!=="Default Address") {
            return <Button variant="outline-info" className="ml-3" onClick={handleSetDefault}>Set as Default</Button>
        } 
    }
    return ( 
        <Card>
            <Card.Header>{addressTitle}</Card.Header>
            <Card.Body>
                <Card.Title><h5>Receiver: <span class="receiver-name">{receiver}</span></h5></Card.Title>
                <Card.Text>
                    {`${addressDetail.addressLine1} ${addressDetail.addressLine2} ${addressDetail.district} ${addressDetail.city} ${addressDetail.Provice},zipcode: ${zipcode}`}
                </Card.Text>
                <Card.Text>
                     Phone Number: <span class="adrs-phone-num">{phoneNumber}</span>
                </Card.Text>
                <EditAddressBtn item={props.item}/>
                {renderSetDefaultBtn(addressTitle)}
            </Card.Body>
        </Card>
     );
}
 
export default AddressCard;
import  React, { useEffect, useState }  from 'react';
import  Modal  from 'react-bootstrap/Modal';
import  Button  from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import  update  from 'immutability-helper';
import { updateUserInfoAction } from 'actions/userAction';

const EditAddressModal = (props) => {
    const {show,handleClose,item}=props;
    const authInfo=useSelector(state=>state.authInfo);
    const userInfo=useSelector(state=>state.userInfo);
    const dispatch=useDispatch();

    const initialValue={
        addressTitle:"",
        receiver:"",
        phoneNumber:"",
        addressDetail:{ addressLine1: "",
        addressLine2: "",
        district:"",
        city:""},
        zipcode:""
    }
    const [adrsInfo,setadresInfo]=useState(initialValue);
    const {addressTitle,receiver,phoneNumber,addressDetail,zipcode}=adrsInfo;
    const handleOnChange=(e,key,key2)=>{
        const newObj=JSON.parse(JSON.stringify(adrsInfo));
        if (key2==="addressDetail") {
            newObj[key2][key]=e.target.value;
        }else{
            newObj[key]=e.target.value;
        }
        
        setadresInfo(newObj);
    }
   const handleEditSubmit=(e)=>{
        e.preventDefault();
       
        if (authInfo.status==="sucess"&&userInfo.status==="sucess") {
             /*here we have to update the whole userProfile in order to update address object 
            due to the limit of json server
            */
            if (item) {//if we are editing a existed address
                //we find its index in the address list array first, then we can update it in the array
              const index=userInfo.data.address.findIndex(item=>item.id===adrsInfo.id)
               const updatedUserProfile=update(userInfo.data,{
                address:{[index]:{$set:adrsInfo}}
                });
                dispatch(updateUserInfoAction(authInfo,updatedUserProfile,userInfo.data.id))
            }else{
                const index=userInfo.data.address.length+1;
                //you'd better create another unique id in server in real project
                const adrsId=`adrs00${index}`;
                adrsInfo.id=adrsId;
                const updatedUserProfile=update(userInfo.data,{
                    address:{$push:[adrsInfo]}
                    });
                console.log(updatedUserProfile);
                dispatch(updateUserInfoAction(authInfo,updatedUserProfile,userInfo.data.id))
            }
        }else{
            console.log("something wrong when update data")
        }
        
        handleClose();
   }
    useEffect(()=>{
        if (item) {
            const newObj=JSON.parse(JSON.stringify(item));
            setadresInfo(newObj);
        }
        
    },[item,authInfo.status])
    return ( 
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{item?"Edit Address":"Add New Address"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="addressTitle">
                        <Form.Label>Address Title</Form.Label>
                        <Form.Control type="input" value={addressTitle} placeholder="Home, Office...." onChange={(e)=>handleOnChange(e,"addressTitle")}/>
                    </Form.Group>
                    <Form.Group controlId="addressReciever">
                        <Form.Label>Receiver</Form.Label>
                        <Form.Control type="input" value={receiver} onChange={(e)=>handleOnChange(e,"receiver")} />
                    </Form.Group>
                    <Form.Group controlId="addressPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="input" value={phoneNumber} onChange={(e)=>handleOnChange(e,"phoneNumber")}/>
                    </Form.Group>
                    <Form.Group controlId="addressline1">
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control type="input" value={addressDetail.addressLine1} onChange={(e)=>handleOnChange(e,"addressLine1","addressDetail")} />
                    </Form.Group>
                    <Form.Group controlId="addressline2">
                        <Form.Label>Address Line2</Form.Label>
                        <Form.Control type="input" value={addressDetail.addressLine2} onChange={(e)=>handleOnChange(e,"addressLine2","addressDetail")} />
                    </Form.Group>
                    <Form.Group controlId="addressDistrict">
                        <Form.Label>District</Form.Label>
                        <Form.Control type="input" value={addressDetail.district} onChange={(e)=>handleOnChange(e,"district","addressDetail")} />
                    </Form.Group>
                    <Form.Group controlId="addressZipcode">
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control type="input" value={zipcode} onChange={(e)=>handleOnChange(e,"zipcode")}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="outline-secondary" className="mr-2" onClick={handleClose}>
                Close
            </Button>
            <Button variant="outline-primary" className="mr-2" onClick={handleEditSubmit}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
     );
}
 
export default EditAddressModal;
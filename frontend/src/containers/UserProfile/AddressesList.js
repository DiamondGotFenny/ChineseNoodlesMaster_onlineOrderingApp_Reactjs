import  React, {useState, useEffect }  from 'react';
import  Card  from 'react-bootstrap/Card';
import  Button  from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import AddressCard from 'components/AddressCard';
import { useSelector } from 'react-redux';
import EditAddressModal from 'components/EditAddressModal';

const AddressesList = () => {
    const userInfo=useSelector(state=>state.userInfo);
    const [addressesList,setaddressesList]=useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    
   useEffect(()=>{
   if (userInfo.status==="sucess") {
       setaddressesList(userInfo.data.address)
   }
},[userInfo.status]);
    return ( 
        <>
            {addressesList?.length>0&&addressesList.map(item=><AddressCard item={item} />) }
            <Card className="mt-3">
                <Card.Body>
                    <Button variant="outline-light" onClick={()=>setShowEditModal(true)}><FontAwesomeIcon icon={faPlus}/><h2 className="mt-1 text-info">Add New Address</h2></Button>
                </Card.Body>
            </Card>
            <EditAddressModal show={showEditModal} handleClose={()=>setShowEditModal(false)}/>
        </>
     );
}
 
export default AddressesList;
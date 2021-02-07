import  React,{ useState,useEffect }  from 'react';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const UserBasicInfo = () => {
   const userInfo=useSelector(state=>state.userInfo);
   const [userData,setuserData]=useState(null);
   const [adrs,setadrs]=useState(null);
   useEffect(()=>{
      if (userInfo.status==="sucess") {
         setuserData(userInfo.data)
         const adrs=userInfo.data.address.find(ele=>ele.addressTitle==="Default Address");
         setadrs(adrs);
      }
   },[userInfo.status]);
    return <> {userData&&<div className="basic-info-container">
            <Row className="border-bottom pt-2">
               <Col md={3}><label>Name: </label></Col>
               <Col md={9}><p>{userData.name}</p></Col>
            </Row>
            <Row className="border-bottom pt-2">
               <Col md={3}><label>Phone Number: </label></Col>
               <Col md={9}><p>{userData.tel}</p></Col>
            </Row>
            <Row className="border-bottom pt-2">
               <Col md={3}><label>Email: </label></Col>
               <Col md={9}><p>{userData.email}</p></Col>
            </Row>
            <Row className="border-bottom pt-2">
               <Col md={3}><label>Address: </label></Col>
               <Col md={9}><p>{adrs&&`${adrs.addressDetail.addressLine1} ${adrs.addressDetail.addressLine2} ${adrs.addressDetail.district} ${adrs.addressDetail.city}`}</p></Col>
            </Row>
        </div>}
     </>
}
 
export default UserBasicInfo;
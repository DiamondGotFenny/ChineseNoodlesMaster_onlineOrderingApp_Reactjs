import  React  from 'react';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';

const UserBasicInfo = (props) => {
    const {item}=props;
    return ( 
        <>
         <Row className="border-bottom pt-2">
            <Col md={3}><label>{item[0]}:</label></Col>
            <Col md={9}><p>{item[1]}</p></Col>
         </Row>
        </>
     );
}
 
export default UserBasicInfo;
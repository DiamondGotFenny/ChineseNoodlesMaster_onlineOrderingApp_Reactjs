import  React,{ useState } from 'react';
import  Col  from 'react-bootstrap/Col';
import  Card  from 'react-bootstrap/Card';
import  Row  from 'react-bootstrap/Row';
import  Button  from 'react-bootstrap/Button';
import OrderDetailModal from './OrderDetailModal';

const OrderCard = (props) => {
    const {date,id,vendorInfo,orderChargeInfo,payMethod,status,items,shipInfo}=props.item;
    const [showDetailModal, setshowDetailModal] = useState(false);
    const handleCloseDetailModal = () => setshowDetailModal(false);
    const handleShowDetailModal = () => setshowDetailModal(true);
    return ( 
        <Card className="mt-3">
            <Card.Header className="bg-light">
                <Row>
                    <Col className="order-date mb-2">
                        Order Date:<br/> <span className="order-date-value">{date}</span>
                    </Col>
                    <Col className="order-num mb-2">
                        Order Number:<br/> <span className="order-num-value">{id}</span>
                    </Col> 
                    <Col className="order-vendor mb-2">
                        Vendor:<br/> <span className="order-vendor-value">{vendorInfo.name}</span>
                    </Col>
                </Row>
                <Row>
                    <Col className="order-sum mb-2">
                        Order Total:<br/> <span className="order-sum-value">${orderChargeInfo.total}</span>
                    </Col>
                    <Col className="order-pay mb-2">
                        Payment Method:<br/> <span className="order-pay-value">{payMethod.type}</span>
                    </Col> 
                    <Col className="order-status mb-2">
                        Status:<br/> <span className="order-status-value">{status}</span>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="row">
                <ul className="col-8 mb-3">
                    <li
                    className="product-header d-flex justify-content-between lh-condensed mb-2 row"
                    >
                    <h6 className="col-7">Items</h6>
                    <span className="col-2 text-center">Qty</span>
                    <span className="col-3">Total</span>
                    </li>
                    {items.map((ele)=>(
                        <li key={ele.name}
                        className=" d-flex justify-content-between lh-condensed mb-2"
                    >
                        
                        <div className="item-detail col-7 px-0">
                        <p className="my-0 item-name">{ele.name}</p>
                        </div>
                        <span className="item-qty col-2 text-center">{ele.qty}</span>
                        <span className="text-muted item-cost col-3">${ele.total}</span>
                    </li>    
                            ))}
                    
                </ul>
                <Col md={4} className="order-shipTo border-left">
                    Ship to: <br/>
                    <div className="order-adrs">
                    <h5 className="card-title">
                        Receiver: <span className="receiver-name">{shipInfo.receiver}</span>
                    </h5>
                    <p className="card-text">
                    {shipInfo.address}
                    </p>
                    <p className="card-text">
                        Phone Number:
                        <span className="adrs-phone-num">{shipInfo.phoneNum}</span>
                    </p>
                        <Button variant="primary" onClick={handleShowDetailModal}>Order Details</Button>
                    </div>
                </Col>
            </Card.Body>
            <OrderDetailModal item={props.item} show={showDetailModal} handleClose={handleCloseDetailModal} />
        </Card>
     );
}
 
export default OrderCard;
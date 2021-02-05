import  React  from 'react';
import BackToHomeBtn from 'components/BackToHomeBtn';
import UserBasicInfo from 'components/UserBasicInfo';
import AddressesList from 'containers/UserProfile/AddressesList';
import { Col, Nav, Tab } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';

const UserProfilePage = () => {
    const infoMap=[
        ["User Name","AKB48"],
        ["First Name","John"],
        ["Last Name","Dow"],
        ["Phone Number","1872-4582560"],
        ["Email","JohnDow545047@gmail.com"],
        ["Address","A12008, Granville Building, 12-16 Granville Rd, Tsim Sha Tsui, Hong Kong"],
    ]
    
    return ( 
        <Container className="userProfile-container">
            <div className="d-flex">
                <BackToHomeBtn/>
                <div id="user-0001" class="user-name my-3">
                    <h1>John Dow</h1>
                </div>
            </div>
            <Row className="content-container">
                <Col sm={3} className="left-content">
                    <div className="avatar-containter text-center">
                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="avatar rounded-circle img-thumbnail mb-2" alt="avatar"/>
                        <h6>Upload a different photo...</h6>
                        <input type="file" className="text-center center-block file-upload"/>
                    </div><hr></hr><br></br>
                    <div className="card most-visited" style={{maxWidth: "16rem"}}>
                        <div className="card-header">
                            Most Visited Restaurants
                        </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item text-primary restaurant-name"><a href="#">See You Again Noodles</a></li>
                        <li className="list-group-item text-primary restaurant-name"><a href="#">Wu Han Hot Noodles</a></li>
                        <li className="list-group-item text-primary restaurant-name"><a href="#">Dow's Noodles House</a></li>
                        <li className="list-group-item text-primary restaurant-name"><a href="#">He Big Family Noodles House</a></li>
                    </ul>
                    </div>
                    <div className="card most-ordered my-3" style={{maxWidth: "16rem"}}>
                        <div className="card-header">
                            Most Frequently Ordered
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item text-primary restaurant-name"><a href="#">Luo Si Rice Noodels</a></li>
                            <li className="list-group-item text-primary restaurant-name"><a href="#">Wu Han Hot Noodles</a></li>
                            <li className="list-group-item text-primary restaurant-name"><a href="#">Wentun Noodles</a></li>
                            <li className="list-group-item text-primary restaurant-name"><a href="#">Beef Noodles</a></li>
                        </ul>
                    </div>    
                </Col>
                <Col sm={9}>
                    <Tab.Container defaultActiveKey="basic-info">
                        <Nav variant="tabs" >
                            <Nav.Item>
                                <Nav.Link id='basic-info' aria-controls="basic-info" aria-selected="true" eventKey="basic-info">Basic Info</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='address-list' aria-controls="address-list" aria-selected="false" eventKey="address-list">Addresses Lists</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='my-favorite' aria-controls="my-favorite" aria-selected="false" eventKey="my-favorite">My Favorite</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='orders' aria-controls="orders" aria-selected="false" eventKey="orders">My Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='activities' aria-controls="activities" aria-selected="false" eventKey="activities">Activities</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id='edit-profile' aria-controls="edit-profile" aria-selected="false" eventKey="edit-profile">Edit Profile</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="basic-info" className="basic-info">
                                 {infoMap.map(item=><UserBasicInfo item={item}/>)}   
                            </Tab.Pane>
                            <Tab.Pane eventKey="address-list" className="address-list">
                                <AddressesList/>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
     );
}
 
export default UserProfilePage;
import  React from 'react';
import  Nav from 'react-bootstrap/Nav';
import  Tab from 'react-bootstrap/Tab';
import UserBasicInfo from 'components/UserBasicInfo';
import AddressesList from 'containers/UserProfile/AddressesList';
import ProfileFavorites from './ProfileFavoritesContainer';
import MyOrders from './MyOrders';

const ProfileContainer = () => {
    const tabData=[
        {id:'basic-info',label:"Basic Info"},
        {id:'address-list',label:"Addresses Lists"},
        {id:'my-favorite',label:"My Favorite"},
        {id:'orders',label:"My Orders"},
        {id:'activities',label:"Activities"},
        {id:'edit-profile',label:"Edit Profile"},
    ]
    return ( 
        <Tab.Container defaultActiveKey="basic-info">
            <Nav variant="tabs" >
                {tabData.map(item=>(
                    <Nav.Item key={item.id}>
                        <Nav.Link id={item.id} aria-controls={item.id} eventKey={item.id}>{item.label}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
            <Tab.Content>
                <Tab.Pane eventKey="basic-info" className="basic-info">
                    <UserBasicInfo  />  
                </Tab.Pane>
                <Tab.Pane eventKey="address-list" className="address-list">
                    <AddressesList/>
                </Tab.Pane>
                <Tab.Pane eventKey="my-favorite" className="my-favorite">
                    <ProfileFavorites />
                </Tab.Pane>
                <Tab.Pane eventKey="orders" className="orders">
                    <MyOrders />
                </Tab.Pane>
            </Tab.Content>
        </Tab.Container>     
     );
}
 
export default ProfileContainer;
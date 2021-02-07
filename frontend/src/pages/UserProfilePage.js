import  React,{ useState,useEffect }  from 'react';
import BackToHomeBtn from 'components/BackToHomeBtn';
import  Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import  Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import ProfileContainer from 'containers/UserProfile/ProfileContainer';

const UserProfilePage = () => {
    const userInfo=useSelector(state=>state.userInfo);
    const [userData,setuserData]=useState(null);
    //the recent visited list should come from the server in real project
    const recentVisitedVendors=[["V010","See You Again Noodles"],["V009","Henan Stewed Noodles"],["V006","Old Shanghai Noodle Shop"],["V005","Chongqing Hu's Noodle Shop"],["V003","Old Shanxi Daoxiao Noodles Shop"]];
    const recentOrders=[["P001","Beef Noodles"],["P003","Chongqing Street Noodles"],["P006","Three Shrimp Noodles"],["P009","Shrimp Paste Noodles"],["P005", "Liuzhou River Snails Rice Noodle"]]
    
    useEffect(()=>{
        if (userInfo.status==="sucess") {
            setuserData(userInfo.data)
        } 
        
    },[userInfo.status])
   
    return ( userData&&
        <Container className="userProfile-container">
            <div className="d-flex">
                <BackToHomeBtn/>
                <div id="user-0001" className="user-name my-3">
                    <h1>{userData.name}</h1>
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
                        {recentVisitedVendors.map(item=><li key={item[0]} className="list-group-item text-primary restaurant-name"><Link to={`/vendors/${item[0]}`}>{item[1]}</Link></li>)}
                    </ul>
                    </div>
                    <div className="card most-ordered my-3" style={{maxWidth: "16rem"}}>
                        <div className="card-header">
                            Most Frequently Ordered
                        </div>
                        <ul className="list-group list-group-flush">
                        {recentOrders.map(item=><li key={item[0]} className="list-group-item text-primary restaurant-name"><Link to={`/product/${item[0]}`}>{item[1]}</Link></li>)}
                        </ul>
                    </div>    
                </Col>
                <Col sm={9}>
                    <ProfileContainer/>
                </Col>
            </Row>
        </Container>
     );
}
 
export default UserProfilePage;
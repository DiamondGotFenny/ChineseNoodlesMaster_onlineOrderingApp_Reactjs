import  React  from 'react';
import { useParams} from 'react-router-dom';
import  useGetResource  from 'utilis/customHooks/useGetResource';
import { Container, Nav, Row, Button, Accordion,Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import  Ratings  from 'components/ratingStars';
import BackToHomeBtn from 'components/BackToHomeBtn';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import GetFilterMenu from '../utilis/filterVendorProductlist';
import { fetchProductList } from 'actions/productActions';
import  Product_Display  from 'components/Product_Display';

const VendorPage = () => {
    const preferencesFilter=['All','Chicken','Beef','Vegetable','Appetizers','Soup'];
     const [FilterProductList,setFilterProductList]=useState([])
    const {id}=useParams();
    const dispatch=useDispatch();
    const vendor_endpoint=`/vendorList?id=${id}`;
    const {isLoading,hasError,data: vendor_data,setquery}=useGetResource(vendor_endpoint);
    //this find() filter is used because the fake Api server always return an array,
    //can be removed if the data server return an object instead of array
    const vendor_process=vendor_data.find(item=>item.id===id);
    const [filter,setfilter]=useState("");
    const handleFilterChange=(keyword)=>{
      const keywordL=keyword.toLowerCase();
      setfilter(keywordL)
    }
    const renderFilters=(preferencesFilter)=>{
     return preferencesFilter.map(item=><li key={item}><Button variant="link" onClick={()=>handleFilterChange(item)}>{item}</Button></li>)
    }
    const renderFilter_sm=(renderFilters,preferencesFilter)=>{
      return (
        <Accordion>
        <Card>
            <Card.Header className="text-center">
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <span className="ti-arrow-circle-down"></span>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body><ul className="nav nav-menu filter-list-sm">{renderFilters(preferencesFilter)}</ul></Card.Body>
            </Accordion.Collapse>
        </Card>
      </Accordion>
      )
    }
   
    useEffect( ()=>{
      if(vendor_process){
        GetFilterMenu(vendor_process.menu,filter)
        .then(productList=> {
          setFilterProductList(productList)
        });
       
      }
    },[vendor_process,filter])
    return ( 
        <Container className='vendor-detail-container'>
          <div className="vendor-info">
            <div className="vendor-display">
              <img
                src={vendor_process?.imgLink}
                alt={vendor_process?.vendorName}
              />
              <div className="vendor-adrs ml-1">
              <div
                className="vendor-adrs-first-line d-flex mt-3 justify-content-left align-items-center"
              >
                <h5 className="vendor-title pl-0 col-md-auto col-7">
                {vendor_process?.vendorName}
                </h5>
                <div className="vendor-rating ml-sm-1 col-md-auto col-5 pb-1">
                    <Ratings rating={4} interactive={false}/>
                </div>
              </div>
              <div
                className="vendor-adrs-second-line mt-2 mt-md-0 d-flex justify-content-left align-items-center"
              >
                <strong>Address: </strong>
                <address className="adrs-detail ml-2 mb-0">
                 <span className='adrs-detail-street mr-2'>{vendor_process?.address.street},</span> 
                 <span className='adrs-detail-district mr-2'>{vendor_process?.address.district},</span> 
                 <span className='adrs-detail-city mr-2'>{vendor_process?.address.city},</span> 
                 <span className='adrs-detail-provice mr-2'>{vendor_process?.address.provice}</span> 
                </address>

                <div className="vendor-map-modal-btn">
                  <button
                    className="addr-pin-btn ml-1 ml-sm-3"
                    data-target="#vendorMap"
                    data-toggle="modal"
                  >
                   <FontAwesomeIcon icon={faMapMarkedAlt}/>
                  </button>
                </div>
              </div>
              <div
                className="vendor-adrs-third-line d-flex justify-content-left align-items-center mt-2 mt-md-0"
              >
                <div className="business-hour">
                  <strong>Business Hours: </strong
                  ><span className="ml-2">{vendor_process?.businessHour}</span>
                </div>
                <div
                  className="vendor-contact ml-auto ml-md-5 d-flex justify-content-left align-items-center"
                >
                  <FontAwesomeIcon icon={faPhone}/>
                  <span className="phone-num ml-2">{vendor_process?.contact}</span>
                </div>
              </div>
              <div className="vendor-adrs-forth-line mt-2 mt-md-0 text-left">
                <span className="red-star"><i className="fas fa-truck"></i></span>Free
                Delivering with Minimum Order Value of
                <span className="free-delivery-start ml-md-1 ml-0">$30</span>.
              </div>
            </div>
            </div>
          </div>
         <main className="vendor-content">
          <div className="vendor-content-container">
            <Row className="menu-contents">
            <div className="link-nav-container">
              <div className="link-title">Select Foods</div>
             {renderFilter_sm(renderFilters,preferencesFilter)}
            </div>
              <aside className="vendor-nav-container nav-sticky col-md-3">
                <Nav id="vendor-navigation" className="stick-to-content bg-dark collapse show">
                  <ul className="nav nav-menu">
                    {renderFilters(preferencesFilter)}
                  </ul>
                </Nav>
               <BackToHomeBtn />
              </aside>
              <Row className="menu-item-container col-md-9">
                {FilterProductList.map(item=>(
                <Col lg={4} key={item.id} >
                  <Product_Display item={item}/>
                </Col>))}
              </Row>
            </Row>
          </div>
         </main>
        </Container>
        
     );
}
 
export default VendorPage;
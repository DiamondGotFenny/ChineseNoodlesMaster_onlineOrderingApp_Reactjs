import  React,{ useState } from 'react';
import { Container, Nav, Row, Button, Accordion, Card, Col } from 'react-bootstrap';
import BackToHomeBtn from 'components/BackToHomeBtn';
import  Product_Display  from 'components/Product_Display';
import HandleVendorDetailData from 'containers/VendorPage/HandleVendorDetailData';
import HandleVendorReviewsData from 'containers/VendorPage/HandleVendorReviewsData';
import { useParams } from 'react-router-dom';
import RenderVendorFilter from 'components/RendorVendorFilter';

const VendorPage = () => {
  const {id}=useParams();
    const preferencesFilter=['All','Chicken','Beef','Vegetable','Appetizers','Soup'];
    const [FilterProductList,setFilterProductList]=useState([]);
    const [filter,setfilter]=useState("");
    const handleFilterChange=(keyword,setfilter)=>{
      const keywordL=keyword.toLowerCase();
      setfilter(keywordL)
    }
    
    const renderFilters=(preferencesFilter,setfilter)=>{
     return preferencesFilter.map(item=><li key={item}><Button variant="link" onClick={()=>handleFilterChange(item,setfilter)}>{item}</Button></li>)
    }
    
    return ( 
        <Container className='vendor-detail-container'>
        <HandleVendorDetailData id={id} filter={filter} setFilterProductList={setFilterProductList}/>
         <main className="vendor-content">
          <div className="vendor-content-container">
            <Row className="menu-contents">
            <div className="link-nav-container">
              <div className="link-title">Select Foods</div>
              <RenderVendorFilter  preferencesFilter={preferencesFilter} renderFilters={renderFilters} setfilter={setfilter}/>
            </div>
              <aside className="vendor-nav-container nav-sticky col-md-3">
                <Nav id="vendor-navigation" className="stick-to-content bg-dark collapse show">
                  <ul className="nav nav-menu">
                    {renderFilters(preferencesFilter,setfilter)}
                  </ul>
                  <BackToHomeBtn className="back-home-btn"/>
                </Nav>
               
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
         <HandleVendorReviewsData id={id}/>
        </Container>
        
     );
}
 
export default VendorPage;
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  React  from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import  Button  from 'react-bootstrap/Button';
import ContentSidebar from 'components/ContentSidebar';
import ProductsList from './ProductsList';


function Contents(props) {
    
    return(
        <Row className="contents">
          <Col md={3}>
            <Accordion defaultActiveKey="0">
                <div class="link-nav-container">
                  <div class="link-title">Select Cuisine</div>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0" className="link-nav-menu">
                    <FontAwesomeIcon icon={faChevronDown}/>
                  </Accordion.Toggle>
                </div>
                <Accordion.Collapse className="sidebar-nav-container nav-sticky" eventKey="0">
                    <ContentSidebar /> 
                </Accordion.Collapse>
              </Accordion>
          </Col>
          <Col md={9} className="products-container">
            <ProductsList/>
          </Col>
        </Row>
    )
}
export default Contents;
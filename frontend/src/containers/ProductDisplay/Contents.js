import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  React  from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row  from 'react-bootstrap/Row';
import  Button  from 'react-bootstrap/Button';
import ContentSidebar from 'components/ContentSidebar';


function Contents(props) {
    return(
        <Row className="contents">
            <Accordion>
              <div class="link-nav-container">
                <div class="link-title">Select Cuisine</div>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" className="link-nav-menu">
                  <FontAwesomeIcon icon={faChevronDown}/>
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="0">
                <ContentSidebar/>              
              </Accordion.Collapse>
            </Accordion>
        </Row>
    )
}
export default Contents;
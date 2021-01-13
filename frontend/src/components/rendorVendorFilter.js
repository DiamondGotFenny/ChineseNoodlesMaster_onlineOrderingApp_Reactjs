import  React from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';


const RenderVendorFilter = (props) => {
    const {preferencesFilter,renderFilters,setfilter}=props;
  
    return ( 
        <>
        <Accordion>
            <Card>
                <Card.Header className="text-center">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <span className="ti-arrow-circle-down"></span>
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body><ul className="nav nav-menu filter-list-sm">{renderFilters(preferencesFilter,setfilter)}</ul></Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </>
     );
}
 
export default RenderVendorFilter;
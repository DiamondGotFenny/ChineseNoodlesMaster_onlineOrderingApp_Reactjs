import  React  from 'react';
import Cuisinestagslanding from '../../components/CuisinesTags_Landing';
import CuisinesTagsCollapsed from './../../components/CuisinesTagsCollapsed';
import Accordion  from 'react-bootstrap/Accordion';
import Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import { cuisinesTags,cuisinesTagscollapsed } from './../../asset/temJsonFiles/cuisinesTags';
import { produtList } from './../../asset/temJsonFiles/productsList';
import Productlanding from '../../components/Product_Landing';

const Menu=()=>{
    return (
        <section className="section bg-light">
            <h1 className="mb-6 text-center">Discover Our Noodles</h1>
            <Cuisinestagslanding cuisinesTags={cuisinesTags}/>
            <Accordion>
                <Card>
                    <Card.Header className="text-center">
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <span className="ti-arrow-circle-down"></span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body><CuisinesTagsCollapsed tagsCollapsed={cuisinesTagscollapsed}/></Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <div className="menu-category-content mx-auto mt-3">
               { produtList.map(item=><Productlanding item={item}/>)}
            </div>
        </section>
    )
}
export default Menu;
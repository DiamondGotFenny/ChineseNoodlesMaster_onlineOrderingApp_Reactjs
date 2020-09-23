import  React, { useEffect, useState }  from 'react';
import Cuisinestagslanding from 'components/CuisinesTags_Landing';
import CuisinesTagsCollapsed from 'components/CuisinesTagsCollapsed';
import Accordion  from 'react-bootstrap/Accordion';
import Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import { cuisinesTags,cuisinesTagscollapsed } from 'asset/temJsonFiles/cuisinesTags';
import Productlanding from 'components/Product_Landing';
import { Link } from 'react-router-dom';
import httpService from 'services/httpService';


const Menu=()=>{
    const [productsList,setProductsList]=useState([]);
    //I fetch products list data here because I think the other 
    //components don't need to know this pieces of data.
    //and the length of this data will be limited in future.
    async function fetchProductList() {
        const {data}=await httpService.get('/produtList');
        setProductsList(data)
    }
    useEffect(()=>{ fetchProductList() },[]);
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
               { productsList.map(item=><Productlanding key={item.id} item={item}/>)}
            </div>
            <div className="text-center my-3">
            <Link to="/cuisines" className="btn red-outline-viewMore mt-4"
              ><span>View More</span></Link
            >
          </div>
        </section>
    )
}
export default Menu;
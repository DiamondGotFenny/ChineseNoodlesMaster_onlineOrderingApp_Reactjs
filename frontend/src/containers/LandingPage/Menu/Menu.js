import  React, { useEffect }  from 'react';
import Cuisinestagslanding from 'components/CuisinesTagsLanding';
import CuisinesTagsCollapsed from 'components/CuisinesTagsCollapsed';
import Accordion  from 'react-bootstrap/Accordion';
import Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import { cuisinesTags,cuisinesTagscollapsed } from 'asset/temJsonFiles/cuisinesTags';
import Productlanding from 'components/ProductLanding';
import { Link } from 'react-router-dom';
import  Spinner  from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from 'actions/productActions';

const Menu=()=>{
    const address=useSelector(state=>state.address_input)
    const productsList=useSelector(state=>state.productsList)
    const query=`/products?q=&&address=${address}`;
    const dispatch=useDispatch();
    useEffect(()=>{
        if (address) {
        const endpoint=`/produtList?_limit=6&q=${address}`;
        dispatch(fetchProductList(endpoint));
        }
        
    },[address])

    const renderProductlist=(productsList)=>{
        if (productsList.status==="loading") {
            return <div><Spinner/></div>
        }
        if (productsList.status==="error") {
            return <div className="fetch-error">Sorry, something wrong. Please reload or contact us.</div>
        }
        if (productsList.status==='success') {
            return productsList.products.length===0?(<h4 className="text-center">Sorry, we currently aren't serving your city, but we will soon be operating.</h4>) :productsList.products.map(item=><Productlanding key={item.id} item={item}/>)
        }
     
    }
    return (
        <section className="section bg-light">
            <h1 className="mb-6 text-center">Discover Your Noodles</h1>
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
               { renderProductlist(productsList)}
            </div>
            <div className="text-center my-3">
            <Link to={query} className="btn red-outline-viewMore mt-4"
              ><span>View More</span></Link
            >
          </div>
        </section>
    )
}
export default Menu;
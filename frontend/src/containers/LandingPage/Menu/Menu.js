import  React, { useEffect, useState }  from 'react';
import Cuisinestagslanding from 'components/CuisinesTags_Landing';
import CuisinesTagsCollapsed from 'components/CuisinesTagsCollapsed';
import Accordion  from 'react-bootstrap/Accordion';
import Card  from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';
import { cuisinesTags,cuisinesTagscollapsed } from 'asset/temJsonFiles/cuisinesTags';
import Productlanding from 'components/Product_Landing';
import { Link } from 'react-router-dom';
import useGetResource from 'utilis/customHooks/useGetResource';
//import {getUserLocation} from 'services/useGeoLocation';
import { useDispatch } from 'react-redux';
import { fetchProductList } from 'actions/productActions';

const Menu=()=>{
    //by default, we fetch the produts based on visitor's address which we get from ip
    const [adrs,setAdrs]=useState("");
    const endpoint=`/produtList?_limit=6&q=${adrs}`;
    const productsList=useGetResource(endpoint);
    const dispatch=useDispatch();
    const getCurrentPosistion=async()=>{
        /*const city= await getUserLocation();
         /*we put guangzhou as city query parameter for display purpose only, 
        because the limit of data, you should replace it in real project.  */
          const city="guangzhou";
          setAdrs(city)
      }
    useEffect(()=>{
        getCurrentPosistion();
        dispatch(fetchProductList(productsList))
    },[adrs,productsList])

    const renderProductlist=(productsList)=>{
       return productsList.length===0?(<h4 className="text-center">Sorry, we currently aren't serving your city, but we will soon be operating.</h4>) :productsList.map(item=><Productlanding key={item.id} item={item}/>)
    }
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
               { renderProductlist(productsList)}
            </div>
            <div className="text-center my-3">
            <Link to="/products" className="btn red-outline-viewMore mt-4"
              ><span>View More</span></Link
            >
          </div>
        </section>
    )
}
export default Menu;
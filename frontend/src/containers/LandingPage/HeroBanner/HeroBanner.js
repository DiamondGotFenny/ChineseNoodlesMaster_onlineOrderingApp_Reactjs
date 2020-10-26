import  React,{useState}  from 'react';
import backgroundImage from "asset/img/landingPage/luosifen8_landingpage.jpg"
import  Container  from 'react-bootstrap/Container';
import { FormControl, InputGroup } from 'react-bootstrap';
import  Button  from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { handleSearch } from 'actions/searchInputAction';
import { handleInputAdrs } from 'actions/inputAddressAction';
import  history  from 'services/history';
import {getUserLocation} from 'services/useGeoLocation';

const HeroBanner=()=>{
    const [adrs,setAdrs]=useState("");
    const [search,setSearch]=useState("");
    const dispatch=useDispatch();
    const handelSubmit=(e,adrs,search)=>{
      e.preventDefault();
      dispatch(handleInputAdrs(adrs));
      dispatch(handleSearch(search));
      history.push(`/products?search=${search}&address=${adrs}`)
    }
    
    const getCurrentPosistion=async()=>{
      const city= await getUserLocation();
      setAdrs(city)
    }

    return(
  <section className="section section-main bg-dark dark">
    <div
      className="bg-image bg-fixed"
      style={{backgroundImage:`url(${backgroundImage})`}}
    >
      <img
        src={`${backgroundImage}`}
        alt="background Luo Si Noodles"
        style={{display:'none'}}
      />
    </div>
    <Container fluid className="v-center hero-container">
      <div className='d-flex flex-column mx-auto justify-content-center'>
      <h1 className="display-2">
            <strong>All Noodles Cuisines</strong> in China
          </h1>
          <h4 className="text-muted mb-5">
            Taste it now with our online order!
          </h4>

          <InputGroup className="form-control col-10 col-lg-6">
              <FormControl
              value={adrs} 
              type="text"
              placeholder="Your Address"
              aria-label="Your Address" 
              aria-describedby="Your Address"
              onChange={e=>setAdrs(e.target.value)} />
              <InputGroup.Append>
                <Button className="pin-icon" onClick={getCurrentPosistion}><span class="ti-location-pin"></span></Button>
              </InputGroup.Append>
          </InputGroup>

          <h4 className="my-3">and</h4>

          <input
            type="text"
            value={search}
            className="form-control search-bar col-10 col-lg-6 mb-4"
            placeholder="Search for your favorite noodle"
            aria-label="enter search keyword"
            aria-describedby="Search for your favorite noodle"
            onChange={e=>setSearch(e.target.value)}
          /><br />

          <button 
          type="submit" 
          className="btn red-outline-btnlg btn-red-fill"
          onClick={(e)=> handelSubmit(e,adrs,search)}
            ><span>Order now</span></button
          >
      </div>
    </Container>

  </section>
    )
}
export default HeroBanner;
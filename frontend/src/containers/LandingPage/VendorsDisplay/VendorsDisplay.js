import  React, { useState,useEffect }  from 'react';
import  Container  from 'react-bootstrap/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VendorLanding from 'components/Vendor_Landing';
import httpService from 'services/httpService';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const VendorsDisplay=(props)=>{
  const [vendorsList,setVendorsList]=useState([]);
  //I fetch products list data here because I think the other 
    //components don't need to know this pieces of data.
    //and the length of this data will be limited in future.
  async function fetchVendorsList() {
    const {data}=await httpService.get("/vendorList");
    setVendorsList(data);
  }
  useEffect(()=>{fetchVendorsList()},[])
    return (
        <section class="section cover pull-up-10">
            <Container fluid>
                <h1 class="m-5 text-center">Featured Restaurants</h1>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={300000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    >
                   {vendorsList.map(item=><div key={item.id}><VendorLanding item={item} /></div>)}   
                </Carousel>;
            </Container>
        </section>
    )
}
export default VendorsDisplay;
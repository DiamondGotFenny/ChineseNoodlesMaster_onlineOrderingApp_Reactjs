import  React from 'react';
import  Container  from 'react-bootstrap/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VendorLanding from 'components/Vendor_Landing';
import useGetResource from 'utilis/customHooks/useGetResource';

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
  const endpoint="/vendorList?_limit=8";
  const {isLoading,hasError,data:vendorsList} =useGetResource(endpoint)

    return (
        <section className="section cover pull-up-10">
            <Container fluid>
                <h1 className="m-5 text-center">Featured Restaurants</h1>
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
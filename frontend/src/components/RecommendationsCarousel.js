import  React, { useEffect, useState }  from 'react';
import { Row, Spinner, Col } from 'react-bootstrap';
import useGetResource from 'utilis/customHooks/useGetResource';
import ProductDisplay from 'components/ProductDisplay';
import  Carousel  from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const RecommendationsCarousel = ({productsList,deviceType}) => {
    const responsive_carousel = {
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
    return ( 
        <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive_carousel}
        infinite={true}
        autoPlay={deviceType !== "mobile" ? true : false}
        autoPlaySpeed={300000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px mx-2"
        >
       { productsList.map(item=><div key={item.id} lg={3}><ProductDisplay item={item}/></div>)}   
        </Carousel>
     );
}
 
export default RecommendationsCarousel;
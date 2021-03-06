import  React  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'components/CarouselItem';
import { promoItems } from 'asset/temJsonFiles/promotionItmes';


const Promotion=()=>{
    return (
      <section className="section bg-light promotion">
        <Carousel interval={null}>
         {promoItems.map(item=><Carousel.Item key={item.itemInfo}><CarouselItem item={item}/></Carousel.Item> )}
        </Carousel>
      </section>
    )
}
export default Promotion;
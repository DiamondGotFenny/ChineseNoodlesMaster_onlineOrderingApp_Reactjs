import  React  from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from '../../components/CarouselItem';
import { promoItems } from './../../asset/temJsonFiles/promotionItmes';


const Promotion=()=>{
    return (
      <section className="section bg-light promotion">
        <Carousel >
         {promoItems.map(item=><Carousel.Item><CarouselItem item={item}/></Carousel.Item> )}
        </Carousel>
      </section>
    )
}
export default Promotion;
import  React  from 'react';
import firstPromoImg from '../../asset/img/landingPage/lanzhou-lamian.jpg';
import secondPromoImg from '../../asset/img/landingPage/reganmian2.jpg';
import thirdPromoImg from '../../asset/img/landingPage/daoxiaomian2small.jpg';
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from '../../components/CarouselItem';

const promoItems=[
  {
    imgLink:firstPromoImg,
    itemInfo:"First slide-Lan Zhou La mian",
    infoLine1:"New Product!Only $8.98!",
    infoLine2:"Lan Zhou Beef Noodles",
    itemLink:"#",
    btnInfo:"Add to cart"
  },
  {
    imgLink:secondPromoImg,
    itemInfo:"Second slide-Wuhan Regan Noodles",
    infoLine1:"Get 40% off coupon",
    infoLine2:"and use it with your next order!",
    itemLink:"#",
    btnInfo:"Get it now!"
  },
  {
    imgLink:thirdPromoImg,
    itemInfo:"Third slide-Winter Melon Cup Dao Xiao Noodles",
    infoLine1:"Winter Melon Dao Xiao Noodles",
    infoLine2:"Order it online even now!",
    itemLink:"#",
    btnInfo:"Order now!"
  }
];
const Promotion=()=>{
    return (
      <section className="section bg-light promotion">
        <Carousel showThumbs={false}>
         {promoItems.map(item=><CarouselItem item={item}/>)}
        </Carousel>
      </section>
    )
}
export default Promotion;
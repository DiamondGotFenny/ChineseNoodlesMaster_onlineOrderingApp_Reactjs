import  React  from 'react';
import HeroBanner from '../containers/HeroBanner_landingPage/HeroBanner';
import Promotion from '../containers/Promotion_landingPage/Promotion';
import Menu from './../containers/Menu_landingPage/Menu';
import VendorsDisplay from '../containers/VendorsDisplay_landingPage/VendorsDisplay';



const LandingPage=()=>{
    return (
    <main>
     <HeroBanner/>
     <Promotion/>
     <Menu/>
     <VendorsDisplay/>
    </main>
    )
}
export default LandingPage;
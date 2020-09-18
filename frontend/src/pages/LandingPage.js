import  React  from 'react';
import HeroBanner from 'containers/LandingPage/HeroBanner/HeroBanner';
import Promotion from 'containers/LandingPage/Promotion/Promotion';
import Menu from 'containers/LandingPage/Menu/Menu';
import VendorsDisplay from 'containers/LandingPage/VendorsDisplay/VendorsDisplay';
import AboutUs from 'containers/LandingPage/AboutUs/AboutUs';
import JoinUs from 'containers/LandingPage/JoinUs/JoinUs';

const LandingPage=()=>{
    return (
        <main>
            <HeroBanner/>
            <Promotion/>
            <Menu/>
            <VendorsDisplay/>
            <AboutUs/>
            <JoinUs/>
        </main>
    )
}
export default LandingPage;
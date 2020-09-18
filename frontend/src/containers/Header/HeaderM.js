import  React  from 'react';
import logoMobile from 'asset/img/logos/logo-mobile-v2.png';


const HeaderM=()=>{
    return (
        <header id="header-mobile" className="light container-fluid">
        <div className="module module-nav-toggle">
          <a href="#" id="nav-toggle" data-toggle="panel-mobile"
            ><span></span><span></span><span></span><span></span
          ></a>
        </div>

        <div className="module module-logo">
          <a href="./landingPage.html" >
            <img
              src={`${logoMobile}`}
              alt="Chinese Noodles Master Logo"
            />
          </a>
        </div>

        <a href="#" className="module module-cart" data-toggle="modal"
        data-target="#shopping-cart-modal ">
          <i className="ti ti-shopping-cart"></i>
          <span className="notification">2</span>
        </a>
      </header>
    )
}
export default HeaderM;
import  React, { useState }  from 'react';
import logoMobile from 'asset/img/logos/logo-mobile-v2.png';
import { Link } from 'react-router-dom';
import ShoppingCartContainer from './ShoppingCartContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import  Button  from 'react-bootstrap/Button';
import PanelMobie from 'components/PanelMobile';

const HeaderM=()=>{
  const [showPanel,setshowPanel]=useState("");
  const handleonHide=()=>{
    setshowPanel("")
  }
    return (
      <>
        <header id="header-mobile" className="light container-fluid">
          <div className="module module-nav-toggle">
            <Button id="nav-toggle" variant="outline-light" onClick={()=>setshowPanel("show")}>
              <FontAwesomeIcon icon={faBars} className="nav-toggle-icon" />
            </Button>
          </div>

          <div className="module module-logo">
            <Link to={"/"}>
              <img
              src={`${logoMobile}`}
              alt="Chinese Noodles Master Logo"
            />
            </Link>
          </div>
          <ShoppingCartContainer />
      </header>
        <PanelMobie showPanel={showPanel} onHide={handleonHide} />
      </>
    )
}
export default HeaderM;
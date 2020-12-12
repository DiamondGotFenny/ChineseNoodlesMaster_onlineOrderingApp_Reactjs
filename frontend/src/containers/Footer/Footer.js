import  React  from 'react';
import footLogo from 'asset/img/logos/logo_ver2_footer.png'
import { socialMedia } from 'asset/temJsonFiles/socialMedia';
import SocialMedia from 'components/SocialMedia';
import { footerNav } from 'asset/temJsonFiles/footerNav';
import FooterNav from 'components/FooterNav';
import Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Footer=()=>{
    return (
        <footer id="footer" className="dark">
          <Container className="footerContent">
            <Row className="footer-first-row align-items-center">
              <Col lg={3} className="text-center">
              <Link to="/"
                ><img
                  src={`${footLogo}`}
                  alt="Chinese Noodles Master Footer Logo"
                  width="145"
                  className="mt-5 mb-5"
              /></Link>
              </Col>
              <Col lg={6} className="align-items-center">
              <h5 className="text-muted text-center">Subscribe Us!</h5>
              <form
                action="#"
                id="sign-up-form"
                className="sign-up-form validate-form mb-5"
                method="POST"
              >
                <div className="input-group">
                  <input
                    name="EMAIL"
                    type="text"
                    id="mce-EMAIL"
                    className="form-control subscribe-input"
                    placeholder="Recipient's username"
                    aria-label="Enter your E-mail..."
                    aria-describedby="Enter your email"
                    required
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary btn-submit" type="submit">
                      <span>Subscribe</span>
                    </button>
                  </div>
                </div>
              </form>
              </Col>
              <Col lg={3} className="text-center">
              <h5 className="text-muted mb-3">Social Media</h5>
              {socialMedia.map(item=>< SocialMedia key={item.iconContainer} item={item}/>)}
              </Col>
            </Row>
          </Container>
          <Row className="footer-second-row mx-auto">
          <span className="text-muted col-lg-3 mb-5 mb-lg-1"
              >Copyright Chinese Noodles Master 2020©. Design and Made by
              Diamondcn923.</span
            >
            <nav className="footer__nav col-lg-9 col-12">
              <ul className="float-left">
                {footerNav.map(item=><FooterNav key={item.text} item={item}/>)}
              </ul>
            </nav>
          </Row>
      </footer>
    )
}

export default Footer;
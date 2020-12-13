import  React  from 'react';
import aboutUsBGImg from 'asset/img/landingPage/about-section_noodles_01.jpg'
import  Container  from 'react-bootstrap/Container';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';
import { AboutUsInfo } from 'asset/temJsonFiles/AboutUsInfo';
import UsFeature from 'components/UsFeatures_Landing';

const AboutUs=()=>{
    const info=[...AboutUsInfo];
    return(
        <section className="section section-bg-edge">
          <div
            className="bg-image bg-fixed about-bg"
            style={{backgroundImage:`url(${aboutUsBGImg})`}}
          >
            <img
              src={`${aboutUsBGImg}`}
              alt=""
              style={{display:'none'}}
            />
          </div>
            <Container>
                <h1 className="display-2 mt-5 text-center">
                    Why order from <strong>US</strong>?
                </h1>
                <Row className="d-flex flex-row-reverse">
                    <Col lg={8}>
                    <p className="lead text-muted mb-2">
                    We pack your noodles in fine ceramic dinnerware not plastic! 
                    </p>
                    <p className="lead text-muted mb-2">
                    Browse 1,000+ menus to find the noodle cuisines you like
                    </p>
                    <p className="lead text-muted mb-2">
                    Find the finest restaurants that deliver to you by entering
                    your address
                    </p>
                    <p className="lead text-muted mb-2">
                    One click! Your Noodles is prepared & delivered to your home
                    or office in minutes
                    </p>
                    <p className="lead text-muted mb-2">
                    Pay fast & secure online or on delivery
                    </p>
                    {info.map(item=> <UsFeature key={item.title} featureInfo={item}/> )}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default AboutUs;
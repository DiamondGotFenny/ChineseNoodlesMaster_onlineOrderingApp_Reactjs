import  React  from 'react';
import bgImg from 'asset/img/landingPage/join_us-section.jpg'
import  Container from 'react-bootstrap/Container';
import  Col  from 'react-bootstrap/Col';
import  Row  from 'react-bootstrap/Row';

const JoinUs=()=>{
    return(
        <section className="section section-lg dark bg-dark">
          <div
            className="bg-image bg-fixed bg-partner"
            style={{backgroundImage:`url(${bgImg})`}}
          >
            <img
              src={`${bgImg}`}
              alt="the cook is cooking noodles"
              style={{display:'none'}}
            />
          </div>
          <Container>
              <Row>
                  <Col xl={6} className='push-md-3'>
                  <h1 className="display-4">
                  You <strong>Prepare</strong> the noodles, We Handle the rest!
                </h1>
                <h3 className="mb-3">
                  List your restaurant on
                  <strong>Chinese Noodles Master</strong> Now!
                </h3>
                <h4 className="text-muted">
                  Thousands of new customers are hungry to taste your amazing
                  noodles, Let us feed them!
                </h4>
                <h4 className="text-muted">
                  It's simple: we list your menu online, help you process
                  orders, pick them up, and deliver them to customers - in a
                  second!
                </h4>
                <h4 className="text-muted">
                  Sound great? Let's start our partnership now!
                </h4>
                <a href="./contactUs.html" className="btn btn-outline-primary btn-lg"
                  ><span className="mx-4">Join Us</span></a
                >
                  </Col>
              </Row>
          </Container>
        </section>
    )
}
export default JoinUs
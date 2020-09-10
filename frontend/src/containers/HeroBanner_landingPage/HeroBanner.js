import  React  from 'react';
import backgroundImage from "../../asset/img/landingPage/luosifen8_landingpage.jpg"
import  Container  from 'react-bootstrap/Container';

const HeroBanner=()=>{
    return(
  <section className="section section-main bg-dark dark">
    <div
      className="bg-image bg-fixed"
      style={{backgroundImage:`url(${backgroundImage})`}}
    >
      <img
        src={`${backgroundImage}`}
        alt="background Luo Si Noodles"
        style={{display:'none'}}
      />
    </div>
    <Container fluid className="v-center">
      <div className='d-flex flex-column w-50 mx-auto align-items-center'>
      <h1 className="display-2">
            <strong>All Cuisines Noodles</strong> in China
          </h1>
          <h4 className="text-muted mb-5">
            Taste it now with our online order!
          </h4>

          <input
            type="text"
            className="form-control col-10 col-lg-6"
            placeholder="Your Address"
            aria-label=""
            aria-describedby="Your Address"
          />
          <h4 className="my-3">and</h4>

          <input
            type="text"
            className="form-control col-10 col-lg-6 mb-4"
            placeholder="Search for your favorite noodle"
            aria-label=""
            aria-describedby="Search for your favorite noodle"
          /><br />

          <a href="./viewMoreMenu.html" className="btn btn-outline-primary btn-lg mb-3 mb-lg-0"
            ><span>Order now</span></a
          >
      </div>
    </Container>

  </section>
    )
}
export default HeroBanner;
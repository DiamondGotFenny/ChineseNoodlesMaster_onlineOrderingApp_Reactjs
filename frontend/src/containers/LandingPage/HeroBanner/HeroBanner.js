import  React  from 'react';
import backgroundImage from "asset/img/landingPage/luosifen8_landingpage.jpg"
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
    <Container fluid className="v-center hero-container">
      <div className='d-flex flex-column mx-auto justify-content-center'>
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

          <button type="submit" className="btn red-outline-btnlg btn-red-fill"
            ><span>Order now</span></button
          >
      </div>
    </Container>

  </section>
    )
}
export default HeroBanner;
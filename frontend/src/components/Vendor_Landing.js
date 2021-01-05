import  React  from 'react';
import { Link } from 'react-router-dom';

const VendorLanding=(props)=>{
        const {imgLink,vendorName,vendorDescr,id}=props.item;
    return (
        <div className="carousel-item-vendors">
          <img
            src={imgLink}
            className="img-responsive d-block card-img-top"
            alt="img1"
           />
            <div className="card-body">
                <h4 className="card-title text-truncate">{vendorName}</h4>
                <p className="card-text block-with-text">
                    {vendorDescr}
                </p>
            </div>
            <div className="mx-auto text-center"><Link to={`/vendors/${id}`} className="btn red-outline-btnmd btn-red-fill"><span>Learn More</span></Link></div>  
        </div>
    )
}

export default VendorLanding;
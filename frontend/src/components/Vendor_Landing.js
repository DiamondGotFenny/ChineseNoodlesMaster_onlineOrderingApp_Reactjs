import  React  from 'react';

const VendorLanding=(props)=>{
        const {imgLink,vendorName,vendorDescr,vendorLink}=props.item;
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
            <div className="mx-auto text-center"><a  href={vendorLink} className="btn red-outline-btnmd btn-red-fill"><span>Learn More</span></a></div>  
        </div>
    )
}

export default VendorLanding;
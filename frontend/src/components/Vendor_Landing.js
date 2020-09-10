import  React  from 'react';

const VendorLanding=(props)=>{
        const {imgLink,vendorName,vendorDescr,vendorLink}=props.item;
    return (
        <div className="carousel-item-vendors">
          <img
            src={imgLink}
            class="img-responsive d-block card-img-top"
            alt="img1"
           />
            <div class="card-body">
                <h4 class="card-title text-truncate">{vendorName}</h4>
                <p class="card-text block-with-text">
                    {vendorDescr}
                </p>
            </div>
            <div class="mx-auto text-center"><a  href={vendorLink} class="btn btn-primary"><span>Learn More</span></a></div>  
        </div>
    )
}

export default VendorLanding;
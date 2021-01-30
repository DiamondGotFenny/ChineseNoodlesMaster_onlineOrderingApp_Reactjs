import  React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faMapMarkedAlt, faPhone, faTruck } from '@fortawesome/free-solid-svg-icons';
import  Ratings  from 'components/ratingStars';
import MyFavorite from './myFavorite';

const VendorInfo = (props) => {
   const  {vendor_process}=props;
   //use for distingush the id type when it is added to the favorite list
   const type="vendor";
    return ( 
        <div className="vendor-info mb-3">
            <div className="vendor-display">
                <img
                    src={vendor_process.imgLink_inside}
                    alt={vendor_process.vendorName}
                />
                <div className="vendor-adrs ml-1">
                    <div
                        className="vendor-adrs-first-line d-flex mt-3 justify-content-left align-items-center"
                    >
                        <h5 className="vendor-title pl-0 col-md-auto col-7">
                        {vendor_process.vendorName}
                        </h5>
                        <div className="vendor-rating ml-sm-1 col-md-auto col-5 d-flex align-items-center">
                            <Ratings rating={4} interactive={false}/>
                            <MyFavorite id={vendor_process.id} type={type}/>
                        </div>
                    </div>
                    <div
                        className="vendor-adrs-second-line mt-2 mt-md-0 d-flex justify-content-left align-items-center"
                    >
                        <strong>Address: </strong>
                        <address className="adrs-detail ml-2 mb-0">
                        <span className='adrs-detail-street mr-2'>{vendor_process.address.street},</span> 
                        <span className='adrs-detail-district mr-2'>{vendor_process.address.district},</span> 
                        <span className='adrs-detail-city mr-2'>{vendor_process.address.city},</span> 
                        <span className='adrs-detail-provice mr-2'>{vendor_process.address.provice}</span> 
                        </address>

                        <div className="vendor-map-modal-btn">
                        <button
                            className="addr-pin-btn ml-1 ml-sm-3"
                            data-target="#vendorMap"
                            data-toggle="modal"
                        >
                        <FontAwesomeIcon icon={faMapMarkedAlt}/>
                        </button>
                        </div>
                    </div>
            <div
                className="vendor-adrs-third-line d-flex justify-content-left align-items-center mt-2 mt-md-0"
            >
                <div className="business-hour">
                <strong>Business Hours: </strong
                ><span className="ml-2">{vendor_process?.businessHour}</span>
                </div>
                <div
                className="vendor-contact ml-auto ml-md-5 d-flex justify-content-left align-items-center"
                >
                <FontAwesomeIcon icon={faPhone}/>
                <span className="phone-num ml-2">{vendor_process.contact}</span>
                </div>
            </div>
            <div className="vendor-adrs-forth-line mt-2 mt-md-0 text-left">
                <span className="red-star"> <FontAwesomeIcon icon={faTruck}/></span>Free
                Delivering with Minimum Order Value of
                <span className="free-delivery-start ml-md-1 ml-0">$30</span>.
            </div>
            </div>
        </div>
      </div>
     );
}
 
export default VendorInfo;
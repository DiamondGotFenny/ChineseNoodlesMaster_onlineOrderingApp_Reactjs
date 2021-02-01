import  React  from 'react';
import  Modal  from 'react-bootstrap/Modal';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Marker = () => <div><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="red"/></div>;
const VendorAdrsMap = (props) => {
    const {show,onHide,coordinate}=props;
  const center={
    lat:coordinate.lat,
    lng: coordinate.lng
  }
  
  return (
    <>
      <Modal show={show} onHide={onHide}  size="lg">
        <Modal.Header closeButton>
        </Modal.Header >
        <Modal.Body  style={{ height: '50vh', width: '100%' }} >
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCAoYWLlH902m5l7BzMHHBI1lHLsZ_Fu4w" }}
                defaultCenter={center}
                defaultZoom={15}
            >
              <Marker
                lat={center.lat}
                lng={center.lng}
              />
          </GoogleMapReact>
        </Modal.Body>
      </Modal>
    </>
  );
}
 
export default VendorAdrsMap;
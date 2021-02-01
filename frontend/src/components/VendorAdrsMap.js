import  React  from 'react';
import  Modal  from 'react-bootstrap/Modal';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { REACT_APP_GOOGLE_MAP_APIKEY } from 'services/TemEnvService';

const Marker = () => <div><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="red"/></div>;
const VendorAdrsMap = (props) => {
    const {show,onHide,coordinate}=props;
    const apiKey=REACT_APP_GOOGLE_MAP_APIKEY;
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
                bootstrapURLKeys={{ key: apiKey }}
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
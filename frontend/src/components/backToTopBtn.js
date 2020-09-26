import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import  React  from 'react';
import ScrollUpButton from "react-scroll-up-button";

const BackToTop=()=>{
    return (
        <div>
        <ScrollUpButton 
         ContainerClassName="return-to-top"
         TransitionClassName="return-to-top-show"
          ShowAtPosition={100} >
              <FontAwesomeIcon icon={faChevronUp} size="4x"/>
        </ScrollUpButton>
      </div>
    )
}
export default BackToTop;
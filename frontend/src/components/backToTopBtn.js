import  React  from 'react';
import ScrollUpButton from "react-scroll-up-button";

const BackToTop=()=>{
    return (
        <div>
        <ScrollUpButton 
         ContainerClassName="return-to-top"
         TransitionClassName="return-to-top-show"
          ShowAtPosition={100} >
              <span className="ti-angle-up"></span>
        </ScrollUpButton>
      </div>
    )
}
export default BackToTop;
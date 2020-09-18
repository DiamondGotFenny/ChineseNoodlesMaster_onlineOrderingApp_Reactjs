import  React  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import {faHeart as faHearRugular} from '@fortawesome/free-regular-svg-icons'

const MyFavorite=(props)=>{
    return (
        <button
        className="add-to-favorite-icon"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Add to Favorite"
      >
          <FontAwesomeIcon icon={faHeart}/>
      </button>
    )
}
export default MyFavorite;
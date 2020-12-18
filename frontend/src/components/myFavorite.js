import  React, {  useEffect, useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfoAction } from './../actions/userAction';
import RequestLogin from './RequestLogin';

const MyFavorite=(props)=>{
    const id=props.id;
    const user=useSelector(state=>state.userInfo);
    const authInfo=useSelector(state=>state.authInfo);
    const [isFav,setisFav]=useState(false);
    const [showModal, setShowModal] = useState(false);
    const dispatch=useDispatch();
    const updateUserInfo=(user,authInfo,updatedList)=>{
      const userInfo_updated={...user.data,favorite_foods_list:updatedList};
      dispatch(updateUserInfoAction(authInfo, userInfo_updated))
    }
    const handleFavritSelected=()=>{
        if (authInfo.data.isSignin&&user.status==="sucess") {
          /*another option is that we can send the product id to the server for checking if this product
           is liked or not, as the favorite list may be very long. but since we just store the food id to the list, the size of list would not be big, download the whole favorite list would not be a problem.
          */
          const list=[...user.data.favorite_foods_list]
            if (isFav) {
                const list_updated=list.filter(ele=>ele!==id);
                
                updateUserInfo(user,authInfo,list_updated);
                
            }else{
             const list_updated=[...list];
             list_updated.push(id);
             
             updateUserInfo(user,authInfo,list_updated);
            }
           setisFav(isFav=>!isFav);
       }else{
        handleShow()
       }
        
       
    }
    const initSetFav=(user,id)=> {
        if (authInfo.data.isSignin&&user.status==="sucess") {
            const isLike=user.data.favorite_foods_list.includes(id)
            return isLike;
          }
         return false;
    }

    const renderHeart=(isFav)=>{
      return isFav? faHeart:farHeart;
    }
    useEffect(()=>{
       setisFav(initSetFav(user,id))
    },[authInfo.data.isSignin,user.status])
    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    return (
      <>
        <button
        className="add-to-favorite-icon"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Add to Favorite"
        onClick={handleFavritSelected}
      >
          <FontAwesomeIcon icon={renderHeart(isFav)}/>
      </button>
      <RequestLogin show={showModal} handleClose={handleClose}/>
      </>
    )
}
export default MyFavorite;
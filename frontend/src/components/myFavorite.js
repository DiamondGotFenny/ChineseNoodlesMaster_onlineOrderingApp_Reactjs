import  React, {  useEffect, useState }  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart} from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInfoAction } from './../actions/userAction';

const MyFavorite=(props)=>{
    const id=props.id;
    const user=useSelector(state=>state.userInfo);
    const authInfo=useSelector(state=>state.authInfo);
    const [isFav,setisFav]=useState(false);
    const dispatch=useDispatch();
    const handleFavritSelected=()=>{
        if (authInfo.authInfo.isSignin&&user.status==="sucess") {
          const list=[...user.userInfo.favorite_foods_list]
            if (isFav) {
                const list_updated=list.filter(ele=>ele!==id);
                const userInfo_updated={...user.userInfo,favorite_foods_list:list_updated};
                dispatch(updateUserInfoAction(authInfo, userInfo_updated))
                
            }else{
             const list_updated=[...list];
             list_updated.push(id);
             const userInfo_updated={...user.userInfo,favorite_foods_list:list_updated};
             dispatch(updateUserInfoAction(authInfo, userInfo_updated))
             
        }
           setisFav(isFav=>!isFav);
       }else{
        console.log('you need to login to add favorite!');
       }
        
       
    }
    function initSetFav(user,id) {
        if (authInfo.authInfo.isSignin&&user.status==="sucess") {
            const isLike=user.userInfo.favorite_foods_list.includes(id)
            return isLike;
          }
         return false;
    }

    const renderHeart=(isFav)=>{
      return isFav? faHeart:farHeart;
    }
    useEffect(()=>{
       setisFav(initSetFav(user,id))
    },[authInfo.authInfo.isSignin,user.userInfo])
    return (
        <button
        className="add-to-favorite-icon"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Add to Favorite"
        onClick={handleFavritSelected}
      >
          <FontAwesomeIcon icon={renderHeart(isFav)}/>
      </button>
    )
}
export default MyFavorite;
import  React,{useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import  GetFilteredProducts  from 'utilis/filterProductlistById';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import  ProductDisplay  from 'components/ProductDisplay';

const ProfileFavorites = () => {
    const [search,setSearch]=useState("");
    const [favorsList,setfavorsList]=useState(null);
    const [filteredProductsList,setfilteredProductsList]=useState(null);
    const userInfo=useSelector(state=>state.userInfo);

    const handleSearch=(favorsList,search)=>{
        if (!favorsList||favorsList.length===0) return; 
            GetFilteredProducts(favorsList,search).then(productList=> {
                setfilteredProductsList(productList)
              });
            
        
    }
    const handleInput=()=>{
        handleSearch(favorsList,search);
   }
    const _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch(favorsList,search);
        }
      }
      const handleClear=()=>{
        setSearch("");
        handleSearch(favorsList,"");
    }
    useEffect(()=>{
        if (userInfo.status==="sucess") {
            setfavorsList(userInfo.data.favorite_foods_list);
            handleSearch(userInfo.data.favorite_foods_list,"");
        }
    },[userInfo.status])
    return ( 
        <>
            <div className="search-favorites-bar">
                <button className="search-input-btn enter-btn" onClick={handleInput}>
                    <FontAwesomeIcon className="search-search-icon" icon={faSearch}/>
                </button>
                <input type="text" className="input-area" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={_handleKeyDown}/>
                <button className="search-input-btn clear" onClick={handleClear}>
                <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <Row className="favorite-items-container mt-3">
                {filteredProductsList&&filteredProductsList.map(item=>(
                  <Col lg={4} key={item.id} >
                    <ProductDisplay item={item}/>
                  </Col>))}
            </Row>
        </>
     );
}
 
export default ProfileFavorites;
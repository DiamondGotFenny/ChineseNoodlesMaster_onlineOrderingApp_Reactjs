import  React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import  GetFilteredProductsById  from 'utilis/filterProductlist';
import  Row from 'react-bootstrap/Row';
import  Col from 'react-bootstrap/Col';
import  ProductDisplay  from 'components/ProductDisplay';
import SearchBar from 'components/SearchBar';

const ProfileFavorites = () => {
    const [search,setSearch]=useState("");
    const [favorsList,setfavorsList]=useState(null);
    const [filteredProductsList,setfilteredProductsList]=useState(null);
    const userInfo=useSelector(state=>state.userInfo);

    const handleSearch=(favorsList,search)=>{
        if (!favorsList||favorsList.length===0) return; 
            GetFilteredProductsById(favorsList,search).then(productList=> {
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
      const handleClear=(e)=>{
        e.preventDefault();
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
            <SearchBar 
            handleInput={handleInput} 
            handleKeyDown={_handleKeyDown} 
            search={search} 
            setSearch={setSearch} 
            handleClear={handleClear} />
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
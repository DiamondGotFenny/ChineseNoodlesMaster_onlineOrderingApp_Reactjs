import  React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

const SearchBar = (props) => {
    const {handleInput,handleKeyDown,search,setSearch,handleClear}=props;
    return ( 
        <div className="search-favorites-bar">
                <button className="search-input-btn enter-btn" onClick={handleInput}>
                    <FontAwesomeIcon className="search-search-icon" icon={faSearch}/>
                </button>
                <input type="text" className="input-area" value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={handleKeyDown}/>
                <button className="search-input-btn clear" onClick={handleClear}>
                <FontAwesomeIcon icon={faTimes} />
                </button>
        </div>
     );
}
 
export default SearchBar;
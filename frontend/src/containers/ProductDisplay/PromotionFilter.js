import  React,{useState}  from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import Accordion  from 'react-bootstrap/Accordion';
import Button  from 'react-bootstrap/Button';
import CollapsedPreferenceFilters from 'components/CollapsedPreferenceFilters';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';

function PromotionFilter() {
  const filterList=['All',"special offers","discounts","new products","recommendation"];
  const queryParams=queryString.parse(useLocation().search)
  const history=useHistory();
  const [inputVal,setinputVal]=useState("");
  const handleInputKeyword=(q="",inputVal="")=>{
    /*the fake json server doesn't not support such query, so it won't work here
    please change this query in your real project due to the server setting
    
    if (q) {
      return `${q}+${inputVal}`;
    }*/
    return inputVal;
  }
  const pushNewQuery=()=>{
    const newQueries = { ...queryParams, q:`${handleInputKeyword(queryParams.q,inputVal)}`};
    history.push({ search: queryString.stringify(newQueries) });
    setinputVal("");
  }
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
     pushNewQuery()
    }
  }
  const handleSearchClicked=(e)=>{
    pushNewQuery()
  }
  const handleOptChange=(e)=>{
    const newQueries = { ...queryParams,promotion:e.target.value};
      history.push({ search: queryString.stringify(newQueries) });
  }
    return (
        <section className="content-filter-container">
           <Accordion >
            <div className="filter-input">
            <button className="search-input-btn" onClick={handleSearchClicked}>
              <FontAwesomeIcon className="search-icon" icon={faSearch}/>
            </button>
              <input
                type="text"
                value={inputVal}
                className="filter-input-area"
                placeholder="search your for favor, spicy, beef ex."
                onChange={(e)=>setinputVal(e.target.value)}
                onKeyPress={_handleKeyDown}
              />
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <FontAwesomeIcon className="filter-icon" icon={faEllipsisV}/>
                </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="0">
                 <CollapsedPreferenceFilters/>
                </Accordion.Collapse>
            </Accordion>
            <Form className="fitler-offers-form">
              <ul className="filter-offers-info-container">
              {filterList.map(item=>(
              <li key={item}>
                 <input className="filter-offers" type="radio" name="filter-offers" id={`offers-${item}`} value={item}  onChange={handleOptChange} />
                <label className="for-filter-offers" htmlFor={`offers-${item}`}>
                  <span >{item}</span>
                </label>
              </li>))}
              </ul>
            </Form>
           
        </section>
    )
}
export default PromotionFilter;
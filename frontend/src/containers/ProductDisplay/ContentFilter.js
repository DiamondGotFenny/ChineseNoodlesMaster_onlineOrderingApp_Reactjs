import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import  React  from 'react';
import Accordion  from 'react-bootstrap/Accordion';
import Button  from 'react-bootstrap/Button';
import FilterCollapsedItems from 'components/FilterCollapsedItems';

function ContentFilter(props) {
    return (
        <section className="content-filter-container">
           <Accordion >
            <div className="filter-input">
            <button className="search-input-btn">
              <FontAwesomeIcon className="search-icon" icon={faSearch}/>
              </button>
              <input
                type="text"
                className="filter-input-area"
                placeholder="search your for favor, spicy, beef ex."
              />
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <FontAwesomeIcon className="filter-icon" icon={faEllipsisV}/>
                </Accordion.Toggle>
            </div>
            <Accordion.Collapse eventKey="0">
                 <FilterCollapsedItems/>
                </Accordion.Collapse>
            </Accordion>
            <ul className="filter-offers-info-container">
            <li><input className="filter-offers" type="radio" name="filter-offers" id="offers-0" />
                <label className="for-filter-offers" htmlFor="offers-0">
                <span >All</span>
                </label></li>
              <li><input className="filter-offers" type="radio" name="filter-offers" id="offers-1" />
                <label className="for-filter-offers" htmlFor="offers-1">
                <span >special offers</span>
                </label></li>
                <li><input className="filter-offers" type="radio" name="filter-offers" id="offers-2"/>
                <label className="for-filter-offers" htmlFor="offers-2">
                <span >discounts</span>
                </label></li>
              <li><input className="filter-offers" type="radio" name="filter-offers" id="offers-3"/>
                <label className="for-filter-offers" htmlFor="offers-3">
                <span >new products</span> </label></li>
              <li><input className="filter-offers" type="radio" name="filter-offers" id="offers-4"/>
                <label className="for-filter-offers" htmlFor="offers-4">
                <span >recommendation</span> </label></li>
            </ul>
        </section>
    )
}
export default ContentFilter;
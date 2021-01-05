import  React  from 'react';

function FilterCollapsedItems(props) {
    return (
        <div className="filterItems" id="content-filter-details-collapsed">
        <ul className="list-group">
        <li className="list-group-item">
            <span className="filter-price">Price:</span>
                <div className="filter-price-items filter-items-details">
                    <label htmlFor="under-10"
                      ><input
                        type="radio"
                        name="price"
                        id="under-10"
                        value="0"
                        defaultChecked
                      /><i></i>under $10</label
                    >

                    <label htmlFor="10-20"
                      ><input
                        type="radio"
                        name="price"
                        id="10-20"
                        value="1"
                      /><i></i>$10-$20</label
                    >

                    <label htmlFor="21-30"
                      ><input
                        type="radio"
                        name="price"
                        id="21-30"
                        value="2"
                      /><i></i>$21-$30</label
                    >

                    <label htmlFor="above-30"
                      ><input
                        type="radio"
                        name="price"
                        id="above-30"
                        value="3"
                      /><i></i>above $30</label
                    >
                </div>
            </li>
            <li className="list-group-item">
                  <span className="filter-soup">Soup:</span>
                  <div className="filter-soup-items filter-items-details">
                      <label htmlFor="with-soup"
                        ><input
                          type="radio"
                          name="soup"
                          id="with-soup"
                          value="0"
                          defaultChecked
                        /><i></i>with soup</label
                      >
                    
                    <label htmlFor="no-soup"
                        ><input
                          type="radio"
                          name="soup"
                          id="no-soup"
                          value="1"
                          
                        /><i></i>no soup</label>
                  </div>
            </li>
            <li className="list-group-item">
                  <span className="filter-pungency">Pungency:</span>
                  <div className="filter-pungency-items filter-items-details">
                    <label htmlFor="no-spicy"
                      ><input
                        type="radio"
                        name="pungency"
                        id="no-spicy"
                        value="0"
                        defaultChecked
                      /><i></i>no spicy</label
                    >
                    <label htmlFor="mild"
                      ><input
                        type="radio"
                        name="pungency"
                        id="mild"
                        value="1"
                      /><i></i>mild</label
                    >
                    <label htmlFor="spicy"
                      ><input
                        type="radio"
                        name="pungency"
                        id="spicy"
                        value="2"
                      /><i></i>spicy</label
                    >
                    <label htmlFor="hot"
                      ><input
                        type="radio"
                        name="pungency"
                        id="hot"
                        value="3"
                      /><i></i>hot</label
                    >
                  </div>
                </li>
                <li className="list-group-item">
                  <span className="filter-meat">Meat:</span>
                  <div className="filter-meat-items filter-items-details">
                   
                    <label htmlFor="vegentarian"
                        ><input
                          type="radio"
                          name="meat"
                          id="vegentarian"
                          value="0"
                          defaultChecked
                        /><i></i>vegentarian</label
                      >
                    
                    <label htmlFor="pork"
                        ><input
                          type="radio"
                          name="meat"
                          id="pork"
                          value="1"
                          
                        /><i></i>pork</label
                      >
                    
                    <label htmlFor="beef"
                    ><input
                      type="radio"
                      name="meat"
                      id="beef"
                      value="2"
                      
                    /><i></i>beef</label
                  >
                    
                    <label htmlFor="chicken"
                    ><input
                      type="radio"
                      name="meat"
                      id="chicken"
                      value="3"
                      
                    /><i></i>chicken</label
                  >
                    
                    <label htmlFor="others"
                    ><input
                      type="radio"
                      name="meat"
                      id="others"
                      value="4"
                      
                    /><i></i>others</label
                  >
                  </div>
                </li>
        </ul>
    </div>
    )
    
}
export default FilterCollapsedItems;
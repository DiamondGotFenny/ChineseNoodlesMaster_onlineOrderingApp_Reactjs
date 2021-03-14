import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import SearchBar from 'components/SearchBar';
import { useSelector } from 'react-redux';
import { CalculateDateBetween } from 'utilis/dateBetweenCal';
import { FilterProductList } from 'utilis/filterProductlist';
import OrderCard from 'components/OrderCard';

const MyOrders = () => {
  const [search, setsearch] = useState('');
  const [list, setlist] = useState([]);
  const userInfo = useSelector((state) => state.userInfo);
  const defaultBetweenVal = '7'; //the default between filter value is a week, that is 7 days;
  const transOrderDateToObj = (currentDate, orderDate) => {
    //we don't need this in real project
    const targetDateObj = new Date(orderDate);
    //the order date doesn't include order time, so we add it here; we may not need this in real project
    targetDateObj.setHours(currentDate.getHours());
    targetDateObj.setMinutes(currentDate.getMinutes());
    targetDateObj.setSeconds(currentDate.getSeconds());
    return targetDateObj;
  };
  const getFilteredList = (list, targetVal) => {
    if (list.length > 0) {
      const currentDate = new Date();
      const ordersBetweenArr = list.filter((item) => {
        const orderDate = transOrderDateToObj(currentDate, item.date);
        const dateBetween = CalculateDateBetween(currentDate, orderDate);
        if (dateBetween <= targetVal) {
          return item;
        }
      });
      return ordersBetweenArr;
    }
  };

  const handleTimeValueChanges = (e) => {
    const val = parseInt(e.target.value);
    const filteredList = getFilteredList(userInfo.data.orders, val);
    setlist(filteredList);
  };
  const handleSearch = (list, search) => {
    if (list.length > 0) {
      const filteredList = FilterProductList(list, search);
      setlist(filteredList);
    }
  };
  const handleInput = (e) => {
    e.preventDefault();
    handleSearch(userInfo.data.orders, search);
  };
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch(userInfo.data.orders, search);
    }
  };
  const handleClear = (e) => {
    e.preventDefault();
    setsearch('');
    if (userInfo.status === 'sucess') {
      initList(userInfo.data.orders, defaultBetweenVal);
    }
  };
  const initList = (list, val) => {
    const filteredList = getFilteredList(list, val);
    setlist(filteredList);
  };
  useEffect(() => {
    if (userInfo.status === 'sucess') {
      initList(userInfo.data.orders, defaultBetweenVal);
    }
  }, [userInfo.status]);
  return (
    <>
      <header>
        <h4>My Orders</h4>
      </header>
      <Form>
        <Form.Row>
          <Col>
            <Form.Control
              id='sortByTime'
              as='select'
              defaultValue={defaultBetweenVal}
              onChange={handleTimeValueChanges}>
              <option value='7'>Orders in Rencent Week</option>
              <option value='30'>Orders in Rencent Month</option>
              <option value='183'>Orders in Last 6 Months</option>
              <option value='365'>Orders in Last 12 Months</option>
              <option value='9999'>All</option>
            </Form.Control>
          </Col>
          <Col>
            <SearchBar
              handleInput={handleInput}
              handleKeyDown={_handleKeyDown}
              search={search}
              setSearch={setsearch}
              handleClear={handleClear}
            />
          </Col>
        </Form.Row>
      </Form>
      {list.length > 0 &&
        list.map((item) => <OrderCard key={item.id} item={item} />)}
    </>
  );
};

export default MyOrders;

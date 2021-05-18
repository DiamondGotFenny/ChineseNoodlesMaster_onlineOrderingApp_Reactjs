class APIFeatures {
  constructor(queryResult, queryString) {
    this.queryString = queryString;
    this.queryResult = queryResult;
  }
  filter() {
    const queryObj = { ...this.queryString };
    //we don't want the query object includes these keys, they are not part of the data fields
    //if we do that it will return nothing
    const excludeFields = ['sort', 'page', 'limit', 'fields'];
    excludeFields.forEach((ele) => delete queryObj[ele]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    const updatedQueryObj = JSON.parse(queryStr);
    //we createe a queryResult because we want to use sort, limit, page method for filter later
    this.queryResult = this.queryResult.find(updatedQueryObj);
    //we need to return the whole instance. so that we can use other methods in it.
    return this;
  }
  //sorting result
  sort() {
    if (this.queryString.sort) {
      const sortby = this.queryString.sort.replace(',', ' ');
      this.queryResult = this.queryResult.sort(sortby);
    } else {
      this.queryResult = this.queryResult.sort('price');
    }
    return this;
  }
  limitFields() {
    //limted fields
    if (this.queryString.fields) {
      const fields = this.queryString.fields.replace(',', ' ');
      this.queryResult = this.queryResult.select(fields);
    } else {
      this.queryResult = this.queryResult.select('-__v'); //we don't want to send this property value to the client
    }
    return this;
  }
  paginate() {
    //pagination
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 100;
    const skip = (page - 1) * limit;
    this.queryResult = this.queryResult.skip(skip).limit(limit);
    return this;
  }
}
module.exports = APIFeatures;

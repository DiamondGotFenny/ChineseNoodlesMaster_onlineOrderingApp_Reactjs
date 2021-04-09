const ProductModel = require('../models/ProductModel');
exports.getAllProducts = async (req, res) => {
  try {
    //const products = await ProductModel.find().lean();

    const queryObj = { ...req.query };
    //we don't want the query object includes these keys, they are not part of the data fields
    //if we do that it will return nothing
    const excludeFields = ['sort', 'page', 'limit', 'fields'];
    excludeFields.forEach((ele) => delete queryObj[ele]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);
    const updatedQueryObj = JSON.parse(queryStr);
    //we createe a queryResult because we want to use sort, limit, page method for filter later
    const queryResult = ProductModel.find(updatedQueryObj);

    const products = await queryResult;
    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: products.length,
      data: {
        products,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: 'get products fail!',
      message: error.message,
    });
  }
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModel.findOne({ _id: id }).lean();
    res.status(200).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: 'find product fail!',
      message: 'invalid id',
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        product,
      },
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      status: 'create product fail!',
      message: 'invalid data sent',
    });
  }
};

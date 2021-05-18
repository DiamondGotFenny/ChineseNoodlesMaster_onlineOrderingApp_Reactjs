const ProductModel = require('../models/ProductModel');
const factory = require('./handleFactory');

//we may need this in our project, or if you want to display default setting for products
//based on geographics for example
exports.topProducts = (req, res, next) => {
  req.query.limit = '50';
  req.query.sort = '-price,rating';
  req.query.fields = 'price,name,rating';

  next();
};
exports.getAllProducts = factory.getAll(ProductModel, 'products');
exports.getProduct = factory.getOne(ProductModel, 'product', {
  path: 'vendor',
});
exports.createProduct = factory.createOne(ProductModel, 'product');
exports.updateProduct = factory.updateOne(ProductModel, 'product');
exports.deleteProduct = factory.deleteOne(ProductModel);

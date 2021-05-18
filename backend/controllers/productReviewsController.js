const ProductReiviewsModel = require('../models/productReviewModel');
const factory = require('./handleFactory');
exports.setProductUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.product) req.body.product = req.params.productId;
  req.body.user = req.user.id;
  next();
};

exports.getProductReviews = factory.getAll(
  ProductReiviewsModel,
  'productReviews'
);
exports.getProductReview = factory.getOne(
  ProductReiviewsModel,
  'productReview'
);
exports.createReview = factory.createOne(ProductReiviewsModel, 'productReview');
exports.updateProductReview = factory.updateOne(
  ProductReiviewsModel,
  'productReview'
);
exports.deleteProductReview = factory.deleteOne(ProductReiviewsModel);

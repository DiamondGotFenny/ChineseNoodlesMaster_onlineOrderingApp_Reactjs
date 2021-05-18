const VendorReiviewsModel = require('../models/vendorReviewModel');
const factory = require('./handleFactory');
exports.setVendorUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.vendor) req.body.vendor = req.params.vendorId;
  req.body.user = req.user.id;
  next();
};

exports.getVendorReviews = factory.getAll(VendorReiviewsModel, 'vendorReviews');
exports.getVendorReview = factory.getOne(VendorReiviewsModel, 'vendorReview');
exports.createReview = factory.createOne(VendorReiviewsModel, 'vendorReview');
exports.updateVendorReview = factory.updateOne(
  VendorReiviewsModel,
  'vendorReview'
);
exports.deleteVendorReview = factory.deleteOne(VendorReiviewsModel);

const express = require('express');
const vendorController = require('../controllers/vendorController');
//const authController = require('../controllers/authController');
const vendorReviewRoute = require('./vendorReviewsRouter');
const router = express.Router();

router.use('/:vendorId/reviews', vendorReviewRoute);
//may need to use to display vendors at the front page based on geographic
router
  .route('/defaultDisplay')
  .get(vendorController.defaultDisplay, vendorController.getAllVendors);

// create/update/delete product should be done from another app
router.route('/').get(vendorController.getAllVendors);
/* .post(
    authController.protect,
    authController.restrictTo('admin'),
    productController.createProduct
  ); */

router.route('/:id').get(vendorController.getVendor);
/* .patch(
    authController.protect,
    authController.restrictTo('admin'),
    productController.updateProduct
  ) */
/*  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    productController.deleteProduct
  ); */

module.exports = router;

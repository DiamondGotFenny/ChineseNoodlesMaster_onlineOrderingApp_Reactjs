const express = require('express');
const productController = require('../controllers/productController');
//const authController = require('../controllers/authController');
const productReviewRoute = require('./productReviewsRouter');
const router = express.Router();

router.use('/:productId/reviews', productReviewRoute);
//may need to use to display products at the front page based on geographic
router
  .route('/defaultDisplay')
  .get(productController.topProducts, productController.getAllProducts);

// create/update/delete product should be done from another app
router.route('/').get(productController.getAllProducts);
/* .post(
    authController.protect,
    authController.restrictTo('admin'),
    productController.createProduct
  ); */

router.route('/:id').get(productController.getProduct);
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

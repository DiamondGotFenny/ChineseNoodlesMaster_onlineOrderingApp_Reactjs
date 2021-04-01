const express = require('express');
const productReviewController = require('../controllers/productReviewsController');

const router = express.Router();
router.param('productId', productReviewController.checkProductId);
router
  .route('/:productId')
  .get(productReviewController.getProductReviewsList)
  .post(
    productReviewController.checkBody,
    productReviewController.createReview
  );
router.param('reviewId', productReviewController.checkReviewId);
router
  .route('/:productId/:reviewId')
  .get(productReviewController.getProductReview)
  .patch(productReviewController.updateProductReview)
  .delete(productReviewController.deleteProductReview);
module.exports = router;

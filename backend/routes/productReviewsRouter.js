const express = require('express');
const productReviewController = require('../controllers/productReviewsController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(productReviewController.getProductReviews)
  .post(productReviewController.createReview);

router
  .route('/:id')
  .get(productReviewController.getProductReview)
  .patch(productReviewController.updateProductReview)
  .delete(productReviewController.deleteProductReview);
/* router.use(authController.protect);
router
  .route('/')
  .get(productReviewController.getProductReviewsList)
  .post(
    authController.restrictTo('user'),
    productReviewController.setProductUserIds,
    productReviewController.createReview
  ); 
router
  .route('/:reviewId')
  .get(productReviewController.getProductReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    productReviewController.updateProductReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    productReviewController.deleteProductReview
  );*/

module.exports = router;

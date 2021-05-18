const express = require('express');
const vendorReviewController = require('../controllers/vendorReviewsController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(vendorReviewController.getVendorReviews)
  .post(vendorReviewController.createReview);

router
  .route('/:id')
  .get(vendorReviewController.getVendorReview)
  .patch(vendorReviewController.updateVendorReview)
  .delete(vendorReviewController.deleteVendorReview);
/* router.use(authController.protect);
router
  .route('/')
  .get(vendorReviewController.getVendorReviews)
  .post(
    authController.restrictTo('user'),
    vendorReviewController.setVendorUserIds,
    vendorReviewController.createReview
  ); 
router
  .route('/:id')
  .get(vendorReviewController.getVendorReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    vendorReviewController.updateVendorReview
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    vendorReviewController.deleteVendorReview
  );*/

module.exports = router;

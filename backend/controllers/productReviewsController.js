const ProductReiviewsModel = require('../models/productReviewModel');
const createProductReviewsList = async (reqBody) => {
  const reviewsList = { ...reqBody };
  const rlObj = new ProductReiviewsModel(reviewsList);
  const rlDoc = await rlObj.save();
  return rlDoc;
};

//check if the product id exist is in the database before retrieve the reviews list
exports.checkProductId = async (req, res, next, val) => {
  const hasProduct = await ProductReiviewsModel.exists({ _id: val });
  if (!hasProduct) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid Id',
    });
  }
  next();
};

//check if the review id exist is in the database before retrieve a specific review
exports.checkReviewId = async (req, res, next, val) => {
  try {
    const reviewsList = await ProductReiviewsModel.findOne({
      _id: req.params.productId,
    }).lean();
    const hasReview = reviewsList.reviews.some(
      (ele) => ele._id.toString() === val
    );
    if (!hasReview) {
      return res.status(404).json({
        status: 'Fail',
        message: 'Invalid review Id',
      });
    }
  } catch (error) {
    console.log(error.message);
  }
  next();
};

exports.checkBody = (req, res, next) => {
  const validReview = Object.values(req.body).every((ele) => ele);
  if (!validReview) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid input content',
    });
  }
  next();
};
exports.getProductReviewsList = async (req, res) => {
  const id = req.params.productId;

  try {
    const reviewsDoc = await ProductReiviewsModel.findOne({
      _id: id,
    }).lean();
    const reviewsList = reviewsDoc.reviews;
    res.status(200).json({
      status: 'success',
      data: {
        reviewsList,
      },
    });
  } catch (error) {
    return res.status(404).json({
      status: 'Fail',
      message: error.message,
    });
  }
};

exports.getProductReview = async (req, res) => {
  const reviewId = req.params.reviewId;
  const productId = req.params.productId;
  try {
    const reviewsList = await ProductReiviewsModel.findOne({
      _id: productId,
    }).lean();
    const review = reviewsList.reviews.find(
      (ele) => ele._id.toString() === reviewId
    );

    res.status(200).json({
      status: 'success',
      data: {
        review,
      },
    });
  } catch (error) {
    return res.status(404).json({
      status: 'Fail',
      message: error.message,
    });
  }
};

exports.createReview = async (req, res) => {
  try {
    const reviewsList = await ProductReiviewsModel.findOne({
      _id: req.params.productId,
    });
    const review = { ...req.body };
    const repeatedReview = reviewsList.reviews.find(
      (ele) =>
        ele.comment === review.comment && ele.authorId === review.authorId
    );
    if (repeatedReview) {
      return res.status(400).json({
        status: 'fail',
        message: 'repeated review',
      });
    }
    reviewsList.reviews.push(review);
    const updatedReviewsList = await reviewsList.save();
    res.status(200).json({
      status: 'success',
      data: {
        updatedReviewsList,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.updateProductReview = async (req, res) => {
  try {
    const reviewsList = await ProductReiviewsModel.findOne({
      _id: req.params.productId,
    });
    updateItem = { ...req.body };
    const targetIndex = reviewsList.reviews.findIndex(
      (ele) => ele._id.toString() === updateItem._id
    );
    reviewsList.reviews[targetIndex] = updateItem;
    const updatedReviewsList = await reviewsList.save();
    res.status(200).json({
      status: 'success',
      data: {
        updatedReviewsList: updatedReviewsList,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

exports.deleteProductReview = async (req, res) => {
  try {
    const reviewsList = await ProductReiviewsModel.findOne({
      _id: req.params.productId,
    });
    id = req.params.reviewId;
    const updatedReviews = reviewsList.reviews.filter(
      (ele) => ele._id.toString() !== id
    );
    reviewsList.reviews = updatedReviews;
    const updatedReviewsList = await reviewsList.save();
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    return res.status(400).json({
      status: 'fail',
      message: error.message,
    });
  }
};

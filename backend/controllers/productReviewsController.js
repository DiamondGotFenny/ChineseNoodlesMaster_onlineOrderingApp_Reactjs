const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const productReviews = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/productReviewsData.json`)
);

const getProductReviewsList = (id) => {
  const hasProduct = productReviews.find((product) => product.id === id);
  return hasProduct;
};
const getProductReview = (reviewsList, id) => {
  const review = reviewsList.reviews.find((review) => review.id === id);
  return review;
};
//check if the product id exist is in the database before retrieve the reviews list
exports.checkProductId = (req, res, next, val) => {
  const hasProduct = getProductReviewsList(val);
  if (!hasProduct) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid Id',
    });
  }
  next();
};

//check if the review id exist is in the database before retrieve a specific review
exports.checkReviewId = (req, res, next, val) => {
  const productId = req.params.productId;
  const reviewsList = getProductReviewsList(productId);
  const review = getProductReview(reviewsList, val);
  if (!review) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid Id',
    });
  }
  next();
};

exports.checkBody = (req, res, next) => {
  const validReview = Object.values(req.body).every((ele) => ele);
  console.log(validReview);
  if (!validReview) {
    return res.status(400).json({
      status: 'fail',
      message: 'Invalid input content',
    });
  }
  next();
};
exports.getProductReviewsList = (req, res) => {
  const id = req.params.productId;
  const reviewsList = getProductReviewsList(id);
  res.status(200).json({
    status: 'success',
    data: {
      reviewsList,
    },
  });
};

exports.getProductReview = (req, res) => {
  const reviewId = req.params.reviewId;
  const productId = req.params.productId;
  const reviewsList = getProductReviewsList(productId);
  const review = getProductReview(reviewsList, reviewId);
  res.status(200).json({
    status: 'success',
    data: {
      review,
    },
  });
};

exports.createReview = (req, res) => {
  const newId = uuidv4();
  const newReview = { ...req.body, id: newId };
  const productId = req.params.productId;
  const reviewsList = getProductReviewsList(productId);
  reviewsList['reviews'].push(newReview);

  //in real project, we should not use this, use database instead
  const newProductReviews = productReviews.map((product) => {
    if (product.id === productId) {
      product.reviews = [...reviewsList['reviews']];
    }
    return product;
  });

  fs.writeFile(
    `${__dirname}/../data/productReviewsData.json`,
    JSON.stringify(newProductReviews),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          review: newReview,
        },
      });
    }
  );
};

exports.updateProductReview = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

exports.deleteProductReview = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

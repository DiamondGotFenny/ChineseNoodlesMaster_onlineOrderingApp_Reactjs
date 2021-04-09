const mongoose = require('mongoose');

const productReviewSchema = new mongoose.Schema(
  {
    reviewTitle: {
      type: String,
      trim: true,
      required: [true, 'review title is required'],
    },
    author: {
      type: String,
      trim: true,
      required: [true, 'author name is required'],
    },
    authorId: {
      type: String,
      required: [true, 'author id is required'],
      unique: true,
    },
    rating: { type: Number, required: [true, 'rating is required'] },
    comment: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
const productReviewsSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: [true, 'product id is required'],
      unique: true,
    },
    vendorId: {
      type: String,
      required: [true, 'product id is required'],
      unique: true,
    },
    reviews: [productReviewSchema],
  },
  { collection: 'ProductReviews' }
);

const ProductReiviewsModel = mongoose.model(
  'ProductReviews',
  productReviewsSchema
);

module.exports = ProductReiviewsModel;

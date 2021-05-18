const mongoose = require('mongoose');
const ProductModel = require('./productModel');

const productReviewsSchema = new mongoose.Schema(
  {
    /* user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'user id is required'],
    }, */
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
      required: [true, 'product id is required'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, 'rating is required'],
    },
    comment_title: {
      type: String,
      trim: true,
      required: [true, 'review title is required'],
      unique: true,
    },
    comment: {
      type: String,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: 'productReviews' },
  { timestamps: true },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
productReviewsSchema.set('toObject', { virtuals: true });
productReviewsSchema.set('toJSON', { virtuals: true });
//one user can only give one review to one product
productReviewsSchema.index({ product: 1, user: 1 }, { unique: true });

/* productReviewsSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
}); */

//re calculate average ratings after new review was saved to document
productReviewsSchema.statics.calcAverageRatings = async function (productId) {
  const stats = await this.aggregate([
    {
      $match: { product: productId },
    },
    {
      $group: {
        _id: '$product',
        numRatings: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  if (stats.length > 0) {
    await ProductModel.findByIdAndUpdate(productId, {
      totalRatings: stats[0].numRatings,
      averageRating: stats[0].avgRating,
    });
  } else {
    await ProductModel.findByIdAndUpdate(productId, {
      totalRatings: 0,
      averageRating: 4.5,
    });
  }
};
//update aver ratings after new review saved
productReviewsSchema.post('save', function () {
  // this points to current review
  this.constructor.calcAverageRatings(this.product);
});
//update aver ratings after exist review updated
productReviewsSchema.post(/^findOneAnd/, async function (doc) {
  if (doc) await doc.constructor.calcAverageRatings(doc.product);
});

const ProductReiviewsModel = mongoose.model(
  'ProductReviews',
  productReviewsSchema
);

module.exports = ProductReiviewsModel;

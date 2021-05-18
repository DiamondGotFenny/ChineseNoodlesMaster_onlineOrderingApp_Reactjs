const mongoose = require('mongoose');
const vendorModel = require('./vendorModel');

const vendorReviewsSchema = new mongoose.Schema(
  {
    /* user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'user id is required'],
      }, */
    vendor: {
      type: mongoose.Schema.ObjectId,
      ref: 'Vendor',
      required: [true, 'vendor id is required'],
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
  { collection: 'vendorReviews' },
  { timestamps: true }
);
vendorReviewsSchema.set('toObject', { virtuals: true });
vendorReviewsSchema.set('toJSON', { virtuals: true });
//one user can only give one review to one product
vendorReviewsSchema.index({ product: 1, user: 1 }, { unique: true });

/* vendorReviewsSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name photo',
  });
  next();
}); */

//re calculate average ratings after new review was saved to document
vendorReviewsSchema.statics.calcAverageRatings = async function (vendorId) {
  const stats = await this.aggregate([
    {
      $match: { product: vendorId },
    },
    {
      $group: {
        _id: '$vendor',
        numRatings: { $sum: 1 },
        avgRating: { $avg: '$rating' },
      },
    },
  ]);
  if (stats.length > 0) {
    await vendorModel.findByIdAndUpdate(vendorId, {
      totalRatings: stats[0].numRatings,
      averageRating: stats[0].avgRating,
    });
  } else {
    await vendorModel.findByIdAndUpdate(vendorId, {
      totalRatings: 0,
      averageRating: 4.5,
    });
  }
};
//update aver ratings after new review saved
vendorReviewsSchema.post('save', function () {
  // this points to current review
  this.constructor.calcAverageRatings(this.vendor);
});
//update aver ratings after exist review updated
vendorReviewsSchema.post(/^findOneAnd/, async function (doc) {
  if (doc) await doc.constructor.calcAverageRatings(doc.vendor);
});

const VendorReviewsModel = mongoose.model('VendorReviews', vendorReviewsSchema);

module.exports = VendorReviewsModel;

const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema(
  {
    productTitle: {
      type: String,
      trim: true,
      required: [true, 'product name is required'],
      maxlength: [
        20,
        'A product name must have less or equal than 20 characters',
      ],
      minlength: [
        3,
        'A product name must have more or equal than 3 characters',
      ],
    },
    productDescr: {
      type: String,
      trim: true,
      required: [true, 'product description is required'],
      maxlength: [
        1000,
        'A product description must have less or equal than 1000 characters',
      ],
      minlength: [
        10,
        'A product description must have more or equal than 10 characters',
      ],
    },
    productIngredients: {
      type: String,
      trim: true,
      required: [true, 'product description is required'],
      maxlength: [
        100,
        'A product ingredients must have less or equal than 100 characters',
      ],
      minlength: [
        10,
        'A product ingredients must have more or equal than 10 characters',
      ],
    },
    productImg: {
      type: String,
      required: [true, 'A product must have a cover image'],
    },
    slug: String,
    vendor: { type: mongoose.Schema.ObjectId, ref: 'Vendor' },
    price: { type: Number, required: [true, 'price is required'] },
    averageRating: {
      type: Number,
      default: 4,
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be below 5.0'],
      set: (val) => Math.round(val * 10) / 10, // 4.666666, 46.6666, 47, 4.7
    },
    totalRatings: {
      type: Number,
      default: 0,
    },
    category: {
      type: String,
      required: [true, 'A product must have a category'],
      enum: {
        values: [
          'guangxi',
          'shangdong',
          'shanxi',
          'sichuang',
          'yunnan',
          'Gansu',
        ],
        message: 'invalid category',
      },
    },
    tags: [String],
  },
  { collection: 'products' }
);
productSchema.set('toObject', { virtuals: true });
productSchema.set('toJSON', { virtuals: true });

//create those indexes for quicker searching
productSchema.index({ price: 1 });
productSchema.index({ averageRating: 1 });
productSchema.index({ category: 1 });
productSchema.index({ productTitle: 1 });

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
productSchema.pre('save', function (next) {
  //avoid duplicated product name
  const slugStr = this.productTitle + this.vendorId.slice(5);
  this.slug = slugify(slugStr, { lower: true });
  next();
});
//to fix the "Mongoose Cannot Overwrite Model Once Compiled" Error
module.exports =
  mongoose.models.Product || mongoose.model('Product', productSchema);

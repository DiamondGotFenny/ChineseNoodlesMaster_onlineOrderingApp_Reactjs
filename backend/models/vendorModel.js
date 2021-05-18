const mongoose = require('mongoose');
const slugify = require('slugify');

const vendorSchema = new mongoose.Schema(
  {
    vendorName: {
      type: String,
      trim: true,
      required: [true, 'vendor name is required'],
      maxlength: [
        20,
        'A vendor name must have less or equal than 20 characters',
      ],
      minlength: [3, 'A vendor name must have more or equal than 3 characters'],
    },
    vendorDescr: {
      type: String,
      trim: true,
      required: [true, 'vendor description is required'],
      maxlength: [
        1000,
        'A vendor description must have less or equal than 1000 characters',
      ],
      minlength: [
        10,
        'A vendor description must have more or equal than 10 characters',
      ],
    },
    vendorImg: {
      type: String,
      required: [true, 'A vendor must have a cover image'],
    },
    vendorInsideImg: {
      type: String,
      required: [true, 'A vendor must have a inside image'],
    },
    slug: String,
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
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return /\d{3}-\d{4}-\d{4}/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
      required: [true, 'Vendor phone number required'],
      unique: true,
    },
    address: {
      // GeoJSON
      type: {
        type: String,
        default: 'Point',
        enum: ['Point'],
      },
      coordinates: [Number],
      province: String,
      city: String,
      district: String,
      street: String,
    },
    businessHourDay: {
      type: String,
      trim: true,
      required: [true, 'Business hour days required'],
    },
    businessHourEnd: {
      type: String,
      trim: true,
      required: [true, 'Business hour end time required'],
    },
    businessHourStart: {
      type: String,
      trim: true,
      required: [true, 'Business hour start time required'],
    },
    open: { type: Boolean, required: [true, 'business status is required'] },
  },
  { collection: 'vendors' }
);

vendorSchema.set('toObject', { virtuals: true });
vendorSchema.set('toJSON', { virtuals: true });

//create those indexes for quicker searching
vendorSchema.index({ address: 1 });
vendorSchema.index({ averageRating: 1 });
vendorSchema.index({ vendorName: 1 });

//populate the menu array when having a get request
vendorSchema.virtual('menu', {
  ref: 'Product',
  foreignField: 'vendor',
  localField: '_id',
});
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
vendorSchema.pre('save', function (next) {
  this.slug = slugify(this.vendorName, { lower: true });
  next();
});
const VendorModel = mongoose.model('Vendor', vendorSchema);

module.exports = VendorModel;

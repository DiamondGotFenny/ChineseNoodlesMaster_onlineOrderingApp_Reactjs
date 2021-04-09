const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    productTitle: {
      type: String,
      trim: true,
      required: [true, 'product name is required'],
    },
    productDescr: {
      type: String,
      trim: true,
      required: [true, 'product description is required'],
    },
    price: { type: Number, required: [true, 'price is required'] },
    rating: { type: Number, required: [true, 'rating is required'] },
    tags: { type: Array, required: [true, 'tags is required'] },
  },
  { collection: 'Products' }
);

const ProductModel = mongoose.model('Product', productSchema);

module.exports = ProductModel;

const vendorModel = require('../models/vendorModel');
const factory = require('./handleFactory');

//we may need this in our project, or if you want to display default setting for vendors
//based on geographics for example
exports.defaultDisplay = (req, res, next) => {
  /*   req.query.limit = '50';
    req.query.sort = '-price,rating';
    req.query.fields = 'price,name,rating'; */

  next();
};
exports.getAllVendors = factory.getAll(vendorModel, 'vendors');
exports.getVendor = factory.getOne(vendorModel, 'vendor', {
  path: 'menu',
});
exports.createVendor = factory.createOne(vendorModel, 'vendor');
exports.updateVendor = factory.updateOne(vendorModel, 'vendor');
exports.deleteVendor = factory.deleteOne(vendorModel);

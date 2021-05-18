const AppError = require('../utils/AppError');
const APIFeatures = require('../utils/APIFeatures');

exports.deleteOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
exports.updateOne =
  (Model, fieldName = 'data') =>
  async (req, res, next) => {
    try {
      const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });

      if (!doc) {
        return next(new AppError('No document found with that ID', 404));
      }

      res.status(200).json({
        status: 'success',
        data: {
          [fieldName]: doc,
        },
      });
    } catch (error) {
      next(error);
    }
  };

exports.createOne =
  (Model, fieldName = 'data') =>
  async (req, res, next) => {
    try {
      const doc = await Model.create(req.body);

      res.status(201).json({
        status: 'success',
        data: {
          [fieldName]: doc,
        },
      });
    } catch (error) {
      next(error);
    }
  };

exports.getOne =
  (Model, fieldName = 'data', popOptions) =>
  async (req, res, next) => {
    try {
      let query = Model.findById(req.params.id);
      //do the populate if there is one
      if (popOptions) query = query.populate(popOptions);

      const doc = await query;

      if (!doc) {
        return next(new AppError('No document found with that ID', 404));
      }
      res.status(200).json({
        status: 'success',
        data: {
          [fieldName]: doc,
        },
      });
    } catch (error) {
      next(error);
    }
  };

exports.getAll =
  (Model, fieldName = 'data', populateOptions) =>
  async (req, res, next) => {
    try {
      // the filter only for the nested GET reviews controller
      //we may need to extract it to a middleware
      let filter = {};
      if (req.params.productId) filter = { product: req.params.productId };

      const features = new APIFeatures(Model.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      // If there are some virtual references to show
      if (populateOptions)
        features.query = features.query.populate(populateOptions);

      const doc = await features.queryResult;
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
          [fieldName]: doc,
        },
      });
    } catch (error) {
      next(error);
    }
  };

exports.getProduct = async (req, res, next) => {
  const id = req.params.id;

  ProductModel.findOne({ _id: id })
    .then((doc) => {
      res.status(200).json({
        status: 'success',
        data: {
          product: doc,
        },
      });
    })
    .catch((error) => next(error));
};

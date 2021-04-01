const fs = require('fs');
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/productsData.json`)
);
//check if the id from request is in database before retrieve specific product data
exports.checkId = (req, res, next, val) => {
  console.log(`the product id is ${val}`);
  const id = req.params.id;
  const hasProduct = products.find((product) => product.id === id);
  if (!hasProduct) {
    return res.status(404).json({
      status: 'Fail',
      message: 'Invalid Id',
    });
  }
  next();
};
exports.getAllProducts = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: products.length,
    data: {
      products,
    },
  });
};

exports.getProduct = (req, res) => {
  const id = req.params.id;

  const product = products.find((el) => el.id === id);
  console.log(req.params.id, 'id');
  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
};

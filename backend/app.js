const express = require('express');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const productReviewsRouter = require('./routes/productReviewsRouter');
const app = express();
const path = '/api/v1';
app.use(express.json());
app.use(`${path}/products`, productRouter);
app.use(`${path}/users`, userRouter);
app.use(`${path}/productReviews`, productReviewsRouter);

module.exports = app;

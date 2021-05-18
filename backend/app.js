const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const productRouter = require('./routes/productRouter');
const vendorRouter = require('./routes/vendorRouter');
const userRouter = require('./routes/userRouter');
const productReviewsRouter = require('./routes/productReviewsRouter');
const vendorReviewsRouter = require('./routes/vendorReviewsRouter');
const AppError = require('./utils/AppError');
const globalErrorHandler = require('./controllers/errorController');

const app = express();
// 1) GLOBAL MIDDLEWARES
// Set security HTTP headers
app.use(helmet());

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!',
});
app.use('/api', limiter);

const path = '/api/v1';
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: ['totalRatings', 'averageRating', 'price'],
  })
);

// Serving static files
app.use(express.static(`${__dirname}/public`));

//Serves all the request which includes /images in the url from Images folder
app.use('/img/productsPic', express.static(__dirname + '/img/productsPic'));

// 3) ROUTES
app.use(`${path}/products`, productRouter);
app.use(`${path}/users`, userRouter);
app.use(`${path}/productReviews`, productReviewsRouter);
app.use(`${path}/vendors`, vendorRouter);
app.use(`${path}/vendorReviews`, vendorReviewsRouter);

//404 error handler
app.all('*', (req, res, next) => {
  //pass the error object to next
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
//pass the global error handler as plugin to the middleware
app.use(globalErrorHandler);

module.exports = app;

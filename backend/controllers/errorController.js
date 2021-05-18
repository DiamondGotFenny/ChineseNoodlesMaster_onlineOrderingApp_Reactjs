const AppError = require('../utils/AppError');

//handle invalid id error from Mongodb
const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

//handle duplicated submitted content from Mongodb
const handleDuplicateFields = (err) => {
  const value = Object.values(err.keyValue)[0];
  const message = `Duplicate field value: ${value}. Use another value.`;
  return new AppError(message, 400);
};

//handle validation errors
const handleValidationErrorDB = (err) => {
  const message = `Please correct the following errors: ${err.message}`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    //we would like to send more messages when we are in dev mode
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  // Operational, trusted error: send message to client, not leak error detail
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });

    // Programming or other unknown error
  } else {
    // 1) Log error, or send it to other terminals for recording
    console.error('ERROR 💥: ', err);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';
  //we want to send different messages in different env
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    if (error.name === 'CastError') {
      error = handleCastErrorDB(error);
    }
    if (error.code === 11000) error = handleDuplicateFields(error);
    sendErrorProd(error, res);
    if (error.name === 'ValidationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
  }
};

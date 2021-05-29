const mongoose = require('mongoose');
const validator = require('validator');
const argon2 = require('argon2');
const crypto = require('crypto');

const addressSchema = new mongoose.Schema({
  addressTitle: {
    type: String,
    trim: true,
    require: [true, 'Please enter your address title'],
    maxlength: [10, 'address title must have less or equal than 10 characters'],
    minlength: [1, 'address title must have more or equal than 1 characters'],
  },
  receiver: {
    type: String,
    trim: true,
    require: [true, 'Please enter the receiver name'],
    maxlength: [10, 'receiver name must have less or equal than 10 characters'],
    minlength: [2, 'receiver name must have more or equal than 2 characters'],
  },
  addressDetail: {
    addressLine1: {
      type: String,
      trim: true,
      require: [true, 'Please enter your detail address'],
      maxlength: [
        50,
        'detail address must have less or equal than 50 characters',
      ],
      minlength: [5, 'detail address have more or equal than 1 characters'],
    },
    addressLine2: {
      type: String,
      trim: true,
      require: [true, 'Please enter your detail address'],
      maxlength: [
        50,
        'detail address must have less or equal than 50 characters',
      ],
      minlength: [5, 'detail address have more or equal than 5 characters'],
    },
    district: {
      type: String,
      trim: true,
      maxlength: [
        50,
        'detail address must have less or equal than 50 characters',
      ],
      minlength: [1, 'detail address have more or equal than 1 characters'],
    },
    city: {
      type: String,
      trim: true,
      require: [true, 'Please enter city name'],
      maxlength: [
        50,
        'detail address must have less or equal than 50 characters',
      ],
      minlength: [1, 'detail address have more or equal than 1 characters'],
    },
    Provice: {
      type: String,
      trim: true,
      maxlength: [
        50,
        'detail address must have less or equal than 50 characters',
      ],
      minlength: [1, 'detail address have more or equal than 1 characters'],
    },
  },
  zipcode: {
    type: String,
    trim: true,
    require: [true, 'Please enter the zipcode'],
    maxlength: [20, 'zipcode must have less or equal than 20 characters'],
    minlength: [5, 'zipcode must have more or equal than 5 characters'],
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{4}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, 'user phone number required'],
    unique: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: [true, 'Please enter your username'],
      maxlength: [20, 'username must have less or equal than 20 characters'],
      minlength: [5, 'username must have more or equal than 5 characters'],
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      validate: {
        validator: function (v) {
          return /\d{3}-\d{4}-\d{4}/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
      required: [true, 'user phone number required'],
      unique: true,
    },
    avatar: String,
    role: {
      type: String,
      enum: ['user', 'vendor'],
      default: 'user',
    },
    favorite_foods_list: [mongoose.Schema.Types.ObjectId],
    favorite_vendors_list: [mongoose.Schema.Types.ObjectId],
    address: [addressSchema],
    orders: [mongoose.Schema.Types.ObjectId],
    password: {
      type: String,
      trim: true,
      required: [true, 'Please provide a password'],
      minlength: [8, 'password must have more or equal than 8 characters'],
      maxlength: [36, 'password must have less or equal than 20 characters'],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, 'Please confirm your password'],
      validate: {
        // This only works on CREATE and SAVE!!!
        validator: function (el) {
          return el === this.password;
        },
        message: 'Passwords are not the same!',
      },
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { collection: 'users' }
);
userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });
userSchema.set('timestamps', true);

//hash password
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  // If the pw has been modified, then encrypt it again
  if (!this.isModified('password')) return next();

  // Hash the password
  try {
    this.password = await argon2.hash(this.password);
  } catch (err) {
    next(err);
  }

  // Delete passwordConfirm field
  this.passwordConfirm = undefined;
  next();
});

//filter the inactive user
userSchema.pre(/^find/, function (next) {
  // this points to the current query
  this.find({ active: { $ne: false } });
  next();
});

//reset password
userSchema.pre('save', function (next) {
  //if the password isn't changed or it is a new document, do nothing.
  if (!this.isModified('password') || this.isNew) return next();
  // Only run this function if password was actually modified
  this.passwordChangedAt = Date.now() - 1000;
  next();
});

//check the password when user login
userSchema.methods.correctPassword = async function (
  hashedPassword,
  userPassword
) {
  try {
    //compare the two passwords, return true if they the same, otherwise return false
    return await argon2.verify(hashedPassword, userPassword);
  } catch (error) {
    next(error);
  }
};
//check if the password changed after token was issued
userSchema.methods.checkPasswordUpdate = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    ); // convert to UTC seconds
    return JWTTimestamp < changedTimestamp;
  }
  // False means NOT changed
  return false;
};
//create a reset password token for user forget password
userSchema.methods.createPasswordResetToken = function () {
  //create a random string as a plain token
  const resetToken = crypto.randomBytes(32).toString('hex');
  //hash the token
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;

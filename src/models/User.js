const mongoose = require('mongoose');

const Schema = { mongoose };

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
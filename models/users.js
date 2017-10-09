const mongoose = require('mongoose');

const { Schema } = mongoose; // const Schema = mongoose.Schema;

const usersSchema = new Schema({
  googleID: String,
});

mongoose.model('users', usersSchema);

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/users');
require('./services/passport'); // Only require since nothing is being exported.

mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth-routes')(app); // Pass app to exported function when required.

const PORT = process.env.PORT || 8000;
app.listen(PORT);

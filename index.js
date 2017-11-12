const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/users');
require('./services/passport'); // Only require since nothing is being exported.

mongoose.connect(keys.mongoURI, { useMongoClient: true });
mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());

require('./routes/auth-routes')(app); // Pass app to exported function when required.
require('./routes/billing-routes')(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT);

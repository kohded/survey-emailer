const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/users');
require('./services/passport'); // Only require since nothing is being exported.

mongoose.connect(keys.mongoURI);

const app = express();
require('./routes/auth-routes')(app); // Pass app to exported function when required.

const PORT = process.env.PORT || 8000;
app.listen(PORT);

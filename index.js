const express = require('express');
require('./services/passport'); // Only require since nothing is being exported.

const app = express();
require('./routes/auth-routes')(app); // Pass app to exported function when required.

const PORT = process.env.PORT || 8000;
app.listen(PORT);

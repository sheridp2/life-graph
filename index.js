const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys')
require('./models/User')
require('./models/Entry')

mongoose.connect(keys.mongoURI)

const app = express();
app.use(bodyParser.json())

require('./routes/entryRoutes')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT , () => console.log(`Listening on ${PORT}`));

const express = require('express');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

require('./routes')(app);

app.listen(3000);

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
require('./mongoose');
const app = express();

app.use(bodyParser.json());
app.use(logger('dev'));

app.get('/', (req,res) => {
    res.send();
})

app.listen(3000);
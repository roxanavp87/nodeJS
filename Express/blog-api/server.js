const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
module.exports = app;

// in memory posts
let posts = require('./data/posts.json');
// module.exports = posts;
// console.log(posts);

// -------------------- middleware --------------------------------
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: true
}));

// support parsing of application/json type post data
app.use(bodyParser.json());

// to get logs, for example,
// POST /posts 201 15.226 ms - 8
// PUT /posts/0 200 1.574 ms - 315
// GET /posts 200 0.879 ms - 820
// DELETE /posts/0 200 0.424 ms - -
app.use(logger('dev'));

// ----------------- end of middleware -----------------------------

require('./routes/index');

app.listen(3000);

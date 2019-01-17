const express = require('express');
const bodyParser = require('body-parser');

const app = express();
module.exports = app;

// in memory posts
let posts = require('./data/posts.json');
// module.exports = posts;
// console.log(posts);

// middleware
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
    extended: true
}));

// support parsing of application/json type post data
app.use(bodyParser.json());



require('./routes/index');



app.listen(3000);

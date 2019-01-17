const express = require('express');
const bodyParser = require('body-parser');

const app = express();
module.exports = app;

// in memory posts
let posts = require('./data/posts.json');
// module.exports = posts;
// console.log(posts);

// middleware
app.use(bodyParser.json());



require('./routes/index');



app.listen(3000);

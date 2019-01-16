const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// in memory posts
let posts = require('./data/posts.json');
// console.log(posts);

// middleware
app.use(bodyParser.json());

app.listen(3000);
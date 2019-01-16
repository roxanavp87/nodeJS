const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// to test use:  curl localhost:3000/user/?authkey='1234' -i 'Content-Type: application/json'
app.use(bodyParser.json());

// server logs, example: GET /user/?authkey=1234 200 5.424 ms - 14 
app.use(morgan('dev'));

// simple middleware
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url}`);
    next();
});

// middleware to check authkey
// to test in terminal use: curl localhost:3000/?authkey='1234' -i
app.use((req, res, next) => {
    if (req.query.authkey) {
        console.log('user has authorization');
        next();
    } else {
        res.status(401).send('Not authorized');

    }
});

app.get('/', (req, res) => {
    res.send({msg: 'home'});
});

app.get('/user', (req, res, next) => {
    // inline middleware
    console.log('inline middleware');
    next();
},  (req, res) => {
    // res.send('user \n');
    res.send({msg: 'user'});
});

app.listen(3000);


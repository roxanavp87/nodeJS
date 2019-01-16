const express = require('express');
const app = express();

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
    res.send('home \n');
});

app.get('/user', (req, res, next) => {
    // inline middleware
    console.log('inline middleware');
    next();
},  (req, res) => {
    res.send('user \n');
});

app.listen(3000);


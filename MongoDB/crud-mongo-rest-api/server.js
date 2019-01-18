
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const mongodb= require('mongodb');
const assert = require('assert');

const app = express();
module.exports = app;

app.use(bodyParser.json());
app.use(logger('dev'));

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'edx-course-db';

// Use connect method to connect to the server
mongodb.MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    app.get('/accounts', (req, res, next) => {
        db.collection('accounts')
        .find({}, {sort: {_id: -1}})
        .toArray((error, accounts) => {
            if (error) return next(error)
            res.send(accounts)
        })
    })

    app.post('/accounts', (req, res, next) => {
        let newAccount = req.body
        db.collection('accounts').insert(newAccount, (error, results) => {
        if (error) return next(error)
        res.send(results)
        })
    })

    app.put('/accounts/:id', (req, res, next) => {
        db.collection('accounts')
        .update({_id: mongodb.ObjectID(req.params.id)}, 
            {$set: req.body}, 
            (error, results) => {
            if (error) return next(error)
            res.send(results)
            }
        )
    })

    app.delete('/accounts/:id', (req, res, next) => {
        db.collection('accounts')
        .remove({_id: mongodb.ObjectID( req.params.id)}, (error, results) => {
        if (error) return next(error)
        res.send(results)
        })
    })

    // client.close();
    app.use(errorhandler());
    app.listen(3000);
});


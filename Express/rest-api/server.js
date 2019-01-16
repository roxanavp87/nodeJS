const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const errorHandler = require('errorhandler');

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorHandler());

let store = {};
store.accounts = [];

app.get('/accounts', (req, res) => {
    res.status(200).send(store.accounts);
});

app.post('/accounts', (req, res) => {
    let newAccount = req.body;
    let id = store.accounts.lenght;
    store.accounts.push(newAccount);
    res.status(201).send({id: id});
});

app.put('/accounts/:id', (req, res) => {
    store.accounts[req.params.id] = req.body;
    res.status(200).send(store.accounts[req.params.id]);
});

app.delete('/accounts/:id', (req, res) => {
    store.accounts.splice(req.params.id, 1);
    res.status(204).send();
})

app.listen(3000);
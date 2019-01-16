const express = require('express') 
let app = express()

let store = {accounts: require('./data/accounts.json')}
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.all('*', (req, res) => {
  res.status(404).send('Not found')
})

app.get('/accounts', (req, res) => {
  res.status(200).send(store.accounts)
})

app.put('/accounts/:id', (req, res) => {
  store.accounts[req.params.id] = req.body
  res.status(200).send(store.accounts[req.params.id])
})

app.listen(3000)
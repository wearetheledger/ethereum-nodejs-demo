const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const blockchainService =require('./services/blockchain.service.js');
const Web3 = require('web3');
const accounts = require('./routes/accounts');
const ballot = require('./routes/ballot');
const transactions = require('./routes/transactions');

const port = process.env.port || 3100;

app.use(bodyParser.json());


app.use('/api/accounts',accounts);
app.use('/api/ballot',ballot);
app.use('/api/transactions',transactions);

app.get('/', (req, res) =>{
  res.send('Service is running');
})
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => {
  console.log('started on port: ' + port );
  blockchainService.init();
});

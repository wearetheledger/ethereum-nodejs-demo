const express = require('express');
const router = express.Router();
const blockchainService = require('../services/blockchain.service.js');
const bodyParser = require('body-parser');


router.get('/', function(req, res) {
   blockchainService.winningProposal().then(function(result){
    // res.setHeader('Content-Type', 'application/json');
    res.send({"foo": "bar"});
    //res.send("Winning proposal is: "+ result);
  });
});

router.post('/vote/:id', function(req, res) {
   blockchainService.vote(req.params.id).then(function(result){
    res.send("TransactionId: " +  result);
  });
});

router.get('/vote/:id', function(req, res) {
 blockchainService.vote(req.params.id).then(function(result){
  res.send("TransactionId: " +  result);
});
});

module.exports = router;
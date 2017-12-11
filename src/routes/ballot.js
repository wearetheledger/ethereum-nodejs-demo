const express = require('express');
const router = express.Router();
const blockchainService = require('../services/blockchain.service.js');
const bodyParser = require('body-parser');


router.get('/', function(req, res) {
    // do something
   blockchainService.winningProposal().then(function(result){
    res.send("Winning proposal is: "+ result);
  });
});

router.post('/vote/:id', function(req, res) {
    // do something
   blockchainService.vote(req.params.id).then(function(result){
    res.send("TransactionId: " +  result);
  });
});

router.get('/vote/:id', function(req, res) {
  // do something
 blockchainService.vote(req.params.id).then(function(result){
  res.send("TransactionId: " +  result);
});
});

module.exports = router;
const express = require('express');
const router = express.Router();
const blockchainService = require('../services/blockchain.service.js');
const bodyParser = require('body-parser');


router.get('/', function(req, res) {
   blockchainService.winningProposal().then(function(result){
     res.json(result);
  });
});

router.post('/vote/:id', function(req, res) {
   blockchainService.vote(req.params.id).then(function(result){
    res.json(result);
  });
});

/*router.get('/vote/:id', function(req, res) {
 blockchainService.vote(req.params.id).then(function(result){
  res.json(result);
});
});*/

module.exports = router;
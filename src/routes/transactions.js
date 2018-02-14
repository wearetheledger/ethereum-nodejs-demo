const express = require('express');
const router = express.Router();
const blockchainService = require('../services/blockchain.service.js');
const bodyParser = require('body-parser');


router.get('/', function(req, res) {
   res.json(JSON.stringify("Transaction api"));
});

router.get('/pending', function(req, res) {
    res.json(blockchainService.getPendingTransactions());
});


router.get('/confirmed', function(req, res) {
    res.json(blockchainService.getConfirmedTransactions());
});

router.get('/latestblock', function(req, res) {
    res.json(blockchainService.getLatestBlock());
});


module.exports = router;
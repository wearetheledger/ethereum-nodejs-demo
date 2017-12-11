const express = require('express');
const router = express.Router();
const blockchainService = require('../services/blockchain.service.js');
const bodyParser = require('body-parser');


router.get('/', function(req, res) {
    res.send(blockchainService.getAccounts());
});

module.exports = router;
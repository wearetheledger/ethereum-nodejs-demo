const Web3 = require('web3');
var web3 = new Web3();
const provider = new web3.providers.HttpProvider('http://localhost:8545', 0, process.env.ETHERBASE, process.env.PASSWORD);
var account;
var accounts;

module.exports = {
  init: function () {
    web3.setProvider(provider);

    web3.eth.getAccounts(function (err, accs) {
      if (err != null) {
        console.log('There was an error fetching your accounts.');
      } else if (accs.length == 0) {
        console.log('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly. Or make some accounts on your node.');
      } else {
        accounts = accs;
        account = accs[0];
        console.log('Main account for sending transactions is : ' + account);
      }
    });
  },

  getAccounts: function () {
    return web3.eth.accounts;
  }

}
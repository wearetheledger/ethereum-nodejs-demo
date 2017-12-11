# ethereum-nodejs-demo
Demo with ethereumn nodejs and api's to call the contract function

# Prerequisite
You'll need a local ethereum node running for this to work.

# Deploy & interact
Change the account and password in the .env file.

1. Start your local ethereum node. Be sure --RPC is enabled at port 8545
2. Run the ``truffle migrate`` to deploy your contracts
3. Start the server by ``npm start``
4. Browse to ``http://localhost:3100/api/ballot`` for the winning result
5. Browse to ``http://localhost:3100/api/accounts`` for all the accounts on the network
6. Browse to ``http://localhost:3100/api/ballot/vote/{number}`` to vote to a ballot.


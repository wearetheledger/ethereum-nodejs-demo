# ethereum-nodejs-demo
Demo with ethereumn nodejs and api's to call the contract function

# Prerequisite
You'll need a local ethereum node running for this to work.

# Start  application with react frontend and testprc

1. Start testrpc by invoking ```testrpc```
2. In a seperate console, go to /src/truffle ```cd src/truffle```
3. Deploy your contracts ```truffle migrate --reset```
4. Go back to your main folder `` cd ../..`` 
5. Use ``yarn dev`` to start the react frontend app to interact with the nodejs server. Don't start the nodejs and react seperately. 
6. Browse to localhost:3000 if it isn't started automatically in your browser

# Deploy & interact with local ethereum node through nodejs without the frontend
Change the account and password in the .env file to your etherbase account

1. Start your local ethereum node. Be sure --RPC is enabled at port 8545
2. Run the ``truffle migrate --reset`` to deploy your contracts
3. Start the server by ``npm start``
4. Browse to ``http://localhost:3100/api/ballot`` for the winning result
5. Browse to ``http://localhost:3100/api/accounts`` for all the accounts on the network
6. Browse to ``http://localhost:3100/api/ballot/vote/{number}`` to vote to a ballot.
Note: Voting on testrpc will be instant, on a real ethereum network, it will take up to a few seconds.

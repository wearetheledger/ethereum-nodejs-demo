# ethereum-nodejs-demo
Demo with ethereumn nodejs, api's to call the contract function and react frontend.
We can vote for Ethereum or Hyperledger fabric on the frontend.
This demo is just to illustrate how to interact with the ethereum blockchain network (locally or testrpc), a server and a frontend.

# Prerequisite
You'll need a local ethereum node running for this to work.

# Start application with react frontend and testprc

1. Install all npm packages by invoking ```npm install``` 
2. Start testrpc by invoking ```testrpc```
3. In a new console, go to /src/truffle ```cd src/truffle```
4. Deploy your contracts ```truffle migrate --reset```
5. Go back to your main folder `` cd ../..`` 
6. Use ``yarn dev`` to start the react frontend app to interact with the nodejs server. Don't start the nodejs and react seperately
7. Browse to localhost:3000 if it isn't started automatically in your browser

# Start application with react frontend and (local) ethereum node
Change the account and password in the .env file to your etherbase account

1. Start your local ethereum node. Be sure --RPC is enabled at port 8545
2. Unlock your etherbase account and start miner
3. Install all npm packages by invoking ```npm install``` 
4. Run the ``truffle migrate --reset`` to deploy your contracts
5. Go back to your main folder `` cd ../..`` 
6. Use ``yarn dev`` to start the react frontend app to interact with the nodejs server. Don't start the nodejs and react seperately
Note: Voting on testrpc will be instant, on a real ethereum network, it will take up to a few seconds

# Deploy & interact with (local) ethereum node through nodejs without the frontend
Change the account and password in the .env file to your etherbase account

1. Start your local ethereum node. Be sure --RPC is enabled at port 8545
2. Unlock your etherbase account and start miner
3. Install all npm packages by invoking ```npm install``` 
4. Run the ``truffle migrate --reset`` to deploy your contracts
5. Start the server by ``npm start``
6. Browse to ``http://localhost:3100/api/ballot`` for the winning result
7. Browse to ``http://localhost:3100/api/accounts`` for all the accounts on the network
8. Post to ``http://localhost:3100/api/ballot/vote/{number}`` to vote for a ballot (0 or 1)
Note: Voting on testrpc will be instant, on a real ethereum network, it will take up to a few seconds

# ethereum-nodejs-demo - PART 1
Part 1 - Where we connect our react frontend to the running nodejs backend which is connected to the ethereum (local) node or testrpc.
No smart contracts are involved in this part.

# Prerequisite
You'll need a local ethereum node running or testrpc for this to work.

# Start application with react frontend and testprc

1. Install all npm packages by invoking ```npm install``` 
2. Start testrpc by invoking ```testrpc``` 
3. Use ``yarn dev`` in a new console to start the react frontend app to interact with the nodejs server. Don't start the nodejs and react seperately

# Start application with react frontend and (local) ethereum node
Change the account and password in the .env file to your etherbase account

1. Start your local ethereum node. Be sure --RPC is enabled at port 8545
2. Install all npm packages by invoking ```npm install``` 
3. Use ``yarn dev`` to start the react frontend app to interact with the nodejs server. Don't start the nodejs and react seperately
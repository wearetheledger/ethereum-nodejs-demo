# ethereum-nodejs-demo - PART 2
Part 2 - Where we interact through our frontend and server with our contracts deployed on testrpc.

# Prerequisite
You'll need testrpc for this to work.

# Start application with react frontend and testprc

1. Install all npm packages by invoking ```npm install``` 
2. Start testrpc by invoking ```testrpc``` 
3. In a new console, go to /src/truffle ```cd src/truffle```
4. Deploy your contracts ```truffle migrate --reset```
5. Go back to your main folder `` cd ../..``
4. Use ``yarn dev`` in a new console to start the react frontend app to interact with the nodejs server. Don't start the nodejs and react seperately.
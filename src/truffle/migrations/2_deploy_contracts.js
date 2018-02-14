var SimpleBallot = artifacts.require("./SimpleBallot.sol");

module.exports = function(deployer) {
  // let people vote on ballot 0 or 1
  deployer.deploy(SimpleBallot, 2);
};

var SimpleBallot = artifacts.require("./SimpleBallot.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleBallot, 2);
};

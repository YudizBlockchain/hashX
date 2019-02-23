var MyContract1 = artifacts.require("./Ownable.sol");

 var MyContract = artifacts.require("./storehash.sol");

module.exports = function(deployer) {
   deployer.deploy(MyContract1);
   deployer.deploy(MyContract);
};

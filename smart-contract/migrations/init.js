const vendingMachine = artifacts.require("vending-machine")

module.exports = function (deployer) {

    deployer.deploy(vendingMachine)

}
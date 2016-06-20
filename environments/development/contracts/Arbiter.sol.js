// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"totalAmount","type":"uint256"},{"name":"retentionAmount","type":"uint256"},{"name":"receiver","type":"address"}],"name":"sendPolicy","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a0332166000908152602081905260409020620f42409055610149806100306000396000f3606060405260e060020a60003504635a3a1be281146100315780637bd703e814610094578063f8b2cb4f146100bf575b005b60243560043581900360029081553373ffffffffffffffffffffffffffffffffffffffff90811660009081526020818152604080832080549690960190955592546044359092168152839020805490910190558151600181529151918290030190f35b6100f2600435600073__ConvertLib____________________________6396e4ee3d610104846100c6565b6100f26004355b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100ed905056",
    unlinked_binary: "6060604052600160a060020a0332166000908152602081905260409020620f42409055610149806100306000396000f3606060405260e060020a60003504635a3a1be281146100315780637bd703e814610094578063f8b2cb4f146100bf575b005b60243560043581900360029081553373ffffffffffffffffffffffffffffffffffffffff90811660009081526020818152604080832080549690960190955592546044359092168152839020805490910190558151600181529151918290030190f35b6100f2600435600073__ConvertLib____________________________6396e4ee3d610104846100c6565b6100f26004355b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100ed905056",
    address: "",
    generated_with: "2.0.9",
    contract_name: "Arbiter"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Arbiter error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Arbiter error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Arbiter error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Arbiter error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Arbiter = Contract;
  }

})();

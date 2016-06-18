// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[],"name":"callEvent","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"},{"name":"retentionAmount","type":"uint256"}],"name":"sendPolicy","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policy","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"myEvent","type":"event"}],
    binary: "6060604052600160a060020a0332166000908152602081905260409020620f42409055610168806100306000396000f3606060405260e060020a60003504637197668b811461003c5780637bd703e81461008357806386c1584c146100ae578063f8b2cb4f146100c1575b005b61003a5b60015460025460408051928352602083019190915280517f191edd7abaa19b2dca246e43cfb046f59bf6eb73089214a5006e54951549a2579281900390910190a1565b6100f4600435600073__ConvertLib____________________________6396e4ee3d61011a846100c8565b610106600435602435600061015f610040565b6100f46004355b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100ef9050565b5060019291505056",
    unlinked_binary: "6060604052600160a060020a0332166000908152602081905260409020620f42409055610168806100306000396000f3606060405260e060020a60003504637197668b811461003c5780637bd703e81461008357806386c1584c146100ae578063f8b2cb4f146100c1575b005b61003a5b60015460025460408051928352602083019190915280517f191edd7abaa19b2dca246e43cfb046f59bf6eb73089214a5006e54951549a2579281900390910190a1565b6100f4600435600073__ConvertLib____________________________6396e4ee3d61011a846100c8565b610106600435602435600061015f610040565b6100f46004355b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100ef9050565b5060019291505056",
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

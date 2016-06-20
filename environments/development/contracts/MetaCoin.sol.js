// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"receiver1","type":"address"},{"name":"receiver2","type":"address"},{"name":"receiver3","type":"address"},{"name":"faceamount","type":"uint256"},{"name":"retentionAmount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "6060604052600160a060020a0332166000908152602081905260409020620f42409055610241806100306000396000f3606060405260e060020a60003504637bd703e88114610031578063bb51c7ef1461005c578063f8b2cb4f146100b2575b005b6100e560043560007314b63844e8aa2eeb5052668cea7d42adde7be9626396e4ee3d61010b846100b9565b6100f76004356024356044356064356084358082036002819055600090819011801561008d57506002546207a12090105b156101bd57600280549081046005908155600a60038302046006559004600755610223565b6100e56004355b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100e09050565b503373ffffffffffffffffffffffffffffffffffffffff908116600090815260208190526040808220849055600554888416835281832080549091019055600654878416835281832080549091019055600754928616825290208054909101905560015b95945050505050565b6002546207a12090108015906101d95750600254620f42409011155b156101fe57600280549081046005908155600a60038302046006559004600755610223565b600254620f424090111561022357600280546005918102829004808355600655046007555b600654600554600754908401909101018314610150575060006101b456",
    unlinked_binary: "6060604052600160a060020a0332166000908152602081905260409020620f42409055610241806100306000396000f3606060405260e060020a60003504637bd703e88114610031578063bb51c7ef1461005c578063f8b2cb4f146100b2575b005b6100e5600435600073__ConvertLib____________________________6396e4ee3d61010b846100b9565b6100f76004356024356044356064356084358082036002819055600090819011801561008d57506002546207a12090105b156101bd57600280549081046005908155600a60038302046006559004600755610223565b6100e56004355b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f4156100025750506040515191506100e09050565b503373ffffffffffffffffffffffffffffffffffffffff908116600090815260208190526040808220849055600554888416835281832080549091019055600654878416835281832080549091019055600754928616825290208054909101905560015b95945050505050565b6002546207a12090108015906101d95750600254620f42409011155b156101fe57600280549081046005908155600a60038302046006559004600755610223565b600254620f424090111561022357600280546005918102829004808355600655046007555b600654600554600754908401909101018314610150575060006101b456",
    address: "0x9c6150a3d2589594e652d302a952ce10caa4bffa",
    generated_with: "2.0.9",
    contract_name: "MetaCoin"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("MetaCoin error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.MetaCoin = Contract;
  }

})();

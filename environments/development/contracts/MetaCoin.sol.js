// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"policy","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"exchangeAmt","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"callMyEvent","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"receiver1","type":"address"},{"name":"receiver2","type":"address"},{"name":"receiver3","type":"address"},{"name":"policyNumber","type":"string"},{"name":"faceamount","type":"uint256"},{"name":"retentionAmount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"policy","type":"string"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"amountreciever1","type":"uint256"},{"indexed":false,"name":"amountreceiver2","type":"uint256"},{"indexed":false,"name":"amountreceiver3","type":"uint256"}],"name":"myEvent","type":"event"}],
    binary: "6060604052600160a060020a0332166000908152602081905260409020620f4240905561058a806100306000396000f3606060405236156100565760e060020a60003504630505c8c98114610058578063167f2436146100b557806324fec94b146100cd57806344b23477146101705780637bd703e814610238578063f8b2cb4f14610263575b005b60408051600180546020600282841615610100026000190190921691909104601f810182900482028401820190945283835261029693908301828280156103555780601f1061032a57610100808354040283529160200191610355565b61030460043560086020526000908152604090205481565b6100565b600280546003546004546005546040805160208101869052908101849052606081018390526080810182905260a08082526001805460001961010082841615020116979097049082018190527fe7da3758359fb0f98120eff046e4dc79df78958541c8f16e9585fa00f4b0ef8796959493929190819060c0820190889080156103885780601f1061035d57610100808354040283529160200191610388565b604080516020606435600481810135601f81018490048402850184019095528484526103169481359460248035956044359560849492019190819084018382808284375094965050933593505060a43591505060008183036002600050819055508360016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103aa57805160ff19168380011785555b506103da9291505b8082111561041b5760008155600101610224565b610304600435600073c7b316fa1c1d1b3cf2c3e1f62777e2987b7b8f4f6396e4ee3d6105458461026a565b6103046004355b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161033857829003601f168201915b505050505081565b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b5050965050505050505060405180910390a1565b5060015b9695505050505050565b8280016001018555821561021c579182015b8281111561021c5782518260005055916020019190600101906103bc565b50506002546000901180156103f457506002546207a12090105b1561041f57600280549081046003908155600a90820204600455600590819004905561048a565b5090565b6002546207a120901080159061043b5750600254620f42409011155b1561046257600280549081046003908155600a90820204600455600590819004905561048a565b600254620f424090111561048a57600280546005918102829004600381905560045581900490555b6005546004546003548401010183146104a5575060006103a0565b3373ffffffffffffffffffffffffffffffffffffffff9081166000818152600860209081526040808320879055600380548d871680865283862091909155600480548e89168088528588209190915560058054998f168089528689209a909a55978752948690528386208a90559154908552828520805490910190555491835280832080549092019091559154928152208054909101905561039c6100d1565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f415610002575050604051519150610291905056",
    unlinked_binary: "6060604052600160a060020a0332166000908152602081905260409020620f4240905561058a806100306000396000f3606060405236156100565760e060020a60003504630505c8c98114610058578063167f2436146100b557806324fec94b146100cd57806344b23477146101705780637bd703e814610238578063f8b2cb4f14610263575b005b60408051600180546020600282841615610100026000190190921691909104601f810182900482028401820190945283835261029693908301828280156103555780601f1061032a57610100808354040283529160200191610355565b61030460043560086020526000908152604090205481565b6100565b600280546003546004546005546040805160208101869052908101849052606081018390526080810182905260a08082526001805460001961010082841615020116979097049082018190527fe7da3758359fb0f98120eff046e4dc79df78958541c8f16e9585fa00f4b0ef8796959493929190819060c0820190889080156103885780601f1061035d57610100808354040283529160200191610388565b604080516020606435600481810135601f81018490048402850184019095528484526103169481359460248035956044359560849492019190819084018382808284375094965050933593505060a43591505060008183036002600050819055508360016000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106103aa57805160ff19168380011785555b506103da9291505b8082111561041b5760008155600101610224565b610304600435600073__ConvertLib____________________________6396e4ee3d6105458461026a565b6103046004355b73ffffffffffffffffffffffffffffffffffffffff81166000908152602081905260409020545b919050565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156102f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b604080519115158252519081900360200190f35b820191906000526020600020905b81548152906001019060200180831161033857829003601f168201915b505050505081565b820191906000526020600020905b81548152906001019060200180831161036b57829003601f168201915b5050965050505050505060405180910390a1565b5060015b9695505050505050565b8280016001018555821561021c579182015b8281111561021c5782518260005055916020019190600101906103bc565b50506002546000901180156103f457506002546207a12090105b1561041f57600280549081046003908155600a90820204600455600590819004905561048a565b5090565b6002546207a120901080159061043b5750600254620f42409011155b1561046257600280549081046003908155600a90820204600455600590819004905561048a565b600254620f424090111561048a57600280546005918102829004600381905560045581900490555b6005546004546003548401010183146104a5575060006103a0565b3373ffffffffffffffffffffffffffffffffffffffff9081166000818152600860209081526040808320879055600380548d871680865283862091909155600480548e89168088528588209190915560058054998f168089528689209a909a55978752948690528386208a90559154908552828520805490910190555491835280832080549092019091559154928152208054909101905561039c6100d1565b60026040518360e060020a02815260040180838152602001828152602001925050506020604051808303818660325a03f415610002575050604051519150610291905056",
    address: "0x01d6d759278c139d21920d28e973372ed0e0ab41",
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

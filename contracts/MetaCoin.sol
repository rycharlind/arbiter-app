
import "ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin {
   
   mapping (address => uint) balances;
   string public policy;
   uint amount;
   uint amountreceiver1;
   uint amountreceiver2;
   uint amountreceiver3;
   uint faceamount;
   uint retentionAmount;
   mapping (address => uint) public exchangeAmt;

   event myEvent(string policy, uint amount, uint amountreciever1, uint amountreceiver2, uint amountreceiver3);
   
   function MetaCoin() {
       balances[tx.origin] = 1000000;
   }

   function callMyEvent() {
      myEvent(policy, amount, amountreceiver1, amountreceiver2, amountreceiver3);
   }

   function sendCoin(address receiver1, address receiver2, address receiver3, string policyNumber, uint faceamount, uint retentionAmount) returns(bool sufficient) {

      amount = faceamount-retentionAmount;
	  policy = policyNumber; 	
      
      if (amount > 0 && amount < 500000 )
      {
           amountreceiver1 = uint (amount/2);
           amountreceiver2 = uint ((3*amount)/10);
           amountreceiver3 = uint (amount/5);
      }

      else if (amount >= 500000 && amount <= 1000000 )
      {
           amountreceiver1 = uint(amount/2);
           amountreceiver2 = ((3*amount)/10);
           amountreceiver3 = uint(amount/5);
      }

      else if (amount > 1000000 )
      {
           amountreceiver1 = uint((2* amount)/5);
           amountreceiver2 = uint((2* amount)/5);
           amountreceiver3 = uint(amount/5);
      }

      if (retentionAmount+amountreceiver1+amountreceiver2+amountreceiver3 != faceamount) return false;
	  exchangeAmt[msg.sender] = retentionAmount;
      exchangeAmt[receiver1] = amountreceiver1;
      exchangeAmt[receiver2] = amountreceiver2;
      exchangeAmt[receiver3] = amountreceiver3;

      balances[msg.sender] = retentionAmount;
      balances[receiver1] += amountreceiver1;
      balances[receiver2] += amountreceiver2;
      balances[receiver3] += amountreceiver3;

	  msg.sender.send(retentionAmount);  
	  receiver1.send(amountreceiver1);  
	  receiver2.send(amountreceiver2); 
	  receiver3.send(amountreceiver3);

      callMyEvent();

      return true;

   }

  function getBalanceInEth(address addr) returns(uint){
    return ConvertLib.convert(getBalance(addr),2);
  }

  function getBalance(address addr) returns(uint) {
     return balances[addr];
  }

}

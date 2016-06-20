
import "ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract Arbiter {
   
   mapping (address => uint) balances;
   uint policy;
   uint amount;
   uint totalAmount;
   uint retentionAmount;
   
   function Arbiter() {
       balances[tx.origin] = 1000000;
   }

   function sendPolicy(uint totalAmount, uint retentionAmount, address receiver) returns(bool sufficient) {

      amount = totalAmount-retentionAmount;

      balances[msg.sender] += retentionAmount;
      balances[receiver] += amount;

      return true;

   }

  function getBalanceInEth(address addr) returns(uint){
      return ConvertLib.convert(getBalance(addr),2);
   }

   function getBalance(address addr) returns(uint) {
       return balances[addr];
   }

}

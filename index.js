let Web3 = require('web3');
let Tx = require('ethereumjs-tx');
let web3 = new Web3('https://mainnet.infura.io/v3/06c6b7b850dd43f9a5f69d563cb4c945');
/*
web3.eth.getBalance('0xad5c1e06baa53cb98126dd7de5c14b0f379ca38b',(err, wei)=>{
    console.log(web3.utils.fromWei(wei,'ether'));

});
*/
// console.log(balance);
var abi = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],
"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],
"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},
{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"type":"function"},
{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],
"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},
{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[]
,"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],
"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],
"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}]
,"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],
"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,
"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],
"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],
"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],
"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],
"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],
"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],
"name":"transfer","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},
{"name":"_amount","type":"uint256"},{"name":"_releaseTime","type":"uint256"}],"name":"mintTimelocked",
"outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,
"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance",
"outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,
"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,
"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},
{"indexed":false,"name":"value","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,
"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},
{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,
"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,
"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,
"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},
{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];




var contractAddress = '0xd26114cd6EE289AccF82350c8d8487fedB8A0C07';
let anotherAddress ='0xd26114cd6EE289AccF82350c8d8487fedB8A0C07';

var myContract = new web3.eth.Contract(abi, contractAddress);


myContract.methods.balanceOf(anotherAddress).call((err, result)=>{
    console.log(result);
    });


myContract.methods.name.call((err, result)=>{
console.log(result);
});


Buffer.from();

//Get Balance
web3.eth.getBalance(account, (err, ba1)=> {
    console.log('account 2 balance:',web3.utils.fromWei(bal,'ether'));
});

web3.eth.getTransactionCount(contractAddress , (err,txCount)=>{
const data = '';
//Build the transaction
const txObject = {
    nonce:  web3.utils.toHex(txCount) ,
    to: anotherAddress,
    value:      web3.utils.toHex(web3.utils.toWei('1','ether')),
    gasLimit:      web3.utils.toHex(1000000) ,// raise this
    gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei')),
    data:data

}
//Sign the transaction
const rx = new Tx(txObject);
tx.sign(privateKey);

//Broadcast the transaction
web3.eth.sendSignedTransaction(raw, (err, txHash)=>{
console.log('txHash', txHash);
// Use this txHash to find the contract on Etherscan
 });
 console.log(txObject);
const serializedTransaction = tx.toString('hrx');
const raw = '0x' + serializedTransaction.toString('hex');

});




const daaptokenContract = web3.eth.Contract(abi, contractAddress);
daaptokenContract.methods.call((err, result)=> {console.log(result)});
console.log(daaptokenContract);



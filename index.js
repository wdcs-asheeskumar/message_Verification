const crypto = require('crypto');
const ethUtil = require('ethereumjs-util');
function generateSignature(message, privateKey) {
    const messageBuffer = Buffer.from(message, 'utf8');
    const messageHash = ethUtil.keccak256(messageBuffer);
    console.log(messageHash);
    const privateKeyBuffer = Buffer.from(privateKey, 'hex');
    const signature = ethUtil.ecsign(messageHash, privateKeyBuffer);
    const vrsSignature = {
        v: ethUtil.bufferToHex(signature.v),
        r: ethUtil.bufferToHex(signature.r),
        s: ethUtil.bufferToHex(signature.s)
    };
    return vrsSignature;
}
const message = "Hello, world!";
const privateKey = 'c4b858ea45efe4e8e163906310de12d198477232d6311491133183714041bf17';
const signature = generateSignature(message, privateKey);
console.log("VRS signature:", signature);
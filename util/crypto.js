const CryptoJS = require('crypto-js');
const decrypt = (password) => {
  const bytes  = CryptoJS.AES.decrypt(password.toString(), 'sddecegfrcdethyrd23sqasj7j5');
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
}
const decrypt1 = (password) => {
  const bytes  = CryptoJS.AES.decrypt(password.toString(), 'vgfesfasdewjfesndat');
  const plaintext = bytes.toString(CryptoJS.enc.Utf8);
  return plaintext;
}
const encrypt = (password) => {
  return CryptoJS.AES.encrypt(password, 'vgfesfasdewjfesndat').toString();
}
module.exports = {
  decrypt,
  encrypt,
  decrypt1
}
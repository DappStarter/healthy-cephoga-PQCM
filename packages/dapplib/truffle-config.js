require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half climb force trip maple note mirror puppy half kite success gift'; 
let testAccounts = [
"0x5e3b6d1d5dbdeb7e3923d6490a014d129a0ae136a13a3009089497e7d50a51df",
"0x5f7f75ed6fe5bee72cdd8cce70b7bf73e9286f59909a4d264e203319f729f15c",
"0x8ea4d948f39d78230a733753cae9f876cfdda762760df6183631bb2955416352",
"0xbe9a5b33b3573a3f547e961bc4d59e55f57b458de7068e1e4440ab4a65fed245",
"0x0a70f6e4b200aaa2ff16d7a3adb639d04b01d822de687a59ab53b78aab899167",
"0xbe3b21afc5c5161d750838759218d2d0bc0fd0b015230c66b9424fb635cbd64e",
"0x49ca0c5b75dbfb6b782f5104f063ce576e34fd3a570c1c21b7234c5fbee0a61b",
"0x03cbed4a454146b587bec38d7f98bd77cf21635d5a4bc3a25908c5fbd68f0fa8",
"0xfccde3ea43138e9660777ddad72078947cb6658e1476894dea2107ee8a2e5208",
"0x3f37b306773ad09ba02dee165fd4927e221e8973ee4cc5d43d464ef977ef1d96"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


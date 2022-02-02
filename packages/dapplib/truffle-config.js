require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture glimpse frame tribe strong deny noise concert grace option surge genius'; 
let testAccounts = [
"0xb5498768ccf5ed746ddc0a82fc9728020a847bd9f7a31f928c72c2e01f3a916a",
"0x73cb8728f1c646b2db4373c8209b1e89f478aa87072ce7da448c861fced7558a",
"0xf27995bb9cb10f8f40e7123b15b650fd8c32b3aac3c15682369cd79094408036",
"0xdac3c94aa58d108f2bfd8c25a744b1e22b5c2856302dfdab1677a70fd353b3ef",
"0x36479b9aaea23101b5342ece4a5360921ee9a503362f7205bb2418dfdc88d1d9",
"0xa85db40cc84ef372287e9982c32e965c259d8ff062a2cd6c5c3c4bd302e30d19",
"0x5debbd6198bf795848a72ffa35de9e4807c887ab7f50d6989d4fbbda2a6a294c",
"0x24d50fe0a93b5b2528309a90a4ef4301db0b03a1c613da445ef6f777795445ab",
"0xdbf1393b057f25d7e5f49f7a41a7e90a464a0c6a798313578043d52d27f4a5c4",
"0x34a4c6ba304974461db78cda3e97db5c4885a7620f0cff0c0c7f2b6315278b10"
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


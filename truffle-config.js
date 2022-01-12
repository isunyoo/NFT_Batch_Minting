require("babel-register");
require("babel-polyfill");

const { mnemonic } = require('./secrets.json');  
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
    // Configure networks (Localhost, Kovan, etc.)
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            // network_id: "*", // Match any network id
            network_id: "4447",
            accounts: { mnemonic: mnemonic },
        },
    },

    // Configure your compilers
    compilers: {
        solc: {
            version: '0.8.9',
            optimizer: {
                enabled: true,
                runs: 200
            },
        },
    },
};
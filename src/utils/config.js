function environment(env) {
    if (env === "testnet") {

        return {
            networkId: "testnet",
            nodeUrl: "https://rpc.testnet.near.org",
            contractName: "courses.earthling.testnet",
            walletUrl: "https://wallet.testnet.near.org",
            helperUrl: "https://helper.testnet.near.org",
            explorerUrl: "https://explorer.testnet.near.org",
        };

    } else {
        throw new Error("Unconfigured environment '" + env + "'. Can be configured in src/config.js.");
    } 
}

export default environment;
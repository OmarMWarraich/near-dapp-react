
import { connect, Contract, keyStores, WalletConnection } from 'near-api-js';
import environment from './config';

const nearEnvironment = environment("testnet");

export async function connectToContract() {
    
        const near = await connect(
            Object.assign(
                {
                    deps: {
                        keyStores: new keyStores.BrowserLocalStorageKeyStore()
                    }
                },
                nearEnvironment
            )
        )

        console.log(near);

        window.walletConnection = new WalletConnection(near);
        
        console.log(window.walletConnection);

        window.accoutId = window.walletConnection.getAccountId();

        window.contract = new Contract(
            window.walletConnection.account(),
            nearEnvironment.contractName,
            {
                viewMethods: ["getCourse"],
                changeMethods: ["addCourse"]
            }
        )
        console.log(window.contract)
}
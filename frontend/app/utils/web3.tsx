import Web3, { Contract } from 'web3';


/*



const abi = JSON.parse(process.env.ABI as string) ;
const url: string = process.env.INFURA_API_URL as string;
const contractAdderss: string = process.env.CONTRACT_ADDRESS as string


const provider = new Web3.providers.HttpProvider(url)
const web3= new Web3(provider)

const vmContract = new web3.eth.Contract(abi, contractAdderss)

export default vmContract;
*/



export default class Web3Accesser {

    public static readonly abi = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "donutBalances", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getVendingMachineBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "purchase", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "restock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
    public static readonly contractAddress = '0xbC855749e720a405F5257380FF8CE184e66F1fB5';

    public web3: Web3;
    public myAccount: any;
    public contract: any;

    constructor(web3: any, myAccount: any, contract: any) {

        this.web3 = web3;
        this.myAccount = myAccount;
        this.contract = contract;

     }

    public static async build(window: any): Promise<Web3Accesser> {



        await window.ethereum.request({
            method: "eth_requestAccounts"
        })
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const myAccount = accounts[0];
        const contract = new web3.eth.Contract(Web3Accesser.abi, Web3Accesser.contractAddress)


        return new Web3Accesser(web3,myAccount,contract)
    }

    async loadData(window:any) {
        await window.ethereum.request({
            method: "eth_requestAccounts"
        })
        this.web3 = new Web3(window.ethereum);
        const accounts = await this.web3.eth.getAccounts();
        this.myAccount = accounts[0];




        this.contract = new this.web3.eth.Contract(this.abi, this.contractAddress)
     

    }
}
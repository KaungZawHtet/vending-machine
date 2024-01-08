import Web3 from 'web3';
require('dotenv').config()



const abi = JSON.parse(process.env.ABI as string) ;
const url: string = process.env.INFURA_API_URL as string;
const contractAdderss: string = process.env.CONTRACT_ADDRESS as string


const provider = new Web3.providers.HttpProvider(url)
const web3= new Web3(provider)

const vmContract = new web3.eth.Contract(abi, contractAdderss)

export default vmContract;
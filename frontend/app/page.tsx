"use client"; // This is a client component
import Image from 'next/image'
import styles from './page.module.css'
import PrimarySearchAppBar from './components/responsive-app-bar'


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Stack } from '@mui/material';
import ResponsiveAppBar from './components/responsive-app-bar';
import VendingMachineDisplay from './components/vending-machine-display';
import vmContract from './utils/web3';



export default function Home() {

  const [metaMask, setMetaMask] = React.useState(null);
  const [myDonut, setMyDonut] = React.useState<string>('');
  const [inputDonut, setInputDonut] = React.useState<string>('');


  //TODO: for amount input
  function changeInput(event) {
    setInputDonut(event.target.value)

  }

//TODO: consider to write for buy button


  async function loadMetaMaskData(metaMask: any) {
    const accounts = await metaMask.eth.getAccounts()
    const count: string = await vmContract.methods.donutBalances(accounts[0]).call()
    setMyDonut(count)
    setMetaMask(metaMask)
  }


  return (
    <>
      <ResponsiveAppBar loadMetaMask={loadMetaMaskData} />
      <br/><br/>
      <VendingMachineDisplay myDonut={myDonut}/>
      <br/>


    </>
  )
}

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
import Web3Accesser from './utils/web3';



export default function Home() {

  const [web3Accessor, setWeb3Accessor] = React.useState<Web3Accesser|null>(null);





  return (
    <>
      <ResponsiveAppBar setWeb3Accessor={setWeb3Accessor} />
      <br/><br/>
      <VendingMachineDisplay web3Accessor={web3Accessor != null ? web3Accessor : null}/>
      <br/>


    </>
  )
}

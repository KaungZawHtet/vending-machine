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



export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <br/><br/>
      <VendingMachineDisplay/>
      <br/>


    </>
  )
}

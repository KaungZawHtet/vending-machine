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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <br/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>

    </>
  )
}

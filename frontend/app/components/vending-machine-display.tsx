import { Box, Button, Grid, Paper, Stack, TextField, styled } from '@mui/material';
import * as React from 'react';
import vmContract from '../utils/web3';
import { count } from 'console';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



export default function VendingMachineDisplay({ web3Accessor }) {

    const [inventory, setInventory] = React.useState<string>('0');
    const [myDonut, setMyDonut] = React.useState<string>('0');

    const [donutInput, setDonutInput] = React.useState<number>(0);
    const [purchaseCount, setPurchaseCount] = React.useState<number>(0);

    //TODO: for amount input
    function changeInput(event) {
        setDonutInput(event.target.value)

    }

    async function onBuy(event) {

        try {

            await web3Accessor.contract.methods.purchase(donutInput).send({
                from: web3Accessor.myAccount,
                value: web3Accessor.web3.utils.toWei('2', 'ether') * donutInput
            })
            setPurchaseCount(purchaseCount + 1);

        } catch (error : any) {
            alert(error.message)
        }

    }


    React.useEffect( () => {


        getInventory()
        getMyDonut()
    },[web3Accessor,purchaseCount]);

    async function getInventory() {
        const receivedInventory = web3Accessor != null ? await web3Accessor.contract.methods.getVendingMachineBalance().call() : 0;


        setInventory(receivedInventory.toString());

    }


    async function getMyDonut() {
        const receivedCount = web3Accessor != null ? await web3Accessor.contract.methods.donutBalances(web3Accessor.myAccount).call() : 0;

        setMyDonut(receivedCount.toString());
    }





    return (<>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{
                paddingLeft: '10px'
            }}>
                <Grid xs={6} style={{
                    padding :'4px'
                }}>
                    <Item>Inventory : {inventory}</Item>
                </Grid>
                <Grid xs={6} style={{
                    padding: '4px'
                }}>
                    <Item>My Donut: {myDonut}</Item>
                </Grid>


                <br /><br /><br /><br />



                    <Grid xs={12} style={{
                        padding: '4px'
                    }} >
                        <h4>Buy Donut</h4>
                        <Stack direction="row" spacing={2}>
                            <TextField onChange={changeInput} id="input-amount" type='number' label="Enter Amount" variant="outlined" style={{
                                maxWidth: '100%'
                            }} />
                            <div style={{
                                paddingLeft: '5px',
                                //paddingTop:'5px'
                            }}>
                                <Button onClick={onBuy} variant="contained" style={{
                                    height: '100%',
                                    minWidth: '85px'
                                }} >Buy</Button>
                            </div>

                        </Stack>



                    </Grid>




            </Grid>
        </Box>

    </>)


}
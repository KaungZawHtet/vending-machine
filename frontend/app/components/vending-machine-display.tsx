import { Box, Button, Grid, Paper, Stack, TextField, styled } from '@mui/material';
import * as React from 'react';
import vmContract from '../utils/web3';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function VendingMachineDisplay({ myDonut }) {

    const [inventory, setInventory] = React.useState<string>('');


    React.useEffect(() => {
        getInventory()
    });

    async function getInventory() {
        //const temp: string = await vmContract.methods.getVendingMachineBalance().call();
        const temp = '23';
        setInventory(temp);
    }




    return (<>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{
                paddingLeft: '10px'
            }}>
                <Grid xs={4} style={{
                    padding :'4px'
                }}>
                    <Item>Inventory : {inventory}</Item>
                </Grid>
                <Grid xs={4} style={{
                    padding: '4px'
                }}>
                    <Item>My Donut: {myDonut}</Item>
                </Grid>
                <Grid xs={4} style={{
                    padding: '4px'
                }}>
                    <Item>Another Info: 0</Item>
                </Grid>

                <br /><br /><br /><br />

                <Grid xs={12} style={{
                    padding: '4px'
                }}>
                    <h4>Buy Donut</h4>
                    <Stack direction="row" spacing={2}>
                        <TextField id="input-amount" type='number' label="Enter Amount" variant="outlined" style={{
                            //padding: '4px'
                        }} />
                        <div style={{
                            paddingLeft: '5px',
                            //paddingTop:'5px'
                        }}>
                            <Button variant="contained" style={{
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
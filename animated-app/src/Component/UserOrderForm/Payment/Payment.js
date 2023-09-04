import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from "./style";
import { RadioGroup, FormLabel, FormControlLabel, Radio } from '@mui/material';
import Button from "@mui/material/Button";
import React, { useState } from "react";
import GooglePay from "./googlepay";
function Payment(props) {

    const [paymentMethod, setpaymentMethod] = useState('cc');
    function showInputBox() {
        setpaymentMethod("phonepay");
    }
    // user address detail
    const onSubmit = (data) => {
        props.onSubmitNext();
        props.onClickNext();
        props.disableAddress();
        props.disablePayment();
        props.disablePersonalDetail();
        data.preventDefault();
    }

    return (
        <div style={styles.FormContainer}>
            <Container component="main" maxWidth="xs" style={styles.DetailContainer}>
                <Typography component="h1" variant="h5">
                    PAYMENT METHOD
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <div>
                        <FormLabel id="demo-row-radio-buttons-group-label">Select any one method</FormLabel>
                        <RadioGroup
                            defaultValue="cc"
                            coloumn
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group">
                            <FormControlLabel id="cc" value="cc" onSelect={showInputBox} control={<Radio />}
                                onClick={() => setpaymentMethod('cc')}
                                label="Credit/Debit card" />
                            {paymentMethod === 'cc' && (<div style={styles.InputBox} >
                                <TextField style={styles.Input}
                                    label="Card Number"
                                    name="ccnumber"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                /><br />
                                <TextField style={styles.Input}
                                    label="Expiry Date"
                                    name="ccexp"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    format={'MM/YYYY'}
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>)
                            }

                            <FormControlLabel id="googlepay" value="googlepay" control={<Radio />} label="Google Pay" onClick={() => setpaymentMethod('googlepay')} />
                            {paymentMethod === 'googlepay' && (
                                <GooglePay />
                            )}
                        </RadioGroup>
                    </div>
                </Box>

                <Button variant="contained" onSubmit={() => props.onSubmitBack()} onClick={() => props.onClickBack()} style={styles.BackButton} >Back</Button>
                <Button variant="contained" onClick={onSubmit} style={styles.BackButton} return false>Next</Button>
            </Container>
        </div >
    )
};

export default Payment;

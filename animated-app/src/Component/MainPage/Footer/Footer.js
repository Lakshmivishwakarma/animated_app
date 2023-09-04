import React from "react";
import styles from "./Style";
import { Grid, Typography } from "@mui/material";
import { FaEnvelope, FaMobile } from "react-icons/fa";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';

function Footer() {

    return (
        <Card variant="outlined" style={styles.container}>
            <CardContent>
                <Grid container spacing={1} style={styles.container}>
                    <Grid item sm={3} xs={12}>
                        <Typography component="h5" variant='h5'>Shop and Learn</Typography>
                        <Typography component="p" variant='p'>Store</Typography>
                        <Typography component="p" variant='p'>mac</Typography>
                        <Typography component="p" variant='p'>iPad</Typography>
                        <Typography component="p" variant='p'>iPhone</Typography>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Typography component="h5" variant='h5'>Services</Typography>
                        <Typography component="p" variant='p'>Apple Music</Typography>
                        <Typography component="p" variant='p'>Apple TV+</Typography>
                        <Typography component="p" variant='p'>Apple Arcade</Typography>
                        <Typography component="p" variant='p'>Apple Books</Typography>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Typography component="h5" variant='h5'>Apple Store</Typography>
                        <Typography component="p" variant='p'>Ways to Buy</Typography>
                        <Typography component="p" variant='p'>Apple Trade In</Typography>
                        <Typography component="p" variant='p'>Recycling Programme</Typography>
                        <Typography component="p" variant='p'>Order Status</Typography>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Typography component="h5" variant='h5' >Contact Us</Typography>
                        <Typography component="a" variant='a' href="email_address" ><FaEnvelope /> bangalore_admin@apple.com</Typography>
                        <Typography component="p" variant='p'><FaMobile /> +918040455150</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <hr></hr>
                        <Typography component="h5" variant='h5'>Copyright © 2022 Apple Inc. All rights reserved.</Typography>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
export default Footer;

import styles from "./style"
import React from "react";
import { Card } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { FaMobileAlt, } from "react-icons/fa";
import { FcIpad } from "react-icons/fc";
import { GrMonitor } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";
import { Container } from 'react-bootstrap';

function SearchByProduct() {
    return (
        <Container>
            <hr></hr>
            <Grid container spacing={2} style={styles.MainContainer}>
                <Grid item xs={6} sm={3}><Card style={styles.Card}><FaMobileAlt size={80} /></Card><Typography variant="h6" color="#800080">Iphone</Typography></Grid>
                <Grid item xs={6} sm={3}><Card style={styles.Card}><GrMonitor size={80} /></Card><Typography variant="h5" >Mac</Typography></Grid>
                <Grid item xs={6} sm={3}><Card style={styles.Card}><FcIpad size={80} /></Card><Typography variant="h6" color="#C70039">Ipad</Typography></Grid>
                <Grid item xs={6} sm={3}><Card style={styles.Card}><FiMonitor size={80} /></Card><Typography variant="h6" color="#C70039">TV</Typography></Grid>
            </Grid>
            <hr></hr>
        </Container>
    );
}

export default SearchByProduct;

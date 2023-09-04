import styles from "./style"
import React from "react";
import { Card } from '@mui/material';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';
import { FaStar, FaApple } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { MdCable } from "react-icons/md";

function SearchByCategory() {

    return (
        <Container>
            <hr></hr>
            <Grid container spacing={2} style={styles.MainContainer}>
                <Grid item xs={6} sm={3}><Card style={styles.Card}><FaApple size={80} /></Card><Typography variant="h5" color="#800080">Made by Apple</Typography></Grid>
                <Grid item xs={6} sm={3}><Card style={styles.Card}><FaStar size={80} /></Card><Typography variant="h5">What’s New</Typography></Grid>
                <Grid item xs={6} sm={3}><Card style={styles.Card}><GiBookCover size={80} /></Card><Typography variant="h5" color="#C70039">Cases & Protection</Typography></Grid>
                <Grid item xs={6} sm={3}><Card style={styles.Card}><MdCable size={80} /></Card><Typography variant="h5" color="#C70039">Apple Watch Straps</Typography></Grid>
            </Grid>
            <hr></hr>
        </Container>
    );
}

export default SearchByCategory;

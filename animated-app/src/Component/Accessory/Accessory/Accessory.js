import styles from "./style";
import React from "react";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Accessory(props) {
    return (
        <Card variant="outlined" sx={{ maxWidth: 400 }} style={styles.MainContainer}>
            <CardContent>
                <img style={styles.Image} src={props.image} alt="" />
                <Typography variant="h6" color="#800080">{props.new}</Typography>
                <Typography variant="h5" >{props.name}</Typography>
                <Typography variant="h6" color="#C70039">{props.price}</Typography>
            </CardContent>
        </Card>
    );
}

export default Accessory;

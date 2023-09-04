import styles from "./style"
import * as React from 'react';
import { Grid, Button } from '@mui/material';

function Homepage() {

    return (
        <Grid container style={styles.SubContainer}>
            <Grid item sm={6} xs={12}>
                <img src="http://localhost:3000/assets/images/homepage.jpg" alt="" style={styles.Image} />
            </Grid>
            <Grid item sm={6} xs={12} style={styles.SubContainer}>
                <iframe
                    title="video"
                    width="100%"
                    height="90%"
                    src="https://www.youtube.com/embed/ZH5krCyNeYY?autoplay=1&mute=1"
                    allow=" autoplay; picture-in-picture;"></iframe>
            </Grid>
            <Grid item xs={12}>
                <h1 style={styles.Font}>Get an education discount on Mac or iPad.<p style={styles.Airpods}> ◊◊ Plus get AirPods ◊◊</p></h1>
                <p style={styles.Font}>Save on Mac or iPad for university. You’ll also save on Apple Pencil, Smart Keyboard, get 20% off AppleCare+ footnote3 and more. Available to current and newly accepted university students, and teachers and staff at all levels. footnote* Start by verifying your eligibility.</p>
                <Button variant="contained" color="success">
                    Get Verified with UNiDAYS
                </Button>
            </Grid>

            <Grid item xs={12} style={styles.GridContainer}>
                <h2>Need shopping help?</h2>
                <p>Shop one on one with an Apple Specialist.</p>
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <h6>Call us</h6>
                        <p>000800 040 1966</p>
                    </Grid>
                    <Grid item xs={6}>
                        <h6>Chat Online</h6>
                        <a href="https://www.com">Chat Us</a>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Homepage;

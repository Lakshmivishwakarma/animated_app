import React from "react";
import styles from "./style";
import { Grid, Typography, Button } from '@mui/material';
import { FaCar, FaShoppingBag, FaCoins, FaGift } from "react-icons/fa";
import { Container } from 'react-bootstrap';
import theme from "../../Theme/Theme"
import { ThemeProvider } from '@mui/material/styles';

function MainPageComp() {
    return (
        <><div style={styles.MainContainer}>
            <Container>
                <Grid container>
                    <Grid item xs={12} sm={6} style={styles.Container}>
                        <Typography variant="h5" fontSize={30} style={styles.TitleContainer}>Find Your Own happiness</Typography>
                        <Typography>Get 50% off on ypur first purchase</Typography>
                        <Typography style={styles.Flower}> FLOWER50</Typography>
                        <ThemeProvider theme={theme}>
                            <Button variant="outlined" style={styles.Button}>
                                Get Verified with UNiDAYS
                            </Button>
                        </ThemeProvider>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div>
                            <img src="http://localhost:3000/assets/images/iphonepro.jpg" alt="" style={styles.ImageContainer}>
                            </img>
                        </div>
                    </Grid>

                </Grid>
            </Container>
        </div>
            <Container>
                <Grid container style={styles.OverlapContainer}>
                    <Grid item xs={12} sm={3} style={styles.OverlapItem}>
                        <div>
                            <FaCar size={40} />
                        </div>
                        <div>
                            <Typography variant="h6" >Free Shipping</Typography>
                            <Typography>On order bigger than 50</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} style={styles.OverlapItem}>
                        <div>
                            <FaShoppingBag size={40} />
                        </div>
                        <div>
                            <Typography variant="h6" >15 day Return</Typography>
                            <Typography>Moneyback guarantee</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} style={styles.OverlapItem}>
                        <div>
                            <FaCoins size={40} />
                        </div>
                        <div>
                            <Typography variant="h6" >Secure CheckOut</Typography>
                            <Typography>Secured by stripe</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3} style={styles.OverlapItem}>
                        <div>
                            <FaGift size={40} />
                        </div>
                        <div>
                            <Typography variant="h6" > Make Money</Typography>
                            <Typography> Use our affiliate program</Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default MainPageComp;

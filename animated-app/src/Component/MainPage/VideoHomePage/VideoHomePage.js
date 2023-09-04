import React from "react";
import styles from "./style";
import { Grid, Button, Typography, Card, CardContent, Link } from '@mui/material';
import { Container } from 'react-bootstrap';
import { Slide } from "react-awesome-reveal";
import { BsArrowRight } from "react-icons/bs"
import { NavLink } from "react-router-dom";
import MainPageComp from "../../MainPageComp/MainPageComp"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BsTelephone } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";

function VideoHomePage() {
    function stopMovie(e) {
        e.target.pause();
    }
    const theme = createTheme({
        palette: {
            primary: {
                main: "#24204f",
            },
        },
    });

    return (
        <><MainPageComp />
            <Container>
                <div style={styles.container}>
                    <Slide direction="right">
                        <Grid container>
                            <Grid item xs={12} sm={5} style={styles.GridContainerContent}>
                                <Typography variant="h4" color="#24204f" style={styles.MainHeading}>Do you have a great idea? Let's create it together</Typography>
                                <Typography sx={{ fontSize: 20 }}> No matter what your budget or project, we make it easy to get started. You'll work directly with an experienced web designer who will listen to you and help bring your idea to life on the Web.</Typography>
                            </Grid>
                            <Grid item xs={12} sm={5} style={styles.GridContainer}>
                                <img src="http://localhost:3000/assets/images/image1.jpg" alt="" style={styles.Image} />
                            </Grid>
                        </Grid>
                    </Slide>
                    <video style={styles.videoContainer} width="100%" height="100%" controls autoPlay={true} muted loop onMouseOut={stopMovie}>
                        <source src="http://localhost:3000/assets/video/iphone.mp4" type="video/mp4" />
                    </video>
                    <Grid container style={styles.GadgetsContainer}>
                        <Grid item xs={12} sm={6} style={styles.Gadgets}>
                            <img src="http://localhost:3000/assets/images/gadget.jpeg" alt="" height="500px" width="90%" />
                        </Grid>

                        <Grid item xs={12} sm={5} style={styles.Gadgets}>
                            <Grid item xs={12}>
                                <Typography variant="h4" color="primary" style={styles.MainHeading}>Game Gadgets</Typography>
                                <Typography variant="h5" color="primary" style={styles.MainHeading}>DISCOVER A WORLD WITHOUT LIMITS</Typography>
                                <Typography sx={{ fontSize: 20 }}>No matter what your budget or project, we make it easy to get started. You'll work directly with an experienced web designer who will listen to you and help bring your idea to life on the Web.</Typography>
                                <Grid container>
                                    <Grid item xs={12} sm={4} style={styles.CardContainer}>
                                        <NavLink to="/access"><Card variant="outlined" sx={{ maxWidth: 175 }} style={styles.Card}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 20 }} color="primary" gutterBottom>
                                                    WATER TESTED
                                                </Typography>
                                            </CardContent>
                                            <NavLink to="/access"><BsArrowRight size={40} style={styles.Arrow} /></NavLink>
                                        </Card></NavLink>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Card sx={{ maxWidth: 175 }} style={styles.Card}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 20 }} color="primary" gutterBottom>
                                                    CARVED GLASS
                                                </Typography>
                                            </CardContent>
                                            <NavLink to="/access"><BsArrowRight size={40} style={styles.Arrow} /></NavLink>
                                        </Card>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Card sx={{ maxWidth: 175 }} style={styles.Card}>
                                            <CardContent>
                                                <Typography sx={{ fontSize: 20 }} color="primary" gutterBottom>
                                                    CARVED GLASS
                                                </Typography>
                                            </CardContent>
                                            <NavLink to="/access"><BsArrowRight size={40} style={styles.Arrow} /></NavLink>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>

                <Grid item xs={12} style={styles.GridContainer}>
                    <Typography variant="h4" color="primary" style={styles.Font}>Get an education discount on Mac or iPad.</Typography><Typography variant="h3" color="primary" > ◊◊ Plus get AirPods ◊◊</Typography>
                    <Typography fontSize={20} style={styles.Font}>Save on Mac or iPad for university. You’ll also save on Apple Pencil, Smart Keyboard, get 20% off AppleCare+ footnote3 and more. Available to current and newly accepted university students, and teachers and staff at all levels. footnote* Start by verifying your eligibility.</Typography>
                    <ThemeProvider theme={theme}>  <Button variant="contained" >
                        Get Verified with UNiDAYS
                    </Button></ThemeProvider>
                </Grid>

                <Grid container style={styles.VideoDiv}>
                    <Grid item sm={6} xs={12}>
                        <img src="http://localhost:3000/assets/images/homepage.jpg" alt="" style={styles.Image} />
                    </Grid>
                    <Grid item sm={6} xs={12} style={styles.SubContainer}>
                        <iframe
                            title="video"
                            width="100%"
                            height="80%"
                            src="https://www.youtube.com/embed/ZH5krCyNeYY?autoplay=1&mute=1"
                            allow=" autoplay; picture-in-picture;"></iframe>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={12} style={styles.NeedHelp}>
                    <Typography variant="h3" color="primary" >Need shopping help?</Typography>
                    <Typography variant="h5 " color="primary" fontSize={20}>Shop one on one with an Apple Specialist.</Typography>
                    <div style={styles.Contact}>
                        <BsTelephone size={30} />
                        <Typography variant="h6">Call us</Typography>
                        <Link to="">000800 040 1966</Link>
                    </div>
                    <div style={styles.Contact}>
                        <BiMessageDetail size={30} /> <Typography variant="h6"> Chat Online</Typography>
                        <Link href="https://www.com">Chat Us</Link>
                    </div>
                </Grid>
            </Container>
        </>
    );
}
export default VideoHomePage;

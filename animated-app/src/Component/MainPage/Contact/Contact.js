import * as React from 'react';
import { Container } from 'react-bootstrap';
import { TextField, Button, Typography, Link, Grid } from '@mui/material';
import styles from "./style"
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
    return (
        <div style={styles.MainContainer}>
            <div style={styles.FirstGridContainer}>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} style={styles.Form}>
                            <Typography variant="h3" color="#24204f">Contact Us</Typography>
                            <TextField
                                color="info"
                                style={styles.InputField}
                                margin="normal"
                                required
                                fullWidth
                                name="Full-Name"
                                label="Full name"
                                type="text"
                                id="fullName"
                                autoComplete="Full name"
                            />
                            <TextField
                                color="info"
                                style={styles.InputField}
                                margin="normal"
                                required
                                fullWidth
                                name="Email"
                                label="Email"
                                type="Email"
                                id="email"
                                autoComplete="Email"
                            />
                            <TextField style={styles.InputField}
                                color="info"
                                margin="normal"
                                required
                                fullWidth
                                multiline
                                rows={2}
                                name="Message"
                                label="Enter your Message"
                                type="Message"
                                id="message"
                                autoComplete="Message"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit
                            </Button>

                        </Grid>
                        <Grid item xs={12} md={6}>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <div style={styles.SecondGridContainer}>
                <Container >
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <div style={styles.GetInTouch}>
                                <Typography variant="h3" color="primary">GET IN TOUCH </Typography>
                                <Typography style={styles.ContentMargin}>Hey! We are looking forward to start </Typography>
                                <Typography> a project with you!</Typography>
                                <Typography style={styles.ContentMargin}>You can talk to an Apple Advisor by calling the Apple Support phone number for your country or region.</Typography>
                            </div>
                            <div style={styles.SocialMedia}>
                                <Link href="https://www.facebook.com/apple/ " target="_blank" ><FaFacebookSquare size={30} /></Link>
                                <Link href="https://twitter.com/AppleSupport " target="_blank"> <FaInstagramSquare size={30} /></Link>
                                <Link href="https://www.youtube.com/applesupport " target="_blank"> <FaYoutubeSquare size={30} /></Link>
                                <Link href="https://www.facebook.com/apple/ " target="_blank" ><FaFacebookSquare size={30} /></Link>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={6} style={styles.OverlapOutside}>
                            <div style={styles.OverlapInside}>
                                <div style={styles.CallUs}><Typography variant="h6">CALL US</Typography>
                                    <Typography><Link href="tel:123-456-7890" >123-456-7890</Link></Typography>
                                    <Typography><Link href="tel:123-456-7889"> 123-456-7890 </Link></Typography>
                                </div>
                                <div style={styles.CallUs}><Typography variant="h6" >BUSINESS HOURS</Typography>
                                    <Typography>Mon- Fri ----10 am to 7 pm</Typography>
                                    <Typography>Sat-Sun---- closed</Typography>
                                </div>
                            </div>

                        </Grid>
                    </Grid>
                </Container>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6} style={styles.Address}>
                            <div style={styles.Map}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: "0" }}
                                    allowFullScreen=""
                                    title="map"
                                ></iframe>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} style={styles.Address}>
                            <div style={styles.AddressDetail}>
                                <Typography style={styles.MapIcon} color="primary"><FaMapMarkerAlt size={50} /></Typography>
                                <Typography variant="h4" color="#24204f">LOCATION</Typography>
                                <Typography>19th Floor, Concorde Tower C,
                                    UB City, No.24, Vittal Mallya Road,
                                    Bangalore 560001, India.</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default Contact;

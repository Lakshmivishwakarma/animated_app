import styles from "./style"
import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Typography, Button, Grid } from "@mui/material";
import CountUp from "react-countup"
import { FcAlarmClock } from "react-icons/fc";
import { BiMessageDots, BiWalletAlt } from "react-icons/bi";
import { Card } from '@mui/material';

function Contact() {

    return (
        <>
            <Container>
                <Typography variant="h3" color="primary" style={styles.MainTitle}>Our Best Features </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} style={styles.FeaturesContent}>
                        <Card style={styles.Card}> <BiWalletAlt size={40} />
                            <Typography variant="h5" color="primary"> Your Growth Our Priority</Typography>
                            <Typography>We make everything user friendly so you can focus on growing your business.</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} style={styles.FeaturesContent}>
                        <Card style={styles.Card}>   <FcAlarmClock size={40} />
                            <Typography variant="h5" color="primary"> Transparent Workflow</Typography>
                            <Typography>We create transparent workflow. As a result, we help you understand your files, with simplicity.</Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4} style={styles.FeaturesContent}>
                        <Card style={styles.Card}><BiMessageDots size={40} />
                            <Typography variant="h5" color="primary"> 24*7 Support</Typography>
                            <Typography> Our friendly and knowledgeable staff are available 24×7 to answer your questions.</Typography>
                        </Card>
                    </Grid>
                </Grid>

                <Row>
                    <Col xs={12} md={12}>
                        <Typography variant="h3" color="primary" style={styles.MainTitle}>Apple makes business better </Typography>
                        <Typography>Apple hardware, software and services work together</Typography>
                        <Typography>to give your employeesthe power and flexibility</Typography>
                        <Typography>to do whatever needs doing</Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            ENQUIRE
                        </Button>

                        <Grid container style={styles.Records}>
                            <Grid item xs={6} sm={3}>
                                <div>
                                    <h2><CountUp end={22000} duration={5} /></h2>
                                    <Typography color="#24204f">Project</Typography>
                                </div></Grid>
                            <Grid item xs={6} sm={3}>
                                <div>
                                    <h2> <CountUp start={0} end={30000} duration={5} /> </h2>
                                    <Typography color="#24204f">Staff</Typography>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div>
                                    <h2><CountUp start={0} end={15} duration={5} /></h2><Typography color="#24204f">Office</Typography>
                                </div></Grid>
                            <Grid item xs={6} sm={3}>
                                <div>
                                    <h2><CountUp end={10000} duration={5} /></h2> <Typography color="#24204f">Happy Clients</Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Col>
                </Row>
            </Container>
            <Grid container>
                <Grid item xs={12} sm={6} style={styles.ImageContainer}>
                    <img src="http://localhost:3000/assets/images/images.jpeg" alt="Girl in a jacket" width="75%" height="350px"></img>
                </Grid>
                <Grid item xs={12} sm={6} style={styles.ImageContainer}>
                    <img src="http://localhost:3000/assets/images/macpro.jpg" alt="Girl in a jacket" width="75%" height="350px"></img>
                </Grid>
            </Grid><Container>
                <Row>
                    <Col xs={12} md={12}>
                        <Typography variant="h5" style={styles.MainContent}> Apple devices come with powerful apps built in.The App Store offers even more tools for almost any
                            job — from sales and engineering to fixing jets and building skyscrapers.And the Apple developer platform gives
                            businesses the power to create custom solutions that the world has yet to see.</Typography>
                        <Typography variant="h6" color="primary" style={styles.Content}>You can talk to an Apple Advisor by calling the Apple Support phone number for your country or region.</Typography>
                        <Button style={styles.MeetOurTeam}
                            type="submit"
                            variant="contained"
                            sx={{ mt: 5, mb: 7 }} >
                            MEET OUR TEAM
                        </Button>
                    </Col></Row>
            </Container>
            <div style={styles.Report}>
                <Container>
                    <Typography variant="h3" style={styles.ReportResources}>Reports and Resources</Typography>
                    <Row>
                        <Col xs={12} md={6}>
                            <Typography variant="h5" color="#24204f">Products and Platform</Typography>
                            <p>New for Business</p>
                            <p>Productivity </p>
                            <p>Platform Security</p>
                            <p>Deployment and Management</p>
                            <p>Employee choice guide</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <Typography variant="h5" color="#24204f">IT</Typography>
                            <p>iOS and iPadOS Deployment</p>
                            <p>Mac Deployment</p>
                            <p>Deployment and Management</p>
                            <p>Training for IT professionals</p>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Typography style={styles.OurProcess} variant="h3" color="#24204f">Our Process</Typography>
                    <Typography variant="h6"> You can start a project on Mac and finish it on iPad, use your screens and even draw with Apple Pencil on your iPad or use your iPhone to make live updates on your Mac. And it’s all compatible with.</Typography>
                    <Grid container>
                        <Grid item xs={12} sm={3}>
                            <div style={styles.OurProcessDiv}>
                                <div style={styles.ProcessTitle}><h5>Design</h5></div>
                                <ul style={styles.list}>
                                    <li>Requirement gathering</li>
                                    <li>Proposal</li>
                                    <li>Project Plan</li>
                                    <li>Solution Page</li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div style={styles.OurProcessDiv}>
                                <div style={styles.ProcessTitle}><h5>Development</h5></div>
                                <ul style={styles.list}>
                                    <li>Requirement gathering</li>
                                    <li>Proposal</li>
                                    <li>Project Plan</li>
                                    <li>Solution Page</li>
                                </ul></div></Grid>
                        <Grid item xs={12} sm={3}>
                            <div style={styles.OurProcessDiv}>
                                <div style={styles.ProcessTitle}><h5>Project Initiation</h5></div>
                                <ul style={styles.list}>
                                    <li>Requirement gathering</li>
                                    <li>Proposal</li>
                                    <li>Project Plan</li>
                                    <li>Solution Page</li>
                                </ul></div>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <div style={styles.OurProcessDiv}>
                                <div style={styles.ProcessTitle}><h5>Development</h5></div>
                                <ul style={styles.list}>
                                    <li>Requirement gathering</li>
                                    <li>Proposal</li>
                                    <li>Project Plan</li>
                                    <li>Solution Page</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 7, mb: 20 }}
                    >
                        LEARN MORE  {' >'}
                    </Button>
                </Container>
            </div>
        </>
    )
}

export default Contact;

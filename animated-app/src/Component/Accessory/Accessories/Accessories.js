import Accessory from "../../Accessory/Accessory/Accessory";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import styles from "../Accessories/style";
import { Typography, Link, TextField, } from '@mui/material';
import { Container } from 'react-bootstrap';
import SearchByCategory from "../SearchByCategory/SearchByCategory";
import SearchByProduct from "../SearchByProduct/SearchByProduct";
import { Tab, Tabs } from "@mui/material";

function Accessorries(props) {
    const [accessories, setAccessories] = useState([]);

    // function for get data by API
    async function getAccesories() {
        fetch("http://localhost:3000/data/Accessories.json")
            .then((response) => response.json())
            .then((data) => {
                setAccessories(data)
            });
    }
    useEffect(() => {
        getAccesories();
    }, []);

    const [value, setValue] = React.useState('one');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container>
            <div style={styles.MagSafeContainer}>
                <Container>
                    <Grid container style={styles.MagSafe}>
                        <Grid item xs={12} sm={5} style={styles.MagSafeData}>
                            <Typography variant="h3">  Mix. Match. MagSafe.</Typography>
                            <Typography variant="h5">Snap on a case, wallet, wireless charger or battery pack.</Typography>
                            <Link href=" "><Typography variant="h5" color="success">Shop MagSafe {'>'}</Typography></Link>
                        </Grid>
                        <Grid item xs={12} sm={7} style={styles.MagSafeImage}>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <Container style={styles.Search}>
                <Typography variant="h4"> Find the accessories you’re looking for.</Typography>
                <div style={styles.SearchContainer}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="search"
                        label="Search"
                        name="Search"
                        autoComplete="Search"
                        autoFocus
                    />
                </div>
            </Container>
            <div className="d-flex justify-content-center">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="one" label="Browse by Product" />
                    <Tab value="two" label="Browse by Category" />

                </Tabs>
            </div>

            {value === "one" ? (<SearchByCategory />) : (<SearchByProduct />)}

            <Grid item xs={12} style={styles.MainContainer}>
                <Container>
                    <Typography variant="h3" color="primary">Featured iPhone Accessories</Typography>
                    <Grid container spacing={2} style={styles.Container}>
                        {accessories.map((item) => {
                            return (
                                <Grid item xs={12} sm={4} style={styles.MainContainer} key={item?.id}>
                                    <Accessory
                                        image={item?.path}
                                        name={item?.productName}
                                        new={item?.description}
                                        price={item?.price}
                                    ></Accessory>
                                </Grid>
                            );
                        })}
                    </Grid>

                    <Link>
                        <Typography variant="h5">Shop all iPad accessories {'>'} </Typography>
                    </Link>
                </Container>
            </Grid>

            <Grid item xs={12} style={styles.MainContainer}>
                <Container >
                    <Typography variant="h3" color="primary">Featured iPad Accessories</Typography>
                    <Grid container spacing={2} style={styles.Container}>
                        {accessories.map((item) => {
                            return (
                                <Grid item xs={12} sm={4} style={styles.MainContainer} key={item?.id}>
                                    <Accessory
                                        image={item?.path}
                                        name={item?.productName}
                                        new={item?.description}
                                        price={item?.price}
                                    ></Accessory>
                                </Grid>
                            );
                        })}
                    </Grid>
                    <Link>
                        <Typography variant="h5"> Shop all iPad accessories {'>'} </Typography>
                    </Link>
                </Container>
            </Grid>
        </Container>
    );
}

export default Accessorries;

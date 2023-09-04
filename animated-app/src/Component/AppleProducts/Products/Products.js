import Product from "../Product/Product";
import styles from "./style";
import { Grid } from '@mui/material';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from 'react-bootstrap';

// different product details in array for creating a component
function Products() {

  //Get productType from URL 
  let { type = "iphone" } = useParams([]);

  const [products, setProducts] = useState([]);

  // function for get data by API
  async function getProducts(type = 'iPhone') {

    fetch(`http://localhost:3000/data/${type}.json`)
      .then(res => res.json())
      .then((data) => {
        setProducts(data);
      });
  }
  useEffect(() => {
    getProducts(type);
  }, [type]);

  return (

    <div style={styles.ProductDiv}>
      <Container>
        <div style={styles.IphoneContainer}>
          <Grid container spacing={0}>
            {products.map((product) => {
              //iterate an array
              return (
                <Grid item xs={12} sm={3} key={product.id}>
                  <div className="d-flex justify-content-around">
                    <div style={styles.ProductComponent}>
                      <Product
                        id={product.id}
                        productName={product.productName}
                        description={product.description}
                        subDescription={product.subDescription}
                        learnMore={product.learnMore}
                        buttonText={product.buttonText}
                        photo={product.path}
                        price={product.mrp}
                      ></Product>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default Products;

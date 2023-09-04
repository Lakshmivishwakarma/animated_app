// import styles from "../PlaceOrder/style";
// import React from "react";
// import Button from "@mui/material/Button"; // used button
// import Grid from "@mui/material/Grid";
// import { Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { productData } from "../../Redux/Actions/action"


// function PlaceOrder(order) {
//   //store selected product detail 

//   const myStateForSignIn = useSelector((state) => state.signInReducer)
//   let signUpData = myStateForSignIn.signIn
//   const myStateForLogin = useSelector((state) => state.sessionReducer)
//   console.log(myStateForLogin);

//   const dispatch = useDispatch();

//   function handleSubmit() {
//     dispatch(productData(order))
//   }

//   return (
//     <div style={styles.BuyIphone}>
//       <Grid style={styles.PhoneDetail} container spacing={0} >
//         <Grid xs={12} className="d-md-block d-lg-none">
//           <Typography variant="h3" color="primary">{order.productName}</Typography>
//         </Grid>
//         <Grid item sm={4} xs={12}>
//           <img style={styles.Image} src={order.path} alt="" />
//         </Grid>
//         <Grid item sm={8} xs={12}>
//           <Typography variant="h3" color="primary" className="d-none d-lg-block" >{order.productName}</Typography>
//           <Typography variant="h6" style={styles.Detail}>{order.productDetail}</Typography>
//           <Typography variant="h6" color="secondary" style={styles.Detail}>Price:-{order.price}</Typography>
//           {/* <Link to={`/buyNow/${order.id}`} style={styles.LearnMore} onClick={handleSubmit}>  <Button variant="contained" style={styles.LearnMore} >Buy Now</Button></Link> */}
//           <Link to={`/learnMore/${order.id}`} style={styles.LearnMore} ><Button variant="contained" style={styles.LearnMore}>Learn more</Button>
//           </Link>
//         </Grid>
//       </Grid>
//     </div>

  );
}
export default PlaceOrder;

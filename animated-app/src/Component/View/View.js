import styles from "./style";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import SimpleImageSlider from "react-simple-image-slider";
import Review from "../Review/Review";
import { Container } from "react-bootstrap";

const View = (productDetails) => {

  return (
    <Container style={styles.productDetail}>
      <Grid container spacing={1}>
        {/* Visible on small screen size */}
        <Grid item xs={12} className="d-md-block d-lg-none" style={styles.DetailGrid} >
          <Typography variant="h3" color="primary">{productDetails.productTitle}</Typography>
        </Grid>

        <Grid item sm={5} xs={12}>
          <Grid container justifyContent='center' style={styles.Detail}>
            <Grid item>{productDetails?.imagePath && (<SimpleImageSlider
              width={300}
              height={300}
              images={productDetails?.imagePath}
              showBullets={true}
              showNavs={true}
              bgColor="white"
              navMargin={10}
            />)}</Grid>
          </Grid>
          <Grid container justifyContent='center' style={styles.Detail}>
            <Grid item className="d-none d-lg-block" >{/* // embed youtube video  */}
              <iframe style={styles.Iframe}
                title="video"
                width="100%"
                height="100%"
                src={productDetails.videoSrc}
                allow=" autoplay; picture-in-picture;"></iframe>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sm={7} xs={12} style={styles.Detail}>
          <Typography variant="h3" color="primary" className="d-none d-lg-block">{productDetails.productTitle}</Typography>

          <h4 style={styles.About}><span style={styles.Offer}>{productDetails.offer}</span><span>{productDetails.price}</span></h4>

          <p style={styles.OverLine}>M.R.P. - {productDetails.mrp}</p>

          <h3> Offers:-</h3>
          <Grid container spacing={1}>
            <Grid item sm={3} xs={5} style={styles.DiscountOffer}>
              <Typography variant="h6" color="primary" >Offer on Credit Card</Typography>
              <p>{productDetails.creditCardOffer}</p>
            </Grid>
            <Grid item sm={3} xs={5} style={styles.DiscountOffer}>
              <Typography variant="h6" color="primary">Partner Offers</Typography>
              <p>{productDetails.gstOffer}</p>
            </Grid>
          </Grid>

          <h3 style={styles.About}>About this item</h3>
          <ul style={styles.List}>
            {productDetails?.description?.map((desc) => (<li key={desc.toString()}>{desc}</li>))}
          </ul>
          <Review />
        </Grid>

        <Grid container justifyContent='center'>
          <Grid item xs={10} className="d-md-block d-lg-none" style={styles.DetailGrid}>{/* // embed youtube video  */}
            <iframe style={styles.Iframe}
              title="video"
              width="100%"
              height="100%"
              src={productDetails.videoSrc}
              allow=" autoplay; picture-in-picture;">
            </iframe>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default View;

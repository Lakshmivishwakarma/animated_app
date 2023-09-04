import Grid from "@mui/material/Grid";
import { Rating } from "@mui/material";
import styles from "./style";

const Review = (productDetails) => {
    let value = 60;

    return (
        <Grid container justifyContent='left' style={styles.Review}>
            <Grid item xs={4}>
                <h3>Customer reviews</h3>
                <Rating name="half-rating-read" value={4} readOnly /> <h6>4.1 Out of 5</h6>
                <span>5 Star <Rating name="half-rating-read" value={value} readOnly /> </span> 60%
            </Grid>
            <Grid item xs={5}>
                <h4>Reviews with images</h4>
            </Grid>
        </Grid>
    )
}

export default Review;

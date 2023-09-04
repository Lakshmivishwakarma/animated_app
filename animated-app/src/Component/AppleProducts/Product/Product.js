import styles from './style';
import { Card } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { productData } from "../../../Redux/Actions/action";

function Product(props) {

  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    transform: isHover ? 'scale(1.1)' : 'scale(1)',
  };

  const dispatch = useDispatch();
  function handleSubmit() {
    dispatch(productData(props))
  }

  return (

    <Link to={`learnMore/${props.id}`} style={styles.Link}>
      <div style={boxStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <Card variant="outlined" style={styles.Container} sx={{ maxWidth: 250 }}>

          <CardMedia
            component="img"
            alt="green iguana"
            height="200"
            width="100"
            image={props.photo}
          />

          <CardContent style={styles.CardContent}>
            <div className="d-flex">
              <div className="p-2">
                <Typography gutterBottom variant="h5" component="div" color="#24204f">
                  {props.productName}
                </Typography>
              </div>
              <div className="mr-auto p-2">
                <FaStar color="#24204f" style={styles.Icon} size={30} />
              </div>
            </div>

            <Typography color="#24204f">
              {props.description}
            </Typography>
            <Typography color="#24204f">
              {props.subDescription}
            </Typography>
          </CardContent>

          <CardContent>
            <Typography color="#24204f" style={styles.CardContent}>
              ₹- {props.price}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "left" }}>
            <Link to={`buyNow/${props.id}`}>
              <Button onClick={handleSubmit} style={styles.Link} variant="outlined" size="small">{props.buttonText}</Button>
            </Link>
          </CardActions>

        </Card>
      </div>
    </Link>
  );
}

export default Product;

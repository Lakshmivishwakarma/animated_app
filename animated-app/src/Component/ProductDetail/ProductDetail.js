/* eslint-disable react-hooks/exhaustive-deps */
import View from "../View/View";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function ProductDetails() {
  const [product, setProduct] = useState({});
  let { type } = useParams();

  // get id by URL
  let { id } = useParams();
  function getObject(idToSearch, products) {
    return products.filter((item) => item.id === parseInt(idToSearch));
  }

  // function for get data by API
  async function getProductDetail() {
    fetch(`http://localhost:3000/data/${type}.json`)
      .then((response) => response.json())
      .then((data) => {
        let productItem = getObject(id, data); //function called for get object by ID
        setProduct(productItem[0]);
      });
  }

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <View
        productName={product?.productName}
        description={product?.detailDescription}
        price={product?.price}
        productTitle={product?.productTitle}
        imagePath={product?.images}
        offer={product?.offer}
        mrp={product?.mrp}
        gstOffer={product?.gstOffer}
        creditCardOffer={product?.creditCardOffer}
        videoSrc={product?.videosrc}
      ></View>
    </div>
  );
}

export default ProductDetails;

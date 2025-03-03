import React, { useEffect, useState } from "react";
import LayOut from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endPoint";
import ProductCard from "../../Components/Product/ProductCard";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  useEffect(() => {
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
        
      })
      .catch((err) => {
        
        console.log(err);
      });
  }, []);
  return (
  <LayOut>
    {
      <ProductCard product={product} />
    }
    </LayOut>
  )
};

export default ProductDetail;

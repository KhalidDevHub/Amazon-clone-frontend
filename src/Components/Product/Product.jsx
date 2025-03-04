import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./product.module.css";
import { productUrl } from "../../Api/endPoint";
import Loader from "../Loader/Loader";
function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products`)
      .then((res) => {
        setProducts(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err)
  });
  }, []);

  return (
    <>
    { isLoading ? (
        <Loader />) :(
          <section className={classes.products_container}>
      {products.map((singleProduct) => (
        <ProductCard key={singleProduct.id} product={singleProduct} />
      ))}
    </section>
          )
    }
    </>
    
  );
}

export default Product;

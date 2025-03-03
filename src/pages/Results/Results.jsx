import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import classes from './Results.module.css'
import ProductCard from '../../Components/Product/ProductCard';

const Results = () => {
  const[results, setResults
  ] = useState([])
  const { categoryName } = useParams()
  useEffect(() => {
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((response) => {
      setResults(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  },[])
  
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category /{categoryName}</p>
        <br />
        <div className={classes.products_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results
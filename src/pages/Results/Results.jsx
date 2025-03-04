import React, { useState, useEffect } from 'react';
import Layout from '../../Components/Layout/Layout'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoint'
import classes from './Results.module.css'
import ProductCard from '../../Components/Product/ProductCard';
import Loader from '../../Components/Loader/Loader'
const Results = () => {
  const[results, setResults] = useState([])
  const { categoryName } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((response) => {
      setResults(response.data)
      setIsLoading(false)

    })
    .catch((error) => {
      setIsLoading(false)
      console.log(error)
    })
  },[])
  
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </Layout>
  );
}

export default Results
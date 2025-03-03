import React from 'react'
import Layout from '../../Components/Layout/Layout';
import CarouselEffect from '../../Components/Carousel Effect/CarouselEffect';
import Category from '../../Components/Category/Category';
import Product from '../../Components/Product/Product';
const Landing = () => {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing
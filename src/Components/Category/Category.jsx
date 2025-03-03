import React from "react";
import categoryInfos from "./categoryInfo";
import classes from "./category.module.css";
import CategoryCard from "./CategoryCard";
function Category (){
  return (
    <section className={classes.category__container}>
      {
      categoryInfos.map((info) => (
        <CategoryCard data ={info}/>
      ))
      }
    </section>
  );
};

export default Category;

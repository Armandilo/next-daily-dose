import React from 'react'
import styles from "../styles/ProductList.module.css"
import ProductCard from './ProductCard'

const ProductList = ({productList}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}></h1>
        <div className={styles.wrapper}>

          {productList.map((products)=>(
            <ProductCard key={products._id} products={products}/>
          ))}
            
            
        </div>
    </div>
  )
}

export default ProductList
import React from 'react'
import styles from "../styles/ProductCard.module.css"
import Image from 'next/image'

const ProductCard = () => {
  return (
    <div className = {styles.container}>
      <Image className = {styles.productimg} src="/img/coffee.jpg" alt="" width="90" height="90"/>
      <div className ={styles.productlist}>
        <h1 className={styles.title}>Ice Blended Cappucino</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tenetur soluta
        </p>
        <span className={styles.price}>RM7.90</span>
        
      </div>
    </div>
  )
}

export default ProductCard
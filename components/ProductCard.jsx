import React from 'react'
import styles from "../styles/ProductCard.module.css"
import Image from 'next/image'
import {BsCartPlus} from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { addProduct } from '../redux/cartSlice'
import { useState } from 'react'


const ProductCard = ({products}) => {
 


  return (
    <div className = {styles.container}>
      <Image className = {styles.productimg} src= {products.image} alt="" width="90" height="90"/>
      <div className ={styles.productlist}>
        <h1 className={styles.title}>{products.item_name}</h1>
        <p className={styles.desc}>
          {products.size}
        </p>
        <span className={styles.price}>RM{products.price}</span>
      </div>
      <button className={styles.button}><BsCartPlus size={32}/></button>
    </div>
  )
};



export default ProductCard
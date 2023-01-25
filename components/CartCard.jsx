import React from 'react'
import styles from "../styles/cartCard.module.css"
import Image from 'next/image'
import {FaTrashAlt} from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { delProduct } from '../redux/cartSlice'


const CartCard = ({products}) => {
  const dispatch = useDispatch();

 
  return(
    <div className = {styles.container}>
      <Image className = {styles.productimg} src={products.image} alt="" width="50" height="50"/>
      <div className ={styles.productlist}>
        <h1 className={styles.title}>{products.item_name}</h1>
        <span className={styles.price}>RM {products.price.toFixed(2)}</span>
      </div>
   
      <div className={styles.delContainer}>
        <button className={styles.button} onClick ={()=> dispatch(delProduct(products))}><FaTrashAlt size={20}/></button>
      </div>
    </div>
  )
}

export default CartCard
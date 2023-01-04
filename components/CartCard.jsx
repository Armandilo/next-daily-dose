import React from 'react'
import styles from "../styles/cartCard.module.css"
import Image from 'next/image'
import {FaTrashAlt} from 'react-icons/fa'

const CartCard = () => {
  return(
    <div className = {styles.container}>
      <Image className = {styles.productimg} src="/img/coffee.jpg" alt="" width="50" height="50"/>
      <div className ={styles.productlist}>
        <h1 className={styles.title}>Ice Blended Cappucino</h1>
        <span className={styles.price}>RM7.90</span>
      </div>
      <div className={styles.quan}>
        <input type="number" defaultValue={1} className={styles.inputquan} />
      </div>
      <div className={styles.delContainer}>
        <button className={styles.button}><FaTrashAlt size={20}/></button>
      </div>
    </div>
  )
}

export default CartCard
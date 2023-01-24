import React from 'react'
import styles from "../styles/Order.module.css"
import OrderCard from '../components/OrderCard'

const admin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.lists}>
          <a className={styles.itemname}>Item Name</a>
          <a className={styles.quantity}>Quantity</a>
          <a className={styles.status}>Status</a>
        </div>
        <OrderCard/>
        <OrderCard/>
       
      </div>
  
    </div>
  )
}

export default admin
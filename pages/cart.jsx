import React from 'react'
import styles from "../styles/cart.module.css"
import CartCard from '../components/CartCard'

const cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.lists}>
          <a className={styles.itemname}>Item Name</a>
          <a className={styles.quantity}>Quantity</a>
        </div>
        <CartCard/>
        <CartCard/>
        <div className={styles.strawcontainer}>
          <input type="checkbox" id="straw" name="straw" className={styles.checkbox} />
          <label htmlFor="straw" className={styles.strawLabel}>I need paper straw(s)</label>
        </div>
        <div className={styles.listcontainer}>
          <div className={styles.totallist}>
            <a className={styles.total}>TOTAL</a>
            <a className={styles.totalprice}>RM 14.20</a>
          </div>
          <div className={styles.taxlist}>
            <a className={styles.tax}>TAX</a>
            <a className={styles.taxprice}>RM&nbsp;&nbsp;&nbsp;0.20</a>
          </div>
          <div className={styles.subtotallists}>
            <a className={styles.subtotal}>SUBTOTAL</a>
            <a className={styles.subtotalprice}>RM 14.40</a>
          </div>
        </div>
       
      </div>
      <div className={styles.buttoncontainer}>
          <button className={styles.button}>Checkout</button>
        </div>
    </div>
  )
}

export default cart
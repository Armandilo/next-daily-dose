import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
const Navbar = () => {
 
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      </div>
      <div className={styles.logoContainer}>
      <div className={styles.item}>
        </div>
        <ul className = {styles.list}>
          <li className = {styles.listitem}><a href="javascript:window.location='/';">Home</a></li>
          <li className = {styles.listitem}>Order</li>
          <li className = {styles.listitem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className ={styles.cart}>
         <a href="cart"><Image src ="/img/shopping-cart.png" alt="" width="30" height="30"/></a> 
          
        </div>
        <div className = {styles.counter}>2</div>
      </div>
    </div>

  )
}

export default Navbar
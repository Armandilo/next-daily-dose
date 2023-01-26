import React from 'react'
import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
import { useSelector } from 'react-redux'
import Link from 'next/link'
const Navbar = () => {
 
  const quantity = useSelector(state=>state.cart.quantity);
  const handleCart = event => {
    if(quantity===0)
    {
      event.preventDefault();
      alert("No Items In Cart!");
    };
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      </div>
      <div className={styles.logoContainer}>
      <div className={styles.item}>
        </div>
        <ul className = {styles.list}>
          <li className = {styles.listitem}><Link href="/" passHref>All</Link></li>
          <li className = {styles.listitem}>Beverage</li>
          <li className = {styles.listitem}>Food</li>
        </ul>
      </div>
      <Link onClick={handleCart} href ="/cart" passHref>
      <div className={styles.item}>
        <div className ={styles.cart}>
         <Image src ="/img/shopping-cart.png" alt="" width="30" height="30"/>
          
        </div>
        <div className = {styles.counter}>{quantity}</div>
      </div>
      </Link>
    </div>

  )
}

export default Navbar
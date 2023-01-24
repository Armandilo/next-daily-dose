import React from 'react'
import styles from "../styles/OrderCard.module.css"
import Image from 'next/image'
import {FaTrashAlt} from 'react-icons/fa'

const CartCard = () => {
    const [checked, setChecked] = React.useState(false);
    const handleChange =() => {
        setChecked(!checked);
    }
  return(
    <div className = {styles.container}>
      <Image className = {styles.productimg} src="/img/coffee.png" alt="" width="50" height="50"/>
      <div className ={styles.productlist}>
        <h1 className={styles.title}>Ice Blended Cappucino</h1>
      </div>
      <span className={styles.quan}>x2</span>
      <div className={styles.status}>
        <input type="checkbox" checked ={checked} onChange ={handleChange} className={styles.inputquan} />
      </div>
    </div>
  )
}

export default CartCard
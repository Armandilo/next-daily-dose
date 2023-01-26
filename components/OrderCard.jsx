import React from 'react'
import styles from "../styles/OrderCard.module.css"
import Image from 'next/image'
import {FaTrashAlt} from 'react-icons/fa'
import axios from 'axios'

const OrderCard = ({orders}) => {
    const [checked, setChecked] = React.useState(false);

    const handleChange =() => {
        setChecked(!checked);
    };

  

    
  return(
    <div className = {styles.container}>
      <Image className = {styles.productimg} src={orders.image} alt="" width="50" height="50"/>
      <div className ={styles.productlist}>

        <h1 className={styles.title}>{orders.item_name}</h1>

      </div>
    
     
      <div className={styles.status}>
        <input type="checkbox" checked ={checked} onChange ={handleChange} className={styles.inputquan} />
      </div>
    </div>
  )
}

export default OrderCard
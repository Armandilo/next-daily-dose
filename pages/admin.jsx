import React from 'react'
import styles from "../styles/Order.module.css"
import OrderCard from '../components/OrderCard'
import axios from 'axios';
import OrderId from '../components/OrdersId';

const admin = ({orders}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.lists}>
          <a className={styles.itemname}>Orders</a>
          <a className={styles.status}>Status</a>
        </div>
        {orders.map(orders=>(
            <OrderId key={orders._id} orders={orders}/>
          ))}
       
      </div>
  
    </div>
  );
};

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/order");
  return{
    props:{
      orders: res.data,
    }
  };
};

export default admin
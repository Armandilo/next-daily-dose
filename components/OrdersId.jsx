import React from 'react';
import styles from '../styles/OrderId.module.css';
import OrderCard from '../components/OrderCard';


const OrdersId = ({orders}) => {
  return (
    <div className={styles.container}>
        <div className={styles.ordercontainer}>
            <a>ORDER ID: {orders._id}</a>
        </div>
        {orders.item.map(orders=>(
            <OrderCard key={orders._id} orders = {orders}/>
        ))}

    </div>
  )
}

export default OrdersId
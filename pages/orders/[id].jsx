import axios from 'axios';
import React from 'react';
import styles from '../../styles/recipt.module.css';

const Order = ({order}) => {
  return (
    <div className={styles.container}>
        <div className={styles.recipt}>
            <div className={styles.details}>
                <a>Thank You!</a>
                <br></br>

                <div className={styles.reciptcontainer}>
                <div className={styles.orderL}>
                    <a>Order ID</a>
                </div>
                <div className={styles.orderid}>
                    <a>{order._id}</a>
                </div>
                </div>
               

            </div>
            
        </div>
    </div>
  );
};

export const getServerSideProps = async ({params}) => {
    const res = await axios.get(`http://localhost:3000/api/order/${params.id}`);
    return{
        props: { order: res.data },
    };
};

export default Order;
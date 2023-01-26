import axios from 'axios';
import React from 'react';
import styles from '../../styles/recipt.module.css';
import absoluteUrl from 'next-absolute-url';


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

export const getServerSideProps = async (ctx) => {
    const id = ctx.params.id;
    const hostname = ctx.req.headers.host;
    const res = await axios.get("http://" + hostname + "/api/order/" + id);
    return{
        props: { order: res.data },
    };
};

export default Order;
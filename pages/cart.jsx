import React from 'react'
import styles from "../styles/cart.module.css"
import CartCard from '../components/CartCard'
import Navbar from '../components/Navbar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { PayPalScriptProvider,
        PayPalButtons,
        usePayPalScriptReducer} from '@paypal/react-paypal-js'
import axios from 'axios';
import {useRouter} from "next/router";
import {reset} from '../redux/cartSlice';
import { FaCommentsDollar } from 'react-icons/fa'



const cart = () => {
  const cart = useSelector(state=>state.cart);

  const amount = cart.total;
  const currency= "MYR";
  const style = {layout:"vertical", height:55 }
  const dispatch = useDispatch();
  
  const router = useRouter();
  const createOrder = async (data) =>{
    try{
      const res = await axios.post("http://localhost:3000/api/order", data)
      if(res.status === 201){
        dispatch(reset());
        router.push(`/orders/${res.data._id}`)
      }
    }catch(err){
      console.log(err);
    }
  }
  // Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);


  return (<>
          { (showSpinner && isPending) && <div className="spinner" /> }
          <PayPalButtons
              style={style}
              disabled={false}
              forceReRender={[amount, currency, style]}
              fundingSource={undefined}
              createOrder={(data, actions) => {
                  return actions.order
                      .create({
                          purchase_units: [
                              {
                                  amount: {
                                      currency_code: currency,
                                      value: amount,
                                  },
                              },
                          ],
                      })
                      .then((orderId) => {
                          // Your code here after create the order
                          return orderId;
                      });
              }}
              onApprove={function (data, actions) {
                  return actions.order.capture().then(function (details) {
                      // Your code here after capture the order
                      console.log(details);
                     
          
                      createOrder({
                        item : cart.products,
                        total: cart.total,
                      });
                  });
              }}
          />
      </>
  );
}

  return (
    
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.lists}>
          <a className={styles.itemname}>Item Name</a>
         
        </div>

        {cart.products.map(products=>(
        <CartCard key={products._id} products = {products} />
        ))}
        <div className={styles.listcontainer}>
          <div className={styles.totallist}>
            <a className={styles.total}>TOTAL</a>
            <a className={styles.totalprice}>RM&nbsp;&nbsp;&nbsp;{cart.total.toFixed(2)}</a>
          </div>
          <div className={styles.taxlist}>
            <a className={styles.tax}>TAX</a>
            <a className={styles.taxprice}>RM&nbsp;&nbsp;&nbsp;{(cart.total*0.02).toFixed(2)}</a>
          </div>
          <div className={styles.subtotallists}>
            <a className={styles.subtotal}>SUBTOTAL</a>
            <a className={styles.subtotalprice}>RM&nbsp;&nbsp;&nbsp;{(cart.total + cart.total*0.02).toFixed(2)}</a>
          </div>
        </div>
        
       
      </div>
      
      <div className={styles.buttoncontainer} style={{maxWidth:"750px", minHeight:"200px"}}>
          <PayPalScriptProvider
                options={{
                    "client-id": "AWh-6O1KyUiSTlqP5aq0EYETrpFx46IIvRhfIYjAlEodb-ccDY9V8qfo-puERBaHgbfmvq3zTxNog1Le",
                    components: "buttons",
                    currency: "MYR",
                    "disable-funding" : "credit,card,p24"
                }}
            >
				<ButtonWrapper
                    currency={currency}
                    showSpinner={false}
                />
			</PayPalScriptProvider>
        </div>
    </div>
  )
}

export default cart
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList'
import Navbar from '../components/Navbar'
import axios from 'axios'


const inter = Inter({ subsets: ['latin'] })

export default function Home({productList}) {
  return (
    <>
    
      <Head>
        <title>Daily Dose</title>
        <meta name="description" content="Best in USM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
     
      <ProductList productList={productList}/>
  
    </>
  )
}

export const getServerSideProps = async () =>{
  const res = await axios.get("https://next-daily-dose.vercel.app/api/product");
  return{
    props:{
      productList: res.data,
    }
  }
}

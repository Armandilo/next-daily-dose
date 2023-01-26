import React from 'react'
import Image from 'next/image'
import styles from "../styles/Footer.module.css"
import { FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.media}>
          <a href='https://api.whatsapp.com/send/?phone=60103883838' target='_blank'><FaWhatsapp /> </a>
          <a><FaInstagram /> </a>
          <a href='https://ms-my.facebook.com/dailydosecafe.usm/' target='_blank'><FaFacebook /> </a>
        </div>
        <div className={styles.copyright}>
          Copyright © Daily Dose
        </div>
      </div>
    </footer>

  )
}

export default Footer
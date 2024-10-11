import React from 'react';
import styles from "./Footer.module.css";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className={`p-3 card card-footer ${styles['ftr']}`}>
      <div className='d-flex flex-wrap justify-content-between mx-5'>
        <p className='h4'>Copyright @2024</p>
            <div>
                <p className="h4">Follow us on social media:</p>
                    <FaWhatsapp  className={`ms-3 ${styles['socialMediaLogo']}`} size={32} />
                    <FaFacebook  className={`ms-3 ${styles['socialMediaLogo']}`} size={32} />
                    <FaInstagram  className={`ms-3 ${styles['socialMediaLogo']}`} size={32} />
                    <FaTwitter  className={`ms-3 ${styles['socialMediaLogo']}`} size={32} />
            </div>
        </div>
    </footer>
  );
}

export default Footer;
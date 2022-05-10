import React from "react";
import Styles from './Footer.module.css'
function Footer() {
  return (
    <div className={Styles.footer}>
      <span>
        تلفن مرکز پشتیبانی : 75492000 - 21 (98+) ساعت پاسخگویی : شنبه الی
        چهارشنبه ساعت ٨ الی ١٦:٣٠ و پنجشنبه ها ساعت ٨ الی ١٤
      </span>
      <span>ارتباط با مدیر سامانه : admin@ntsw.ir</span>
      <span>کلیه حقوق این سامانه برای وزارت صنعت، معدن و تجارت محفوظ است.</span>
    </div>
  );
}

export default Footer;

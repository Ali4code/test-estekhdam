import React from 'react'
import Styles from './RowMenu.module.css'
function RowMenu() {
  return (
      
    <div className={Styles.row}>
        <div className={Styles.item}>ثبت نام</div>
        <div className={Styles.item}>ورود</div>
        <div className={Styles.item}>سوالات متداول</div>
        <div className={Styles.item}>استعلامات</div>
        <div className={Styles.item}>مستندات</div>
        <div className={Styles.item}>فیلم های اموزشی</div>
        <div className={Styles.item}>خدمات عمومی</div>
        <div className={Styles.item}>زیر سامانه ها</div>
        <div className={Styles.item}>صفحه اصلی</div>
    </div>
  )
}

export default RowMenu
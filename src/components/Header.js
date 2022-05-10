import React from 'react'
import Styles from './Header.module.css'
function Header() {
  return (
    <header className={Styles.header}>

        <img className={Styles.img} src='https://www.ntsw.ir/assets/img/m1.png'/>
        <img className={Styles.img} src='https://www.ntsw.ir/assets/img/header-title.png'/>
        <img className={Styles.img} src='https://www.ntsw.ir/assets/img/logo11.png'/>

    </header>
  )
}

export default Header
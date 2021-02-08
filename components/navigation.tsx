import React from 'react'
import styles from '../styles/index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faGift } from '@fortawesome/free-solid-svg-icons'



function navigation() {
    return (
       <header className={styles.appHeader}>
           <div></div>
     
      <div className={styles.notificationArea}>
        <div><FontAwesomeIcon icon={faBell} /></div>
        <div><FontAwesomeIcon icon={faGift} /></div>
        <div>Avarta</div>

      </div>
    </header>
    )
}

export default navigation

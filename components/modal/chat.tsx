import React from 'react'
import styles from '../../styles/modal.module.css'

function chat() {
    return (
        <div className={styles.QuickChat}>
            <div className={styles.chatHeader}><div>Avatar</div> send us a message</div>
            <div className={styles.emailBody}>
                email
            </div>
            <div><input type='text' /><span><button>Send</button></span></div>
        </div>
    )
}

export default chat

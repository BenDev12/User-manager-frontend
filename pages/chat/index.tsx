import React from 'react'
import styles from '../../styles/modal.module.css'
import Chat from '../../components/modal/chat'

function index() {
    const [show, setShow] =React.useState(false)
    return (
        <div>
        {show && <Chat/>}
        <div onClick={()=>setShow(!show)} className={styles.chatModal}>  
        <div className={styles.innerBox}>
            <div className={styles.line}></div>
           <div className={styles.line2}></div>
        </div>
            
        </div>
         </div>
    )
}

export default index

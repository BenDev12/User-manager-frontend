import { faCogs, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../../styles/modal.module.css'
import Router from 'next/router'


function profile() {
    return (
        <div className={styles.profileModal}>
            <div><FontAwesomeIcon icon={faUser}/>{"  "}<span>Account</span></div>
            <div>
                <FontAwesomeIcon icon={faCogs} />{"  "}<span>Settings</span>
            </div>
                <div onClick={()=>Router.push('/')}>
                <FontAwesomeIcon icon={faSignOutAlt} />{"  "}<span>Log out</span>
                </div>
                
        </div>
    )
}

export default profile

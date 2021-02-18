import React from 'react'
import styles from '../../styles/doc.module.css'
import Link from 'next/link'

function index() {
    return (
        <div className={styles.docBody}>
        <div className={styles.pageNav}> 
         <h3><Link href='/'><a>U R M Documentation</a></Link></h3>
            <div className={styles.navItem}>
                <Link href='/'><a>Documentation</a></Link>
                 <Link href='/'><a>Developer</a></Link>
                 <Link href='/'><a>Tutorials</a></Link>
                 <Link href='/'><a>Resources</a></Link>
             </div>
         </div>
         <div className={styles.documentArea}>

             <h1>
                Here is our Guid to help you get started
             </h1>
         </div>
        </div>
    )
}

export default index

import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import Footer from './footer'
import Navigation from './navigation'
import Chat from '../pages/chat/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faFileExcel, faHome, faInbox,  faTasks,  faUsers } from '@fortawesome/free-solid-svg-icons'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.body}>
    <Chat />
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className={styles.sideNav}>
      <div className={styles.logo}><p>B</p></div>
      <div className={styles.lowerSection}>
       <div className={styles.navItem}>
        <Link href={'/dashboard'} ><a><FontAwesomeIcon icon={faHome} /></a></Link>
      </div>
       <div className={styles.navItem}>
        <Link href={'/Inbox'} ><a><FontAwesomeIcon icon={faInbox} /></a></Link>
      </div>
       <div className={styles.navItem}>
        <Link href={'/projects'} ><a><FontAwesomeIcon icon={faTasks} /></a></Link>
      </div>
       <div className={styles.navItem}>
        <Link href={'/team'} ><a><FontAwesomeIcon icon={faUsers} /></a></Link>
      </div>
       <div className={styles.navItem}>
        <Link href={'/reports'} ><a><FontAwesomeIcon icon={faFileExcel} /></a></Link>
      </div>
       <div className={styles.navItem}>
        <Link href={'/settings'} ><a><FontAwesomeIcon icon={faCog} /></a></Link>
      </div>
      </div>
     
    </div>

 <div className={styles.main}>
   <Navigation />
   <div className={styles.container}>
 {children}
   </div>
   
    <Footer />

  
   </div>
   
   
  </div>
)

export default Layout

import React from 'react'
// import Layout from '../components/Layout'
import Router from 'next/router'
import styles from '../styles/landing.module.css'
import Link from 'next/link'
// import Button from '@/ui/button'
import Input from '../components/ui/input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTelegramPlane } from '@fortawesome/free-brands-svg-icons'


function index() {
  return (
     <div className={styles.Home}>
       <div className={styles.homeUpper}>
         <div className={styles.langToggle}>
           <div className={styles.toggleNav}>
             <Link href='/'><a>Sign in</a></Link>
             <Link href='/'><a>Product support</a></Link>
             <Link href='/'><a>company</a></Link>
             <Link href='/'><a>contact us</a></Link>
             <Link href='/'><a>English</a></Link>
           </div>
         </div>
      <div className={styles.navigation}> 
       <h3>User Repository Manager</h3>
       <div className={styles.navItem}>
         <Link href='/'><a>Products</a></Link>
         <Link href='/'><a>Solutions</a></Link>
         <Link href='/'><a>Pricing</a></Link>
         <Link href='/'><a>Demo</a></Link>
         <Link href='/'><a>Services</a></Link>
         <Link href='/'><a>Resources</a></Link>
       </div>
       <div>
           <button className={styles.signUp} onClick={()=>Router.push('/authentication/login')}>Get started</button>

       </div>
      </div>
       {/* <h2>Join the waiting list</h2> */}
       <div className={styles.upperContainer}>
         <div className={styles.leftSection}>
           <h1>
             Manage all your projects and users on one Platform.
             over 10+ tools and resources will enable you get 
             your projects done with less Hustle
           </h1>
           <p>Achieve your weekely targets, stay intouch with your team and get timely updates 
             on your project progress
           </p>
           <div className={styles.call_to_action}>
           <button className={styles.signUp} onClick={()=>Router.push('/authentication/signup')}>sign up</button>
           <button className={styles.signUp} onClick={()=>Router.push('/documentation')}>Learn more</button>
           </div>
         </div>
     
      <div className={styles.rightSection}>
        {/* <img src='../public/static/icons/undraw_project_completed_w0oq.png' /> */}
        </div>
       </div>
   </div>
   <div className={styles.partners}>
     <div className={styles.Subscribe}>
       <div>
       <h1>Join the waiting list</h1>
       </div>
       <div className={styles.email}>
        < Input type='email' palceholder='johndoe@example.com' /><span><button className={styles.signUp}>
          <FontAwesomeIcon icon={faTelegramPlane}  />{" "}<span>Send..</span></button></span>
       </div>
        </div>
     <div className={styles.appStore}>
       <p>Download the app from</p>
       <div>Andriod | iOS</div>
     </div>
   </div>
   <div className={styles.QuickSupport}>Get Help?</div>
     <div className={styles.copyright}>
         <p>{'Copyright © '}
      {/* <Link href="https://benard.com/"> */}
      u r m {' '}
      {/* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
      </p>
     </div>
     </div>
  )
}

export default index

import React from 'react'
// import Layout from '../components/Layout'
import Router from 'next/router'
import styles from '../styles/landing.module.css'


function index() {
  return (
     <div className={styles.Home}>
      
       <h1>User Repository Manager</h1>
       {/* <h2>Join the waiting list</h2> */}
     <button className={styles.signUp} onClick={()=>Router.push('/dashboard')}>Get started</button>
   
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

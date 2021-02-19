import  Router  from "next/router";
import React from "react";
import Link from "next/link";
import styles from '../../styles/auth.module.css'

function signup() {
  return <div className={styles.signup}>
    <div className={styles.signupContainer}>
      <div className={styles.imageArea}>
        <h1>WELCOME TO URM</h1>
        <button className={styles.buttonz}  onClick={()=>Router.push('/')}>Back Home</button>
      </div>
      <div className={styles.formArea}>
        <h3>
        Hello from sign Up
        </h3>
        <button className={styles.buttonz} onClick={()=>Router.push('/dashboard')}>Sign up</button>
        <div>Already have an account? <Link href='/authentication/login'><a>Log in</a></Link></div>

        </div>
       

    
    </div>
  


  </div>;
}

export default signup;

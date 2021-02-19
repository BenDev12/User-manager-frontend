import React from "react";
import  Router  from "next/router";
import styles from '../../styles/auth.module.css'
import Link from "next/link";


function login() {
  return <div className={styles.signup}>
      <div className={styles.signupContainer}>
      <div className={styles.imageArea}>
        <h1>WELCOME TO URM</h1>
        <button className={styles.buttonz}  onClick={()=>Router.push('/')}>Back Home</button>
      </div>
      <div className={styles.formArea}>
        <h3>
       Welcome Back, Please login 
        </h3>
        <button className={styles.buttonz} onClick={()=>Router.push('/dashboard')}>Login</button>

        <div>Don't have an account? <Link href='/authentication/signup'><a>Sign up</a></Link></div>
        </div>
    </div>

  </div>;
}

export default login;

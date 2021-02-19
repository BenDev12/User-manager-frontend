import React from "react";
import  Router  from "next/router";
import styles from '../../styles/auth.module.css'
import Link from "next/link";
import { Checkbox, Input, InputLabel } from "@material-ui/core";


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
        <form className={styles.loginForm}>
          <div>Logo</div>
          <div className={styles.emailLogin}>
            <InputLabel>Email</InputLabel>
        <Input type='email' placeholder='example@email.com' />
            <InputLabel>Password</InputLabel>
        <Input type='password' placeholder='password' />
          </div>
          <div className={styles.rememberSection}>
            <div>
              <Checkbox />
              <span> Rember me forgot password</span>
            </div>
            <div>Forgot password?</div>
           
            </div>
       <div>
        <button className={styles.buttonz} onClick={()=>Router.push('/dashboard')}>Login</button>
       </div>
        <div className={styles.socialAuths}>
                <button className={styles.buttonz} onClick={()=>Router.push('/dashboard')}>Google</button>
        <button className={styles.buttonz} onClick={()=>Router.push('/dashboard')}>Slack</button>

        </div>
        </form>
        <div>Don't have an account? <Link href='/authentication/signup'><a>Sign up</a></Link></div>
        </div>
    </div>

  </div>;
}

export default login;

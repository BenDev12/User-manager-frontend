import React from 'react'
import styles from '../../styles/dashboard.module.css'
import Layout from '../Layout'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBook, faFilter } from '@fortawesome/free-solid-svg-icons'


function index(props: { children: React.ReactNode }) {
    <Head>
      <title>Dashboard</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    return (
        <Layout>
        <div className={styles.mainContainer}>
            <div className={styles.dashboardNav}>
                <div className={styles.navigation}>
                    <div className={styles.navItems}>
                <div className={styles.navigationItem}>Tools</div>
                <div className={styles.navigationItem}>Boards</div>
                    </div>
                
                </div>
            </div>
            <div className={styles.filterContainer}>
            <div className={styles.filterSection}>
                <div className={styles.filterNav}>
                <div className={styles.filterButton}>
                    <FontAwesomeIcon icon={faFilter} /><span>Filter</span>
                </div>
                <div className={styles.userGuide}>
                    <FontAwesomeIcon icon={faBook} style={{fontSize:20}} /><span style={{fontSize:14}}>User Guide</span>
                </div>
                </div>
                
            </div>
            </div>
            {props.children}
        </div>
        </Layout>
    )
}

export default index

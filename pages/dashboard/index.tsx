import {  faBusinessTime, faComments, faDotCircle, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import Layout from '../../components/Layout'
import Dashboard from '../../components/dashboard'
import styles from '../../styles/dashboard.module.css'


function index() {
    return (
        <Dashboard>
        <div className={styles.dashboardContainer}>
         <div className={styles.analytics}>
             <div className={styles.analyticsContainer}> 
             <div className={styles.containerHead}><div><span><FontAwesomeIcon icon={faUsers} /></span>{"  "}Agents</div></div>
             <div className={styles.containerBody}>
                 
                 <div></div>
                 <div></div>
                 </div>   
                 
             </div>
             <div className={styles.analyticsContainer}>
             <div className={styles.containerHead}>
                 <div><FontAwesomeIcon icon={faComments} />{"  "}Team inbox</div>
                 
                 </div>
                 <div className={styles.containerBody}>
                 <div></div>
                 <div></div>
                 <div></div>
                 </div>
             </div>
             <div className={styles.analyticsContainer}>
             <div className={styles.containerHead}>
                 <div>
                     <FontAwesomeIcon icon={faBusinessTime} />{"  "} Response speed
                 </div>
                
             <select className={styles.selectionArea}>
                 <option>Median</option>
             </select>
                 </div>
                 <div className={styles.containerBody}>
                 <div></div>
                 <div></div>
                 <div></div>
                 </div>
             </div>
         </div>
         <div className={styles.projectData}>
            <div className={styles.customerSatisfaction}>
                <div className={styles.heading}>Project Completion
                <div className={styles.subHeading}>Avarage completion rates against set time</div>
                </div>
            </div>
            <div className={styles.incomingProjects}>
                <div className={styles.heading}>Team performance
                <div className={styles.weekely}>
                    <div><span><FontAwesomeIcon icon={faDotCircle} /></span>Today</div> 
                    <div><span><FontAwesomeIcon icon={faDotCircle} /></span>Last week</div>
                </div>
                </div>
                <div className={styles.chartArea}>Chart will go here</div>
            </div>
         </div>
         <div className={styles.reccommedationArea}>
        <div className={styles.reccomendation}>Hello</div>
        <div className={styles.reccomendation}>There</div>
         </div>
        </div>
        </Dashboard>
        
    )
}

export default index

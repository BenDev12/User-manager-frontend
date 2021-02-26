import {  faBusinessTime,  faClock, faComments, faDotCircle, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
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
             <div className={styles.containerHead}><div><span><FontAwesomeIcon icon={faClock} /></span>{"  "}Recent boards</div></div>
             <div className={styles.containerBody}>
                 
                 <div className={styles.recentContainer}>
                     <Link href='/'><a>
                     <span><FontAwesomeIcon style={{color:"#730877", fontSize:15}} icon={faHashtag}/></span>Video chat board

                         </a></Link>
                     </div>
                 <div className={styles.recentContainer}>
                     <Link href='/'><a>

                     <span><FontAwesomeIcon style={{color:"#730877", fontSize:15}} icon={faHashtag}/></span>General board
                         </a></Link>

                     </div>
                 <div className={styles.recentContainer}>
                     <Link href='/'><a>

                     <span><FontAwesomeIcon style={{color:"#730877", fontSize:15}} icon={faHashtag}/></span>Chat board
                         </a></Link>

                     </div>

                
                 </div>   
                 
             </div>
             <div className={styles.analyticsContainer}>
             <div className={styles.containerHead}>
                 <div><FontAwesomeIcon icon={faComments} />{"  "}Team inbox</div>
                 
                 </div>
                 <div className={styles.containerBody}>
                 <div className={styles.messageContainer}>New messages
                 <p style={{color:"#f7491d"}}>0</p></div>
                 <div className={styles.messageContainer}>replied
                 <p style={{color:"#ccfa4d"}}>0</p></div>
                 <div className={styles.messageContainer}>sent
                 <p style={{color:"#2899f5"}}>0</p></div>
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
        <div className={styles.myreccomendation}>
        <div className={styles.myHead}>My plan-This week</div>
            <div className={styles.myPlan}> No cards</div>
            <div className={styles.myPlandDue}><span style={{padding:15}}><FontAwesomeIcon style={{fontSize:25}} icon={faClock} /></span>No cards due this week</div>
        </div>
        <div className={styles.Teamreccomendation}>
            <div className={styles.teamHead}>Team plan-This week</div>
            <div className={styles.teamPlan}> No cards</div>
            <div className={styles.teamPlandDue}><span style={{padding:15}}><FontAwesomeIcon style={{fontSize:25}} icon={faClock} /></span>No cards due this week</div>
        </div>
         </div>
        </div>
        </Dashboard>
        
    )
}

export default index

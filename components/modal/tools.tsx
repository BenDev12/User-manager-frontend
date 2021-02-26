import { faBimobject, faBuysellads, faDochub, faWikipediaW } from '@fortawesome/free-brands-svg-icons'
import { faBook, faBriefcase, faBullhorn, faBullseye, faCalendarCheck, faCalendarPlus, faCheckSquare, faCommentAlt, faFutbol, faHammer, faPoll, faProjectDiagram, faStickyNote, faStopwatch, faTable, faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from '../../styles/modal.module.css'

function tools() {
    return (
        <div className={styles.toolModal}>
            <div className={styles.toolsPallet}>

            
            <div className={styles.toolCards}>
                <div className={styles.toolcardHeading}>
                    PROJECT TOOLS
                    </div>
                    <div className={styles.toolcardBody}>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faStickyNote} />{"  "}<span>Project plan</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faDochub} />{"  "}<span>Project Canvas</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faCalendarPlus} />{"  "}<span>Project Board</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faCalendarCheck} />{"  "}<span>Project plan</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faCheckSquare} />{"  "}<span>Project results</span>
                        </div>
                        
                        </div>
                        </div>
            <div className={styles.toolCards}>
                <div className={styles.toolcardHeading}>
                    PLANNING TOOLS
                    </div>
                    <div className={styles.toolcardBody}>
                        
                       <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faStickyNote} />{"  "}<span>To do</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faBriefcase} />{"  "}<span>Assign Board</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faProjectDiagram} />{"  "}<span>Priotize board</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faHammer} />{"  "}<span>Action plan</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faBullseye} />{"  "}<span>Sprint board</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faFutbol} />{"  "}<span>Status Table</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faTable} />{"  "}<span>Planning Table</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faStopwatch} />{"  "}<span>Timeline</span>
                        </div>
                        </div>
                        </div>
            <div className={styles.toolCards}>
                <div className={styles.toolcardHeading}>
                    TRACKING TOOLS
                    </div>
                    <div className={styles.toolcardBody}>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faBuysellads} />{"  "}<span>Activity</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faBriefcase} />{"  "}<span>Tracker</span>
                        </div>
                        </div>
                        </div>
            <div className={styles.toolCards}>
                <div className={styles.toolcardHeading}>
                    COMMUNICATION TOOLS
                    </div>
                    <div className={styles.toolcardBody}>
                        
                      <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faCommentAlt} />{"   "}<span>Chat</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faVideo} />{"   "}<span>Video Chat</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faBullhorn} />{"   "}<span>Message board</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faPoll} />{"   "}<span>Live Feed</span>
                        </div>
                        </div>
                        </div>
            <div className={styles.toolCards}>
                <div className={styles.toolcardHeading}>
                    DOCUMENTATION TOOLS
                    </div>
                    <div className={styles.toolcardBody}>
                        
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faBimobject} />{"  "}<span>Notes</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faWikipediaW} />{"   "}<span>Wiki</span>
                        </div>
                        <div className={styles.toolItems}>
                            <FontAwesomeIcon icon={faBook} />{"   "}<span>Guide</span>
                        </div>
                        
                        </div>
                        </div>



            </div>
        </div>
    )
}

export default tools

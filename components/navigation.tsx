import React from 'react'
import styles from '../styles/index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faBell, faGift } from '@fortawesome/free-solid-svg-icons'
import {Avatar} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Profile from './modal/profile'

// import { title } from 'process'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    }
  }),
);

type Props = {
  title?: string
  name?: String
}

function navigation({name}: Props) {
  const [show, setShow]= React.useState(false)
   const classes = useStyles();
    return (
       <header className={styles.appHeader}>
           <div>{name}</div>
           {show && <Profile /> }
      <div className={styles.notificationArea}>
        <div><FontAwesomeIcon icon={faBell} /></div>
        <div><FontAwesomeIcon icon={faGift} /></div>
        <div><Avatar alt="Remy Sharp" src="/static/images/avatar/ben.jpg" className={classes.small} />{"   "}
        <span style={{cursor:'pointer'}}>
          <FontAwesomeIcon icon={faAngleDown} onClick={()=>setShow(!show)} />
        </span>
        </div> 

      </div>
    </header>
    )
}

export default navigation

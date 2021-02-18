import React from 'react'
import styles from '../../../styles/ui.module.css'

type props={
    children?:string
    type?:string
    palceholder?:string
}

function index({children}:props):JSX.Element {
    return (
        <input className={styles.input}>
            {children}
        </input>
    )
}

export default index

import React from 'react'
// import Link from 'next/link'
import styles from "../styles/footer.module.css"

function footer() {
    return (
        <footer className={styles.footer}>
      <p>{'Copyright © '}
      {/* <Link href="https://benard.com/"> */}
      u r m {' '}
      {/* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
      </p>
    </footer>
    )
}

export default footer

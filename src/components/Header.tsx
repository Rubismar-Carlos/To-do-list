import React from 'react'

import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>TAREFAS</h1>
        <p>Com react e typescript.</p>
    </header>
  )
}

export default Header
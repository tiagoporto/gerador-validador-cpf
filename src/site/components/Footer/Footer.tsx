import styles from './Footer.module.styl'
import React, { FC } from 'react'

export const Footer: FC = () => {
  const date = new Date()
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2014 - {date.getFullYear()} Tiago Porto</p>
    </footer>
  )
}

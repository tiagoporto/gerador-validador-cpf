import styles from './Footer.module.scss'

export const Footer = () => {
  const date = new Date()
  return (
    <footer className={styles.footer}>
      <p>© 2014-{date.getFullYear()} | Tiago Porto</p>
    </footer>
  )
}

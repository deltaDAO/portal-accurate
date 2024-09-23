import { ReactElement } from 'react'
import styles from './index.module.css'

export default function Logo(): ReactElement {
  return (
    <img
      className={styles.logo}
      alt="Accurate Logo"
      src="/images/accurate-logo.webp"
    />
  )
}

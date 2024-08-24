import { ReactElement } from 'react'
import styles from './StepHeader.module.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function StepHeader({
  title,
  subtitle
}: {
  title: string
  subtitle: string
}): ReactElement {
  return (
    <div className={styles.header}>
      <div className={cx({ underlinedTitle: true })}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <h5 className={styles.subtitle}>{subtitle}</h5>
    </div>
  )
}

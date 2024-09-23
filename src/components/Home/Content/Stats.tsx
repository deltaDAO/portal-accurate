import { ReactElement } from 'react'
import styles from './Stats.module.css'
import Container from '../../@shared/atoms/Container'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export default function Stats({
  content
}: {
  content: { label: string; value: number }[]
}): ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className={cx({ underlinedTitle: true })}>
        <h2>Key Data</h2>
      </div>
      <Container className={styles.container}>
        <div className={styles.content}>
          {content &&
            content.map((stat) => (
              <div className={styles.stat} key={`stat_item_${stat.label}`}>
                <h4>{stat.value}</h4>
                <span>{stat.label}</span>
              </div>
            ))}
        </div>
      </Container>
    </div>
  )
}

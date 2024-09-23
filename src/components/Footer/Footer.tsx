import { ReactElement } from 'react'
import styles from './Footer.module.css'
import Markdown from '@shared/Markdown'
import Links from './Links'
import { useMarketMetadata } from '@context/MarketMetadata'
import Container from '@components/@shared/atoms/Container'

export default function Footer(): ReactElement {
  const { siteContent } = useMarketMetadata()
  const { siteTitle, footer } = siteContent
  const { copyright, notice } = footer

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div>
          <p className={styles.siteTitle}>{siteTitle}</p>
          <div className={styles.main}>
            <img
              className={styles.logo}
              alt={`Logo`}
              src={`/images/eu-funded.webp`}
            />
            <Markdown className={styles.notice} text={notice} />
          </div>
        </div>
        <Links />
      </Container>
      <div className={styles.copyright}>
        <Markdown text={copyright} />
      </div>
    </footer>
  )
}

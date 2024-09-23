import { ReactElement } from 'react'
import styles from './index.module.css'
import classNames from 'classnames/bind'
import content from '../../../../content/pages/home/content.json'
import Markdown from '@components/@shared/Markdown'
import Button from '@components/@shared/atoms/Button'
import InteractiveModalImage from '@components/@shared/atoms/InteractiveModalImage'
import Stats from './Stats'

const cx = classNames.bind(styles)

interface HomeContentData {
  teaser: {
    title: string
    tagline: string
  }
  paragraphs: {
    title: string
    body: string
    cta: string
    ctaTo: string
    image?: string
  }[]
  stats: {
    label: string
    value: number
  }[]
}

export default function HomeContent(): ReactElement {
  const { paragraphs, teaser, stats }: HomeContentData = content

  return (
    <div className={styles.container}>
      <div className={styles.paragraphs}>
        {paragraphs.map((paragraph, i) => (
          <div
            key={paragraph.title}
            className={
              i % 2 === 0
                ? cx({ paragraph: true, mirror: true })
                : styles.paragraph
            }
          >
            <div className={styles.interactivity}>
              {paragraph.image && (
                <InteractiveModalImage
                  src={paragraph.image}
                  alt={paragraph.title}
                />
              )}
            </div>

            <div className={styles.content}>
              <h3>{paragraph.title}</h3>
              <Markdown text={paragraph.body} />
              <Button href={paragraph.ctaTo} style="primary">
                {paragraph.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Stats content={stats} />
    </div>
  )
}

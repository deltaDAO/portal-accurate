import { ReactElement } from 'react'
import classNames from 'classnames/bind'
import styles from './PageHeader.module.css'
import Markdown from '@shared/Markdown'
import SearchBar from '@components/Header/SearchBar'
import Container from '../atoms/Container'

const cx = classNames.bind(styles)

export default function PageHeader({
  title,
  center,
  description,
  isHome,
  showSearch,
  underlinedTitle
}: {
  title: string | ReactElement
  center?: boolean
  description?: string
  isHome?: boolean
  showSearch?: boolean
  underlinedTitle?: boolean
}): ReactElement {
  const styleClasses = cx({
    header: true,
    center,
    underlinedTitle
  })

  return (
    <header className={styleClasses}>
      <Container className={isHome && styles.homeTitleContainer}>
        <h1 className={styles.title}>{title}</h1>
        {description && (
          <Markdown text={description} className={styles.description} />
        )}
        {showSearch && (
          <div className={styles.search}>
            <SearchBar placeholder="Search for service offerings" />
          </div>
        )}
      </Container>
    </header>
  )
}

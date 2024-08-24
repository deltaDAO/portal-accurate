import { ReactElement } from 'react'
import styles from './index.module.css'
import { Carousel } from '@components/@shared/Carousel'
import Container from '@components/@shared/atoms/Container'
import Button from '@components/@shared/atoms/Button'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const ProjectPartners = (): ReactElement => {
  const projectPartnersList = require
    .context(
      '../../../../public/images/projectPartners',
      false,
      /\.(png|jpe?g|webp)$/
    )
    .keys()
    .filter((e) => e.startsWith('./'))
    .map((x) => x.replace('./', ''))
    .sort()

  return (
    <div className={styles.wrapper}>
      <div className={cx({ underlinedTitle: true })}>
        <h3 className={styles.title}>These partners work with us</h3>
      </div>
      <Container className={styles.container}>
        <Carousel show={4}>
          {projectPartnersList.map((logo) => (
            <div key={logo} className={styles.logoContainer}>
              <img
                src={`/images/projectPartners/${logo}`}
                className={`${styles.logo} ${
                  logo.endsWith('.webp') ? '' : styles.whiteLogo
                }`}
                alt="Partner logo"
              />
            </div>
          ))}
        </Carousel>

        <div className={styles.footer}>
          <Button
            style="text"
            href="https://accurateproject.eu/partners"
            target="_blank"
            rel="noopener noreferrer"
          >
            All project partners
          </Button>
        </div>
      </Container>
    </div>
  )
}

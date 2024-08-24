import classNames from 'classnames/bind'
import { ReactElement, TouchEvent, useEffect, useState } from 'react'
import styles from './index.module.css'

const cx = classNames.bind(styles)

export const Carousel = ({
  children,
  show = 1,
  infiniteLoop,
  autoScroll
}: {
  children: ReactElement[]
  show?: 1 | 2 | 3 | 4
  infiniteLoop?: boolean
  autoScroll?: boolean
}): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(infiniteLoop ? show : 0)
  const [length, setLength] = useState(children.length)

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.length > show
  )
  const [transitionEnabled, setTransitionEnabled] = useState(true)

  const [touchPosition, setTouchPosition] = useState<number | null>(null)

  let autoScrollTimeout = 0

  useEffect(() => {
    setLength(children.length)
    setIsRepeating(infiniteLoop && children.length > show)
  }, [children, infiniteLoop, show])

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true)
      }
    }
  }, [currentIndex, isRepeating, show, length])

  const next = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const prev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  useEffect(() => {
    if (!autoScroll) return

    clearTimeout(autoScrollTimeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    autoScrollTimeout = window.setTimeout(() => next(), 3000)
    return () => {
      clearTimeout(autoScrollTimeout)
    }
  }, [currentIndex])

  const handleTouchStart = (e: TouchEvent) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e: TouchEvent) => {
    const touchDown = touchPosition

    if (touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX
    const diff = touchDown - currentTouch

    if (diff > 5) {
      next()
    }

    if (diff < -5) {
      prev()
    }

    setTouchPosition(null)
  }

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false)
        setCurrentIndex(length)
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false)
        setCurrentIndex(show)
      }
    }
  }

  const renderExtraPrev = () => {
    const output = []
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index])
    }
    output.reverse()
    return output
  }

  const renderExtraNext = () => {
    const output = []
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < show; index++) {
      output.push(children[index])
    }
    return output
  }

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        {(isRepeating || currentIndex > 0) && (
          <button onClick={prev} className={styles.leftArrow}>
            &lt;
          </button>
        )}
        <div
          className={styles.carouselContentWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={cx({ carouselContent: true, [`show${show}`]: true })}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderExtraPrev()}
            {children}
            {length > show && isRepeating && renderExtraNext()}
          </div>
        </div>
        {(isRepeating || currentIndex < length - show) && (
          <button onClick={next} className={styles.rightArrow}>
            &gt;
          </button>
        )}
      </div>
    </div>
  )
}

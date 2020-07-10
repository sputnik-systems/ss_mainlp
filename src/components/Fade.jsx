import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  opacity: 0;
  transition: opacity 3s cubic-bezier(0.19, 1, 0.22, 1);

  &.loaded {
    opacity: 1;
  }
`

const Fade = ({ unmount, vertical = false, children, ...props }) => {
  const ref = useRef()
  const observer = useRef()
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry

          if (isIntersecting) {
            ref.current.classList.add('loaded')
          } else {
            if (unmount) ref.current.classList.remove('loaded')
          }
        })
      },
      {
        rootMargin: vertical ? '0px 0px 0px 0px' : '0px -200px 0px 0px',
        // rootMargin: '0px 0px -700px 0px',
      },
    )
    observer.current.observe(ref.current)

    return () => observer.current.disconnect()
  }, [unmount, vertical])

  return (
    <Wrapper
      style={{ display: 'inherit', flexDirection: 'inherit' }}
      ref={ref}
      {...props}
    >
      {children}
    </Wrapper>
  )
}

export default Fade

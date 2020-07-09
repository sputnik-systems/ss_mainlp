import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { UilTimes } from '@iconscout/react-unicons'
import useHotkeys from '@reecelucas/react-use-hotkeys'
import { motion, AnimatePresence } from 'framer-motion'

import IconButton from 'components/IconButton'
import Text from 'components/Text'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Backdrop = styled.div`
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  background: var(--color-blurred-background);

  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalBody = styled.div`
  --close-button-size: 3.5rem;

  position: relative;
  min-width: 200px;

  background: var(--color-background);
  z-index: 100;
  border-radius: var(--br-l);
  box-shadow: var(--shadow-strong);
  padding: var(--spacing-l);
`

const CloseButton = styled(IconButton)`
  /* position: fixed;
  z-index: 1000; */
  position: absolute;
  top: var(--spacing-l);
  left: var(--spacing-l);
  width: var(--close-button-size);
  height: var(--close-button-size);
  transform-origin: 50% 50%;
  color: rgba(0, 0, 0, 0.54);
  /* border-width: 1px;
  border-style: solid;
  border-color: rgb(206, 213, 219); */

  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0s;

  /* &::before {
    opacity: 1;
  } */
`

const spring = {
  type: 'spring',
  damping: 50,
  stiffness: 50,
  velocity: 1,
}

const backdropVariants = {
  hidden: { backdropFilter: 'blur(0px)  saturate(100%)' },
  in: {
    backdropFilter: 'blur(20px) saturate(180%)',
    transition: {
      duration: 1.5,
    },
  },
}

const bodyVariants = {
  hidden: { opacity: 0 },
  in: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      damping: 100,
      stiffness: 100,
      velocity: 5,
    },
  },
}

const buttonVariants = {
  hidden: { opacity: 0 },
  in: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      type: 'spring',
      damping: 50,
      stiffness: 50,
      velocity: 1,
    },
  },
}

const childrenVariants = {
  hidden: { height: 0, opacity: 0 },
  in: {
    height: 'auto',
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      type: 'spring',
    },
  },
}

const Children = styled.div``

// usePresense
function ModalContent({
  title,
  disableBackdropClick,
  onClose,
  children,
  ...props
}) {
  useHotkeys('Escape', onClose)

  return (
    <ModalWrapper>
      <Backdrop
        variants={backdropVariants}
        initial="hidden"
        animate="in"
        as={motion.div}
        onClick={!disableBackdropClick && onClose}
      >
        <ModalBody as={motion.div} variants={bodyVariants} {...props}>
          <CloseButton
            as={motion.button}
            variants={buttonVariants}
            onClick={onClose}
          >
            <UilTimes />
          </CloseButton>
          {Boolean(title) && (
            <Text
              textAlign="center"
              variant="h5"
              style={{
                padding: 'var(--spacing-xs) calc(var(--spacing-l) * 5)',
              }}
            >
              {title}
            </Text>
          )}
          <Children
            as={motion.div}
            variants={childrenVariants}
            style={{
              transformOrigin: 'top',
              marginTop: !title
                ? 'calc(var(--close-button-size) + var(--spacing-l))'
                : 'var(--spacing-l)',
              overflow: 'hidden',
            }}
          >
            {children}
          </Children>
        </ModalBody>
      </Backdrop>
    </ModalWrapper>
  )
}

// 'modal-root' is a sibling to 'app-root'
const modalRoot = document.getElementById('modal-root')

export default function Modal({ isOpen, fixed, children, ...props }) {
  // element to which the modal will be rendered
  const el = document.createElement('div')

  useEffect(() => {
    // append to root when the children of Modal are mounted
    modalRoot.appendChild(el)
    if (fixed && isOpen) document.body.style.overflow = 'hidden'

    // do a cleanup
    return () => {
      modalRoot.removeChild(el)
      document.body.style.overflow = 'unset'
    }
  }, [el, fixed, isOpen])

  return (
    isOpen &&
    createPortal(<ModalContent {...props}>{children}</ModalContent>, el)
  )
}

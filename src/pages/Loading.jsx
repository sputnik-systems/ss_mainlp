import React from 'react'
import styled from 'styled-components'
import Modal from 'components/Modal'

export default function LoadingPage({ ...props }) {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        left: 0,
        top: 0,
        background: 'blue',
      }}
    >
      Loading
    </div>
  )
}

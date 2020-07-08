import React from 'react'
import styled from 'styled-components'

import phoneFrame from './frame.png'
import phoneShadow from 'assets/img/wickretphone-shadow.png'
// import phoneShadow from './shadow.png'

import mask from './mask.svg'

const Body = styled.div`
  position: relative;
  display: inline-block;
  contain: layout style;
`

const PhoneShadow = styled.div`
  position: absolute;
  top: -3.577%;
  left: -27.289%;
  right: -15.68%;
  bottom: -11.483%;
  /* opacity: 0.8; */
  background-image: url(${phoneShadow});
  background-size: contain;
  background-repeat: no-repeat;

  top: -7%;
  left: -36%;
  right: -15.68%;
  bottom: -9.483%;

  transform: scale(1.01);
`

const Frame = styled.div`
  position: relative;
  background-image: url(${phoneFrame});
  background-size: cover;

  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  width: 212.55px;
  height: 447.2px;

  @media (min-width: 768px) {
    width: 277.95px;
    height: 584.8px;

    width: 323.95px;
    height: 645px;
  }

  @media (min-width: 1600px) {
    width: 327px;
    height: 688px;
  }
`

const Screen = styled.div`
  position: absolute;
  overflow: hidden;
  background: #fff;

  mask-image: url(${mask});
  mask-size: cover;

  top: 8.45px;
  left: 6.5px;
  width: 199.55px;
  height: 430.3px;
  overflow: hidden;
  border-radius: 19px;

  @media (min-width: 768px) {
    top: 18px;
    left: 21.1px;
    width: 281.4px;
    height: 607.3px;
    border-radius: unset;
  }

  @media (min-width: 1600px) {
  }

  img {
    height: 100%;
    width: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    background-position: center center;
  }

  video {
    height: 100%;
    width: 100%;
    line-height: 0;
    contain: content;
  }
`

export default function Phone({ children, ...props }) {
  return (
    <Body {...props}>
      <PhoneShadow />
      <Frame />
      <Screen>{children}</Screen>
    </Body>
  )
}

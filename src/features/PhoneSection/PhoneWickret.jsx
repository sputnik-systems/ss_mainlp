import React from 'react'
import styled from 'styled-components'

import phoneFrame from 'assets/img/wickretphone.png'
import phoneShadow from 'assets/img/wickretphone-shadow.png'

const Body = styled.div`
  position: relative;
  display: inline-block;
  contain: layout style;
`

const PhoneShadow = styled.div`
  position: absolute;
  top: -8.577%;
  left: -41.289%;
  right: -14.68%;
  bottom: -11.483%;
  opacity: 0.8;
  background-image: url(${phoneShadow});
  background-size: contain;
  background-repeat: no-repeat;
`

const Frame = styled.div`
  position: relative;
  background-image: url(${phoneFrame});
  background-size: cover;

  width: 212.55px;
  height: 447.2px;

  @media (min-width: 768px) {
    width: 277.95px;
    height: 584.8px;
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

  top: 8.45px;
  left: 6.5px;
  width: 199.55px;
  height: 430.3px;
  overflow: hidden;
  border-radius: 19px;

  @media (min-width: 768px) {
    top: 11.05px;
    left: 8.5px;
    width: 260.95px;
    height: 562.7px;
    border-radius: 25px;
    height: 567.7px;
    border-radius: 35px;
  }

  @media (min-width: 1600px) {
    top: 13px;
    left: 10px;
    width: 307px;
    height: 662px;

    border-radius: 30px;
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
      <Screen>
        {children}
        {/* <Video background src={video} /> */}
      </Screen>
    </Body>
  )
}

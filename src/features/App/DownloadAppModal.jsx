import React from 'react'
import styled from 'styled-components'
import Modal from 'components/Modal'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Button from 'components/Button'
import Card from 'components/Card'
import Image from 'components/Image'

import { ReactComponent as QR } from './qr.svg'

import { ReactComponent as Apple } from 'assets/icons/ios.svg'
import { ReactComponent as GooglePlay } from 'assets/icons/googleplay.svg'
import appGallery from 'assets/icons/appgallery.png'

const Body = styled(Modal)`
  /* @media screen and (max-width: 1442px) and (min-width: 767px)
.modal-wrapper .modalWindow { */
  max-width: 950px;
  /* padding: 6rem 6rem 11.16rem 9.6rem; */

  /* } */
`

export default function DownloadAppModal({ ...props }) {
  return (
    <Body fixed {...props} title="Присоединяйся">
      <Grid>
        <Card style={{ gridColumn: '1/10' }} border>
          <QR style={{ width: '100%', height: '100%' }} />
        </Card>

        <Card column="right">
          <Flex
            flexDirection="column"
            height="100%"
            justifyContent="space-between"
          >
            <Button variant="store" mb="5">
              <Apple />
              <span>App Store</span>
            </Button>
            <Button variant="store" mb="5">
              <GooglePlay />
              <span>Google Play</span>
            </Button>
            <Button variant="store">
              <Image src={appGallery} />
              <span>App Gallery</span>
            </Button>
          </Flex>
        </Card>
      </Grid>
    </Body>
  )
}

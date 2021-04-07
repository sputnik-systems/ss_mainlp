import React, { useCallback, useState } from 'react'
import { UilArrowRight } from '@iconscout/react-unicons'
import { useTranslation } from 'react-i18next'

import ProductPageTemplate from 'templates/ProductPageTemplate'
import ProductNav from 'features/Product/Nav'
import Text from 'components/Text'
import Button from 'components/Button'
import Flex from 'components/Flex'
import Grid from 'components/Grid'
import Image from 'components/Image'
import Fade from 'components/Fade'

import Container from 'components/Container'

import key from 'assets/img/lokki/key.png'
import keyShadow from 'assets/img/lokki/keyShadow.png'

export default function LokiPage({ ...props }) {
  const [downloadModal, setDownloadModal] = useState(false)
  const toggleDownloadModal = useCallback(() => {
    setDownloadModal(!downloadModal)
  }, [downloadModal])

  const { t } = useTranslation(['loki', 'common'])
  return (
    <ProductPageTemplate
      {...props}
      nav={
        <ProductNav
          left={
            <>
              <Image src={key} fit="contain" />
              {t('loki:name')}
            </>
          }
          right={
            <>
              <Button
                variant="contained"
                color="primary"
                onClick={toggleDownloadModal}
              >
                {t('common:button.buy')}
              </Button>
            </>
          }
        />
      }
    >
      <Container column="full" style={{ zIndex: 999, position: 'relative' }}>
        <Grid>
          <Flex
            column="heroLeft"
            flexDirection="column"
            height="86vh"
            justifyContent="center"
          >
            <Fade>
              <Text variant="h1" textAlign="left">
                {t('loki:hero')}
              </Text>

              <Button variant="contained" mt="7" mr="auto">
                {t('common:button.buy')}
                <UilArrowRight />
              </Button>
            </Fade>
          </Flex>

          <Flex
            alignItems="center"
            justifyContent="center"
            style={{
              height: '86vh',
              position: 'relative',
            }}
            column="heroRight"
          >
            <Image
              style={{
                height: '100%',
                position: 'absolute',
                // transform: 'scale(1.4)',
                left: '-10%',
              }}
              src={keyShadow}
              fit="contain"
            />
            <Image
              fit="contain"
              style={{ height: '100%', position: 'relative' }}
              src={key}
            />
          </Flex>
        </Grid>
      </Container>

      <Grid contained as="section" column="full">
        <Flex backgroundColor="subtleBackground" height="60vh" column="left" />

        <Flex flexDirection="column" column="right">
          <Text variant="h3">{t('loki:section-unique.title')}</Text>
          <Text variant="h4">{t('loki:section-unique.description')}</Text>
        </Flex>
      </Grid>
      <Grid contained as="section" column="full">
        <Flex flexDirection="column" column="left">
          <Text variant="h3">{t('loki:section-secure.title')}</Text>
          <Text variant="h4">{t('loki:section-secure.description')}</Text>
        </Flex>
        <Flex backgroundColor="subtleBackground" height="60vh" column="right" />
      </Grid>

      <Grid contained as="section" column="full">
        <Flex backgroundColor="subtleBackground" height="60vh" column="left" />

        <Flex flexDirection="column" column="right">
          <Text variant="h3">{t('loki:section-fast.title')}</Text>
          <Text variant="h4">{t('loki:section-fast.description')}</Text>
        </Flex>
      </Grid>

      <Text column="center" variant="h3" textAlign="center">
        {t('loki:section-package.title')}
      </Text>
      <Flex backgroundColor="subtleBackground" height="100vh" column="full" />
    </ProductPageTemplate>
  )
}

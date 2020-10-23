import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Link from 'components/Link'
import Grid from 'components/Grid'
import Container from 'components/Container'
import Text from 'components/Text'
import Button from 'components/Button'

import Emoji from 'components/Emoji'

import { UilArrowRight } from '@iconscout/react-unicons'

const FooterBody = styled(Grid)`
  /* height: var(--footer-height); */
  background: var(--color-background);
  bottom: 0;
  z-index: 1;
  width: 100%;
  grid-template-rows: 1fr max-content;
  grid-row-gap: 0;
  align-items: center;
  /* min-height: 65vh; */
  min-height: 900px;
`

export default function Footer({ ...props }) {
  return (
    <FooterBody as="footer">
      <Grid contained column="full" alignContent="center" py="7">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          column="padLeft"
          height="fit-content"
        >
          <Text
            variant="h1"
            textAlign="left"
            mb="6"
            style={{ filter: 'grayscale(1)' }}
          >
            Напишите нам 🖖
          </Text>
          <Link
            href="mailto:hello@sputnik.systems"
            size="h3"
            p="0"
            mt="6"
            style={{
              justifyContent: 'flex-start',
            }}
          >
            privet@sputnik.direct
          </Link>
          <Grid
            autoFit="80px,1fr"
            style={{ gap: 'var(--spacing-m)' }}
            mt="6"
            pb="3"
            width="100%"
          >
            <Button
              variant="social"
              style={{
                '--button-primary': 'var(--instagram)',
                '--button-secondary': 'var(--instagram-contrast)',
              }}
            >
              Instagram
            </Button>
            <Button
              variant="social"
              style={{
                '--button-primary': 'var(--tg)',
                '--button-secondary': 'var(--tg-contrast)',
              }}
            >
              Telegram
            </Button>
            <Button
              variant="social"
              style={{
                '--button-primary': 'var(--yt)',
                '--button-secondary': 'var(--yt-contrast)',
              }}
            >
              YouTube
            </Button>
            <Button
              variant="social"
              style={{
                '--button-primary': 'var(--sk)',
                '--button-secondary': 'var(--sk-contrast)',
              }}
            >
              Skolkovo
            </Button>
          </Grid>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          column="right"
          style={{
            fontSize: 24,
            borderLeft: '1px solid var(--color-subtle-background)',
          }}
          pl="6"
        >
          <Link variant="nav" fontSize="inherit">
            Идеи функций
            <UilArrowRight />
          </Link>
          <Link variant="nav" fontSize="inherit">
            Продажи и возврат
            <UilArrowRight />
          </Link>
        </Flex>
      </Grid>

      <Flex
        column="full"
        flexDirection="column"
        style={{
          background: 'var(--color-subtle-background)',
        }}
        py="6"
      >
        <Container>
          <Flex flexDirection="column">
            <Text color="textSecondary" mb="3">
              г. Москва, тер. Инновационного центра Сколково, ул. Луговая, д. 4,
              строение 8, пом. 3
            </Text>
            <Text color="textSecondary">
              421 001, г. Казань, ул. А. Козина, 3а — 207
            </Text>
            <Flex flexWrap="wrap">
              <Link pl="0">Использование cookies </Link>
              <Link pl="0">Политика конфиденциальности</Link>
              <Link pl="0">Условия использования</Link>
              <Link pl="0">Юридическая информация</Link>
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </FooterBody>
  )
}

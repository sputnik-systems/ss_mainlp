import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Link from 'components/Link'
import Grid from 'components/Grid'
import Container from 'components/Container'
import Text from 'components/Text'
import Button from 'components/Button'

import vsem from 'assets/img/vsem.png'
import Emoji from 'components/Emoji'

const FooterBody = styled(Grid)`
  height: var(--footer-height);
  background: var(--color-background);
  /* color: var(--color-sputnik-pink-dark); */
  /* box-shadow: inset rgba(0, 0, 0, 0.2) 0px 35px 50px -30px; */
  /* box-shadow: inset 0px 10px 50px rgba(0, 0, 0, 0.1); */
  /* position: fixed; */
  bottom: 0;
  z-index: 1;
  width: 100%;
  /* padding-top: var(--spacing-l);
  padding-bottom: var(--spacing-l); */
  align-items: start;
  grid-template-rows: 1fr max-content;
  grid-row-gap: 0;
`

export default function Footer({ ...props }) {
  return (
    <FooterBody as="footer">
      {/* <Grid contained style={{ gridColumn: '1/17' }}>
        <Flex flexDirection="column" style={{ gridColumn: '1/4' }}>
          <Text variant="h3" pb="3">
            About
          </Text>
          <Link variant="footer">О Компании</Link>
          <Link variant="footer">Обратная связь</Link>
          <Link variant="footer">Идеи функций</Link>
        </Flex>
        <Flex flexDirection="column" style={{ gridColumn: '5/9' }}>
          <Text variant="h3" pb="3">
            Contact us
          </Text>
          <Link variant="footer">О Компании</Link>
          <Link variant="footer">Обратная связь</Link>
          <Link variant="footer">Идеи функций</Link>
        </Flex>
        <Flex flexDirection="column" style={{ gridColumn: '10/13' }}>
          <Text variant="h3" pb="3">
            Skolkovo
          </Text>
        </Flex>

        <img
          src={vsem}
          alt=""
          style={{ gridColumn: '13/17', width: '100%', objectFit: 'contain' }}
        />
      </Grid> */}
      <Grid contained column="full" height="100%">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          column="padLeft"
          height="100%"
        >
          <Link variant="inline" size="h1" textAlign="left" color="primary">
            Напиши
            <br /> привет 👋
          </Link>
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          column="right"
          height="100%"
          style={{
            fontSize: 24,
            borderLeft: '1px solid var(--color-subtle-background)',
          }}
          pl="6"
        >
          <Link variant="nav" fontSize="inherit">
            Идеи функций
          </Link>
          <Link variant="nav" fontSize="inherit">
            Продажи и возврат
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
            {/* <Link
              href="mailto:hello@sputnik.systems"
              size="h3"
              p="0"
              mb="5"
              style={{
                justifyContent: 'flex-start',
              }}
            >
              hello@sputnik.systems
            </Link> */}

            <Grid
              autoFit="150px,1fr"
              style={{ gap: 'var(--spacing-m)' }}
              mb="6"
            >
              <Button
                variant="social"
                style={{
                  '--button-primary': 'var(--instagram)',
                  '--button-secondary': 'var(--instagram-contrast)',
                  '--button-hover': 'var(--instagram-darker)',
                }}
              >
                Instagram
              </Button>
              <Button
                variant="social"
                style={{
                  '--button-primary': 'var(--tg)',
                  '--button-secondary': 'var(--tg-contrast)',
                  '--button-hover': 'var(--tg-darker)',
                }}
              >
                Telegram
              </Button>
              <Button
                variant="social"
                style={{
                  '--button-primary': 'var(--yt)',
                  '--button-secondary': 'var(--yt-contrast)',
                  '--button-hover': 'var(--yt-darker)',
                }}
              >
                YouTube
              </Button>
              <Button
                variant="social"
                style={{
                  '--button-primary': 'var(--sk)',
                  '--button-secondary': 'var(--sk-contrast)',
                  '--button-hover': 'var(--sk-darker)',
                }}
              >
                Skolkovo
              </Button>
            </Grid>
            <Text color="textSecondary" mb="3">
              🏠 г. Москва, тер. Инновационного центра Сколково, ул. Луговая, д.
              4, строение 8, пом. 3
            </Text>
            <Text color="textSecondary">
              📭 421 001, г. Казань, ул. А. Козина, 3а — 207
            </Text>
            <Flex>
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

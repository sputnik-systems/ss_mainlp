import React from 'react'
import Text from 'components/Text'
import Emoji from 'components/Emoji'
import Flex from 'components/Flex'
import Button from 'components/Button'
import Link from 'components/Link'
import StackableCards from 'features/StackableCards'

const styles = { secondary: { opacity: 0.6 } }

const cards = [
  {
    bg: 'var(--color-primary)',
    color: 'var(--color-primary-contrast)',
    title: (
      <Text variant="h2" textAlign="left" color="inherit">
        Делись с соседями 🤡👺🧟‍♀️{' '}
        <span style={styles.secondary}>
          премиум аккаунтами и получай такие же для своей семьи бесплатно
        </span>
      </Text>
    ),
    sub: (
      <Text variant="h4" color="inherit">
        <Button
          variant="card"
          style={{
            '--button-primary': 'var(--color-primary-darker)',
            '--button-secondary': 'var(--color-primary-contrast)',
            '--button-hover': 'var(--color-primary-darker)',
          }}
        >
          Поделиться приложением
        </Button>
      </Text>
    ),
  },
  {
    bg: 'var(--color-secondary)',
    color: 'var(--color-secondary-contrast)',
    title: (
      <>
        {/* <Text variant="h2" textAlign="left" color="inherit">
          У вас есть идеи 💡 как сделать наше приложение лучше?
        </Text>
        <Text variant="h2" color="inherit">
          Мы вас ❤️ — рассказывайте.
        </Text> */}

        <Text variant="h2" textAlign="left" color="inherit">
          Поделись своей идеей 💡
          <span style={styles.secondary}>
            как сделать наше приложение лучше
          </span>{' '}
        </Text>
      </>
    ),
    sub: (
      <>
        <Flex alignItems="center">
          <Text variant="h4" color="inherit">
            <Emoji
              emote="🎁"
              fontSize="200%"
              style={{ marginRight: 'var(--spacing-m)' }}
            />{' '}
          </Text>
          <Text variant="h4" color="inherit">
            Ценные идеи мы обмениваем на подарки и призы.{' '}
          </Text>
        </Flex>

        {/* <Text variant="h4" color="inherit">
          <Link variant="cta"> Обсудить вашу идею</Link>
        </Text> */}

        <Text variant="h4" color="inherit">
          <Button
            variant="card"
            style={{
              '--button-primary': 'var(--color-secondary-darker)',
              '--button-secondary': 'var(--color-secondary-contrast)',
              '--button-hover': 'var(--color-secondary-darker)',
            }}
          >
            Обсудить идею
          </Button>
        </Text>
      </>
    ),
  },
  {
    bg: 'var(--color-sputnik-yellow)',
    color: 'var(--color-text)',
    title: (
      <Text variant="h2" textAlign="left" color="inherit">
        Получай награды 💸{' '}
        <span style={styles.secondary}>за нахождение багов</span>
      </Text>
    ),
    sub: (
      <Text variant="h4" color="inherit">
        <Button
          variant="card"
          style={{
            '--button-primary': 'var(--color-sputnik-yellow-dark)',
            '--button-secondary': 'var(--color-text)',
            '--button-hover': 'var(--color-sputnik-yellow-dark)',
          }}
        >
          Узнать подробнее
        </Button>
      </Text>
    ),
  },
]

export default function CardsSection({ ...props }) {
  return <StackableCards as="section" cards={cards} {...props} />
}

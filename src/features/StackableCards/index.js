import React from 'react'
import styled from 'styled-components'
import Flex from 'components/Flex'
import Card from './StackableCard'
import Text from 'components/Text'
import Emoji from 'components/Emoji'
import Button from 'components/Button'
import Link from 'components/Link'

const Wrapper = styled(Flex)`
  flex-direction: column;
`
const styles = { secondary: { opacity: 0.6 } }

const cards = [
  {
    bg: 'var(--color-primary)',
    color: 'var(--color-primary-contrast)',
    title: (
      <Text variant="h1" textAlign="left" color="inherit">
        Invite friends 🦁🐸🐵
        <span style={styles.secondary}>
          and get €5 for every friend joined after you.
        </span>
      </Text>
    ),
    sub: (
      <Text variant="h4" color="inherit">
        <Emoji emote={'😎'} /> If your friends invite their friends, each will
        bring you another €1. Sweet!
      </Text>
    ),
  },
  {
    bg: 'var(--color-secondary)',
    color: 'var(--color-secondary-contrast)',

    title: (
      <Text variant="h1" textAlign="left" color="inherit">
        A couple of simple steps ✌️
        <span style={styles.secondary}>that's all you need</span>
      </Text>
    ),
    sub: (
      <>
        <Text variant="h4" color="inherit">
          Join Zelf and and get your card.
        </Text>
        <Text variant="h4" color="inherit">
          Tap the 👫 <Link color="primary">Invite button </Link> to get the
          unique link.
        </Text>
        <Text variant="h4" color="inherit">
          Share. Share. Share.
        </Text>
      </>
    ),
  },
  {
    bg: '#FFD600',
    color: 'var(--color-text)',
    title: (
      <Text variant="h1" textAlign="left" color="inherit">
        Order your card now 💸
        <span style={styles.secondary}>Boost your Zelf with bonuses </span>
      </Text>
    ),
  },
]

export default function StackableCards({ ...props }) {
  return (
    <Wrapper {...props}>
      {cards.map((card, idx) => (
        <Card {...card} idx={idx} key={idx} />
      ))}
    </Wrapper>
  )
}

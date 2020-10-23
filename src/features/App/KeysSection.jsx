import React from 'react'
import styled from 'styled-components'

import Container from 'components/Container'
import SplitShow from 'features/SplitShow'
import Text from 'components/Text'
import Grid from 'components/Grid'

import arrow from 'assets/svg/handdrawnArrow.svg'
import appWidget from 'assets/img/app_widget.png'
import appWatch from 'assets/img/app_watch.png'
import appCodes from 'assets/img/app_phonereel.png'

const SplitContainer = styled(Container)`
  /* position: relative;
  &::after {
    content: url(${arrow});
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate3d(50%, 100%, 0) rotate(100deg) scaleY(-1);
    height: calc(var(--gap) / 2);
  } */
`

const items = [
  {
    src: appCodes,
    caption: 'Создавайте коды доступа.',
  },
  { src: appCodes, caption: 'Открывайте дверь через мобильное приложение...' },
  {
    src: appCodes,
    caption: '...ключом «Локки»...',
  },

  { src: appWatch, caption: '...с помощью умных часов...' },
  {
    src: appWidget,
    caption: '... а также через виджет.',
  },
]

export default function KeysSection({ ...props }) {
  return (
    <>
      <Container column="full">
        <Grid>
          <Text style={{ gridColumn: '2/10' }} variant="h1" textAlign="left">
            Ключи, они такие разные...
          </Text>
        </Grid>
      </Container>

      {/* <SplitContainer column="full" as="section"> */}
      <SplitShow column="full" left={items} />
      {/* </SplitContainer> */}
    </>
  )
}

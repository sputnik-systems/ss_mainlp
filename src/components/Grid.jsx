import styled, { css } from 'styled-components'
import { space } from 'styled-system'

const ifContained = css`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--spacing-m);
  ${space}
`

export default styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-row-gap: 100px;
  grid-column-gap: 60px;
  grid-row-gap: var(--spacing-xxl);
  grid-column-gap: var(--spacing-l);

  ${(p) => p.contained && ifContained};
  ${space};
`

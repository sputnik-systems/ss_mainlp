import styled, { css } from 'styled-components'

const ifContained = css`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--spacing-m);
`

export default styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-row-gap: 100px;
  grid-column-gap: 60px;

  ${(p) => p.contained && ifContained};
`

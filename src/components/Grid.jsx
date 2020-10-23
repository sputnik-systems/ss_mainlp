import styled, { css } from 'styled-components'
import { space, layout, color } from 'styled-system'
import gridColumns from 'utils/gridColumns'

const ifContained = css`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 var(--spacing-m);
  ${space}
`

const ifAutoFit = css`
  grid-template-columns: repeat(auto-fit, minmax(${(p) => p.autoFit}));
`

export default styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-row-gap: 100px;
  grid-column-gap: 60px;
  grid-row-gap: var(--spacing-xxl);
  grid-column-gap: var(--spacing-l);
  align-items: ${(p) => p.alignItems || 'unset'};

  ${(p) => p.contained && ifContained};
  ${(p) => p.autoFit && ifAutoFit};
  ${space};
  ${layout};
  ${color};
  ${gridColumns};
`

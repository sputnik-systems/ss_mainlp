export default {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [
    0,
    'var(--spacing-xxs)',
    'var(--spacing-xs)',
    'var(--spacing-s)',
    'var(--spacing-m)',
    'var(--spacing-l)',
    'var(--spacing-xl)',
    'var(--spacing-xxl)',
  ],
  fonts: {
    body: 'var(--font-primary)',
    heading: 'var(--font-)',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 'var(--font-weight-bold)',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  colors: {
    textSecondary: 'var(--color-text-secondary)',
    text: 'var(--color-text)',
    transparent: 'transparent',
    background: 'var(--color-background)',
    subtleBackground: 'var(--color-subtle-background)',
    primary: 'var(--color-primary)',
    yellow: 'var(--color-sputnik-yellow)',
  },
}

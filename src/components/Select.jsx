import React, { useCallback } from 'react'
import ReactSelect from 'react-select'
import Button from 'components/Button'
import Text from 'components/Text'

const customStyles = {
  valueContainer: () => ({
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
  indicatorsContainer: () => ({
    display: 'none',
  }),
  control: (styles, state) => {
    return {
      ...styles,
      padding: '.325rem',
      border: `1px solid transparent !important`,
      background: state.isFocused
        ? 'var(--color-subtle-background-darker)'
        : 'var(--color-background)',
      color: state.isFocused
        ? 'var(--color-text)'
        : 'var(--color-text-secondary)',
      boxShadow: 'none',
      '&:hover': state.isFocused
        ? {}
        : {
            cursor: 'pointer',
            borderColor: 'transparent',
            background: 'var(--color-subtle-background)',
          },
    }
  },
  menu: (styles, state) => ({
    ...styles,
    zIndex: 100,
    background: 'var(--color-blurred-background)',
    backdropFilter: 'var(--filter-backdrop)',
    boxShadow: 'var(--shadow-strong)',
    padding: 'var(--spacing-s) var(--spacing-xs)',
    width: 'fit-content',
    minWidth: 150,
    borderRadius: 'var(--br-l)',
  }),
  menuList: (styles) => ({
    ...styles,
    overflow: 'visible', // TODO: might need to fix that
  }),
}

const SingleValue = ({ children, ...props }) => <div {...props}>{children}</div>

const Control = ({ children, innerProps, innerRef, ...props }) => (
  <Button variant="text" color="subtle" ref={innerRef} {...innerProps}>
    {children}
  </Button>
)

const Option = ({ children, innerProps, innerRef, ...props }) => (
  <Button
    variant={props.isSelected ? 'contained' : 'text'}
    color={props.isSelected ? 'primary' : 'subtle'}
    style={{ width: '100%', textAlign: 'start', cursor: 'pointer' }}
    ref={innerRef}
    {...innerProps}
  >
    {children}
  </Button>
)

const Placeholder = ({ children, innerRef, innerProps }) => (
  <Text ref={innerRef} color="textSecondary" {...innerProps}>
    {children}
  </Text>
)

const Search = ({ style = {}, ...props }) => {
  const onFocusedOptionChanged = useCallback((option) => {
    // dispatch(setFocusedOption(option))
  }, [])

  return (
    <ReactSelect
      cacheOptions
      defaultOptions
      isMulti
      styles={customStyles}
      components={{ Control, SingleValue, Placeholder, Option }}
      theme={(selectTheme) => ({
        ...selectTheme,
        borderRadius: 'var(--br-m)',
        fontFamily: 'var(--font-family)',
        colors: {
          ...selectTheme.colors,
          primary75: 'var(--color-subtle-background-darker)',
          primary50: 'var(--color-subtle-background-darker)',
          primary25: 'var(--color-subtle-background)',
          primary: 'var(--color-primary)',
        },
      })}
      onFocusedOptionChanged={onFocusedOptionChanged}
      {...props}
    />
  )
}

export default Search

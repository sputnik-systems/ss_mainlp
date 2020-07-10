import React, { useState } from 'react'
import styled from 'styled-components'

const Select = styled.select`
  border: none;
  background: none;
  font-family: var(--font-family);
  font-weight: var(--font-weight);
  font-size: var(--font-size);
  color: inherit;
`
const Option = styled.option``
const Label = styled.label``

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useState(defaultState)
  const Dropdownmaker = () => (
    <Label htmlFor={label}>
      {/* {label} */}
      <Select
        id={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
        onBlur={(e) => setState(e.target.value)}
        disabled={!options.length}
      >
        {/* <Option>All</Option> */}
        {options.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </Label>
  )
  return [state, Dropdownmaker, setState]
}

export default useDropdown

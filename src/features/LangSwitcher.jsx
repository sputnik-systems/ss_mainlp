import React from 'react'
import { useTranslation } from 'react-i18next'

import Select from 'components/Select'

const options = [
  { value: 'ru', label: '🇷🇺 Русский' },
  { value: 'en', label: '🇬🇧 English' },
  { value: 'sp', label: '🇪🇸 Español ' },
]

export default function LangSwitcher({ ...props }) {
  const { i18n } = useTranslation()
  return (
    <Select
      options={options}
      isMulti={false}
      isClearable={false}
      isSearchable={false}
      width="200px"
      value={options.find(({ value }) => value === i18n.languages[0])}
      onChange={({ value }) => i18n.changeLanguage(value)}
    />
  )
}

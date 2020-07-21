import i18n from 'i18next'
import XHR from 'i18next-xhr-backend'
import intervalPlural from 'i18next-intervalplural-postprocessor'
import LanguageDetector from 'i18next-browser-languagedetector'
// import commonRu from 'locales/common_ru.json'
// import notificationsRu from 'locales/notifications_ru.json'

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(intervalPlural)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
      format: function (value, format, lng) {
        switch (format) {
          case 'lowercase':
            return value.toLowerCase()
          case 'capitalize':
            return value.charAt(0).toUpperCase() + value.slice(1)
          case 'uppercase':
            return value.toUpperCase()
          case 'date': {
            return new Intl.DateTimeFormat(lng).format(value)
          }
          case 'number': {
            return new Intl.NumberFormat(lng).format(value)
          }
          default:
            return value
        }
      },
    },
    defaultNS: 'common',
    fallbackLng: ['ru', 'en'],
    load: 'languageOnly',
  })

export default i18n

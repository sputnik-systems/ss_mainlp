import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import store from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { I18nextProvider } from 'react-i18next'
import i18n from './utils/i18n'

import GlobalStyle from 'theme/global'
import system from 'theme/system'

ReactDOM.render(
  <ThemeProvider theme={system}>
    <Provider store={store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Suspense fallback="kek">
            <GlobalStyle />
            <App />
          </Suspense>
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

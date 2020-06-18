import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import store from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import GlobalStyle from 'theme/global'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import system from 'theme/system'

ReactDOM.render(
  <ThemeProvider theme={system}>
    <Provider store={store}>
      <BrowserRouter>
        <>
          <GlobalStyle />
          <App />
        </>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

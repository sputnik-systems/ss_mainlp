import React from 'react'
import AppTemplate from 'templates/AppTemplate'
import { Route, Switch } from 'react-router'
import { Helmet } from 'react-helmet'
import config from 'app/config'
import Navbar from 'features/Navbar'
import Footer from 'features/Footer'

import Home from 'pages/HomePage'

export default function App() {
  return (
    <AppTemplate>
      <Helmet>
        <title>{config.title}</title>
      </Helmet>
      <Navbar />
      <Switch>
        <Route component={Home} path="/"></Route>
      </Switch>
      <Footer></Footer>
    </AppTemplate>
  )
}

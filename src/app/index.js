import React from 'react'
import AppTemplate from 'templates/AppTemplate'
import { Route, Switch, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import config from 'app/config'
import Navbar from 'features/GlobalNavbar'
import Footer from 'features/Footer'
import useScrollToTop from 'hooks/useScrollToTop'

import Home from 'pages/HomePage'
import Sputnik from 'pages/SputnikPage'
import AppPage from 'pages/AppPage'

// const pageVariants = {
//   initial: {
//     opacity: 0,
//   },
//   in: {
//     opacity: 1,
//   },
//   out: {
//     opacity: 0,
//   },
// }

// const pageTransition = {
//   type: 'tween',
//   ease: 'anticipate',
//   duration: 0.5,
// }

// const pageStyle = {
//   // position: 'absolute',
// }

// const MotionRoute = ({ component, ...props }) => {
//   const Component = component
//   return (
//     <Route
//       {...props}
//       render={() => (
//         <Component
//           style={pageStyle}
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={pageVariants}
//           transition={pageTransition}
//           as={motion.main}
//         />
//       )}
//     />
//   )
// }

export default function App() {
  const location = useLocation()
  useScrollToTop()
  return (
    <AppTemplate>
      <Helmet>
        <title>{config.title}</title>
      </Helmet>
      <Navbar />

      <Switch location={location} key={location.pathname}>
        <Route component={AppPage} path="/app" />
        <Route component={Sputnik} path="/sputnik" />
        <Route component={Home} path="/" />
      </Switch>

      <Footer />
    </AppTemplate>
  )
}

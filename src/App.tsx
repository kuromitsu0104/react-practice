import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// MEMO:
//    unstable_createMuiStrictModeThemeについて
//      MaterialUIのエラー対策
//      (https://stackoverflow.com/questions/62250315/warning-about-deprecated-finddomnode-when-using-react-router-navigation-prompt)
/* eslint-disable */
import {
  ThemeProvider,
  unstable_createMuiStrictModeTheme,
} from '@material-ui/core/styles'
/* eslint-disable */

import AboutPage from './pages/AboutPage'
import TopPage from './pages/TopPage'

const theme = unstable_createMuiStrictModeTheme()

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" component={TopPage} exact />
          <Route path="/about" component={AboutPage} exact />
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App

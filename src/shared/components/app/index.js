import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Router } from '../'
import styles from './style.scss'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>template</title>
          <link
            rel="shortcut icon"
            href="https://cdn3.iconfinder.com/data/icons/ui-icons-part-1/36/Gear_Small-512.png"
            type="image/x-icon"
          />
        </Helmet>
        <div className="container-fluid">
          <Router />
        </div>
      </div>
    )
  }
}
export default App

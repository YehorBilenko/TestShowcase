import React from 'react'
import Header from './header'
import {Link} from 'gatsby'

import '../styles/layout.css'
import styles from './styles/layout.module.css'
if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}
const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <div className={styles.content}>{children}</div>
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Link to='/#top'>
          <div className={styles.siteInfo}>© LightDev 2020</div>
        </Link>
      </div>
    </footer>
  </>
)

export default Layout

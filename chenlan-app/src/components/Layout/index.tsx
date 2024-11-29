import classnames from 'classnames/bind'
import type { PropsWithChildren } from 'react'
import React from 'react'

import Header from '../Header'

import styles from './index.module.css'

const cx = classnames.bind(styles)

const Layout: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <div className={cx('bg-inherit', 'layout')} {...rest}>
      <Header />
      {children}
    </div>
  )
}

export default Layout

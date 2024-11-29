import classnames from 'classnames/bind'
import { NavLink } from 'react-router-dom'

import logoIcon from '@/assets/imgs/logo.png'

import styles from './index.module.css'

const cx = classnames.bind(styles)

const menuItems = [
  {
    name: '首页',
    key: 'home',
  },
  {
    name: '关于臣蓝',
    key: 'about',
  },
  {
    name: '产品中心',
    key: 'product',
  },
  {
    name: '解决方案',
    key: 'solution',
  },
  {
    name: '项目案例',
    key: 'cases',
  },
  {
    name: '试用申领',
    key: 'trial',
  },
  {
    name: '联系我们',
    key: 'contact',
  },
]

const Header = () => {
  return (
    <header className={'bg-white fixed top-10 w-11/12 z-50'}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between lg:px-8">
        <div>
          <a href="/">
            <img className="h-10 w-auto" src={logoIcon} alt="logo" />
          </a>
        </div>
        <div className="flex h-16">
          {menuItems.map(({ name, key }) => {
            return (
              <NavLink
                key={key}
                to={'/'}
                className={cx(
                  'nav-item',
                  'text-sm/6',
                  'font-semibold',
                  'text-gray-900',
                  'hover:text-white',
                )}
              >
                {name}
              </NavLink>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Header

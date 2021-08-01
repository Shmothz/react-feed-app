import React from 'react'
import {createUseStyles} from 'react-jss'
import {objStyles} from './styles'
import {Logo} from './Logo'

import {Menu} from 'antd'
import 'antd/dist/antd.css'
import {NavLink} from 'react-router-dom'
import {Layout} from 'antd'
import 'antd/dist/antd.css'

const {Header} = Layout

export const HeaderComponent = () => {

  const styles = createUseStyles(objStyles)()

  return (
    <Header>
      <div className={styles.wrapper}>
        <Logo className={styles.logo}/>
        <div className={styles.menu}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="0">
              <NavLink to='/'> Main </NavLink>
            </Menu.Item>
            <Menu.Item key="1">
              <NavLink to='/profile'> My profile </NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to='/news'> News </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </Header>)
}
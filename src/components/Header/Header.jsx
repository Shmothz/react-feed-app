import React, {useEffect, useState} from 'react'
import {createUseStyles} from 'react-jss'
import {objStyles} from './styles'
import {Logo} from './Logo'

import { Menu} from 'antd'
import 'antd/dist/antd.css'
import {NavLink} from 'react-router-dom';

export const HeaderComponent = () => {

  const styles = createUseStyles(objStyles)()

  return (<div className={styles.wrapper}>
    <Logo className={styles.logo}/>
    <div className={styles.menu}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
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
  </div>)
}
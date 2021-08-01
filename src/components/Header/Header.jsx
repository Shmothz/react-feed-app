import React, {useEffect, useState} from 'react'
import {createUseStyles} from 'react-jss'
import {objStyles} from './styles'
import {Logo} from './Logo'
import {MenuComponent} from './Menu/index'

import {Dropdown, Menu} from 'antd'
import {BarsOutlined} from '@ant-design/icons'
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
    {/*<div className={styles.sandwich}>*/}
    {/*  <Dropdown overlay={<MenuComponent/>} trigger={['click']}>*/}
    {/*    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>*/}
    {/*      <BarsOutlined style={{fontSize: '36px'}}/>*/}
    {/*    </a>*/}
    {/*  </Dropdown>*/}
    {/*</div>*/}
  </div>)
}
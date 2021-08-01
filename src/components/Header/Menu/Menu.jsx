import {Menu} from 'antd'
import 'antd/dist/antd.css'
import {NavLink} from 'react-router-dom';
import React from 'react';

export const MenuComponent = () => {
  return (
    <Menu>
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
  )
}
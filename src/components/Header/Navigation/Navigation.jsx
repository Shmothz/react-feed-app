import React from 'react'
import {NavLink} from 'react-router-dom';
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';

export const Navigation = ({onClick}) => {

  const styles = createUseStyles(objStyles)()

  return (<div className={styles.wrapper}>
    <NavLink to='/' onClick={onClick}>
      <span className={styles.navLinkTab}>Главная</span>
    </NavLink>
    <NavLink to='/profile' onClick={onClick}>
      <span className={styles.navLinkTab}>Профиль</span>
    </NavLink>
    <NavLink to='/news' onClick={onClick}>
      <span className={styles.navLinkTab}>Новости</span>
    </NavLink>
  </div>)
}
import React from 'react'
import {NavLink} from 'react-router-dom';
import {createUseStyles} from 'react-jss';

const Navigation = () => {

  const styles = createUseStyles({
    wrapper: {
      position: 'absolute',
      top: '0',
      left: '0',
      display: 'flex',
      flexDirection: 'column',

    },
    navLinkTab: {
      background: {
        color: '#9999ff'
      },
      borderRadius: '15px',
      marginTop: '3px',
      display: 'block',
      textDecoration: 'none',
      color: '#9e9e9e',
      padding: '10px 20px',
      border: 'none',
      outline: 'none'
    }
  })()

  return (<div className={styles.wrapper}>
    <NavLink to=''>
      <span className={styles.navLinkTab}>Главная</span>
    </NavLink>
    <NavLink to='/profile'>
      <span className={styles.navLinkTab}>Профиль</span>
    </NavLink>
    <NavLink to='/news'>
      <span className={styles.navLinkTab}>Новости</span>
    </NavLink>
  </div>)
}

export default Navigation
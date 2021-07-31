import React from 'react'
import {createUseStyles} from 'react-jss';

const Main = () => {

  const styles = createUseStyles({
    title: {
      margin: '0'
    },
    wrapper: {
      background: {
        color: '#ffebe8'
      },
      minWidth: '420px',
      maxWidth: '1100px',
      margin: '0 auto'
    }
  })()

  return (<div className={styles.wrapper}>
    <h2 className={styles.title}>
      Главная страница
    </h2>
    <span>
      Главная страница, здесь можно вывести какую-нибудь информацию, но я этого делать не буду
    </span>
  </div>)
}

export default Main
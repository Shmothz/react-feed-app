import React from 'react'
import {createUseStyles} from 'react-jss';

export const Main = () => {

  const styles = createUseStyles({
    title: {
      margin: '0',
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }
  })()

  return (<div className={styles.wrapper}>
    <h2 className={styles.title}>
      Main page
    </h2>
    <span>
      I don't want what to do here.
    </span>
  </div>)
}
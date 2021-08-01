import React from 'react'
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';

export const Main = () => {

  const styles = createUseStyles(objStyles)()

  return (<div className={styles.wrapper}>
    <h2 className={styles.title}>
      Main page
    </h2>
    <span>
      I don't want what to do here.
    </span>
  </div>)
}
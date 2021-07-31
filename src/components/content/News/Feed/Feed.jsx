import React from 'react'
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';


export const Feed = ({news}) => {

  const styles = createUseStyles(objStyles)()

  return (<div className={styles.wrapper}>
    {news.map((elem,index) => <a href={elem.url} key={index}><div
    className={styles.tab}>
      <img src={elem.urlToImage}
           alt={'preview'}
           className={styles.img}
           />
      <h3 className={styles.title}>
        {elem.title}
      </h3>
    </div></a>)}
  </div>)
}
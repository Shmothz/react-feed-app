import React from 'react'
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';
import {ItemNews} from '../ItemNews';


export const Feed = ({news}) => {

  const styles = createUseStyles(objStyles)()

  return (<div className={styles.wrapper}>
    {news.map((elem, index) =>
        <ItemNews key={index}
                  className={styles}
                  urlToImage={elem.urlToImage}
                  elem={elem}
        />
      //   <div key={index}
      //                                 className={styles.tab}>
      //   <img src={elem.urlToImage}
      //        alt={'preview'}
      //        className={styles.img}
      //   />
      //   <h3 className={styles.title}>
      //     {elem.title}
      //   </h3>
      // </div>
    )}
  </div>)
}
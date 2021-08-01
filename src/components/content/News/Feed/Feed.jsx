import React from 'react'
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';
import {ItemNews} from '../ItemNews';


export const Feed = ({news}) => {

  const styles = createUseStyles(objStyles)()

  return (
    !!news &&
    <div className={styles.wrapper}>
      {news.map((elem, index) =>
        <ItemNews key={index}
                  className={styles}
                  urlToImage={elem.urlToImage}
                  elem={elem}
        />
      )}
    </div>
  )
}
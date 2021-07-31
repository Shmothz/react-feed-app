import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';
import {Feed} from './Feed';
import {Filter} from './Filter';
import {getNewsTC} from '../../../redux/reducers/news-reducer';

const OFFSET = 5

export const News = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.newsPage)
  console.log(data)

  const [offset, setOffset] = useState(OFFSET)

  useEffect(() => {
    dispatch(getNewsTC('us',offset))
    setOffset(offset + OFFSET)
  },[])

  const getNews = () => {
    dispatch(getNewsTC('us', offset))
    setOffset(offset + OFFSET)
  }

  const styles = createUseStyles(objStyles)()

  return (<div className={styles.wrapper}>
    <Filter offset={offset} />
    <Feed news={data}/>
    <button onClick={getNews} className={styles.btn}>Show more</button>
  </div>)
}
import React, {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {createUseStyles} from 'react-jss';
import {objStyles} from './styles';
import {Feed} from './Feed';
import {Filter} from './Filter';
import {getNewsTC} from '../../../redux/reducers/news-reducer';
import {Button} from 'antd'
import {Spin, Space} from 'antd';

const OFFSET = 5

export const News = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.newsPage)
  console.log(data)

  const [offset, setOffset] = useState(OFFSET)

  const getNews = () => {
    dispatch(getNewsTC('us', offset))
    setOffset(offset + OFFSET)
  }

  // TODO: избавиться от отсутствия зависимости
  useEffect(getNews, [])

  const styles = createUseStyles(objStyles)()

  return (
    <div className={styles.wrapper}>
      <Filter offset={offset}/>
      <Feed news={data.news}/>
      {
        data.isFetching
          ? <Space size="middle"><Spin size="large"/></Space>
          : null
      }
      <Button onClick={getNews} type="primary">Show more</Button>
    </div>
  )
}




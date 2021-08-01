import React, {useEffect, useState} from 'react'
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

  useEffect(async () => {
    await dispatch(getNewsTC('us', offset))
    setOffset(offset + OFFSET)
  }, [])

  const getNews = async () => {
    await dispatch(getNewsTC('us', offset))
    setOffset(offset + OFFSET)
  }

  const styles = createUseStyles(objStyles)()

  return (
    <div className={styles.wrapper}>
      <Filter offset={offset}/>
      {
        data.isFetching
          ? <Space size="middle"><Spin size="large"/></Space>
          : <Feed news={data.news}/>
      }

      <Button onClick={getNews} type="primary">Show more</Button>
    </div>
  )
}




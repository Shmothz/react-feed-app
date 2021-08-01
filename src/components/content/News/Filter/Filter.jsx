import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getNewsWithFilterTC} from '../../../../redux/reducers/news-reducer'
import {Input} from 'antd'

const {Search} = Input

export const Filter = ({offset}) => {


  const [filter, setFilter] = useState('')

  const dispatch = useDispatch()

  const updateFilter = (e) => {
    setFilter(e.target.value)
  }

  const getFilterNews = () => {
    dispatch(getNewsWithFilterTC('us', offset, filter))
    setFilter('')
  }

  return (<div>
    <Search
      placeholder={'Search string'}
      value={filter}
      onChange={updateFilter}
      allowClear
      enterButton="Search"
      size="large"
      onSearch={getFilterNews}
    />
  </div>)
}
import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getNewsWithFilterTC} from '../../../../redux/reducers/news-reducer';

export const Filter = ({offset}) => {

  const [filter, setFilter] = useState('')

  const dispatch = useDispatch()

  const updateFilter = (e) => {
    setFilter(e.target.value)
  }

  const getFilterNews = () => {
    dispatch(getNewsWithFilterTC('us', offset, filter))
  }

  return (<div>
    Filter: <input
    onChange={updateFilter}
    name='filter'
    value={filter}
  />
    <button onClick={getFilterNews} disabled={!filter}>Search</button>
  </div>)
}
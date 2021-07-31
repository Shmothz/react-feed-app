import {newsAPI} from '../../api/api'

const GET_NEWS = 'news/GET_NEWS'
const GET_FILTER_NEWS = 'news/GET_FILTER_NEWS'

let initialState = []

export const newsReducer = (state = initialState, {type,news}) => {
  switch (type) {
    case GET_NEWS:
      return [...news]
    case GET_FILTER_NEWS:
      return [...news]
    default:
      return state
  }
}

const getUsersAC = (news) => ({type: GET_NEWS, news})

export const getNewsTC = (country,pageSize) => async (dispatch) => {
  const res = await newsAPI.getNews(country,pageSize)
  dispatch(getUsersAC(res.data.articles))
}
export const getNewsWithFilterTC = (country,pageSize,q) => async (dispatch) => {
  const res = await newsAPI.getFilterNews(country,pageSize,q)
  dispatch(getUsersAC(res.data.articles))
}
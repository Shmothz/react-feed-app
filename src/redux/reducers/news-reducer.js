import {newsAPI} from '../../api/api'

const GET_NEWS = 'news/GET_NEWS'
const GET_FILTER_NEWS = 'news/GET_FILTER_NEWS'
const TOGGLE_IS_FETCHING = 'news/TOGGLE_IS_FETCHING'

let initialState = {
  news: [],
  isFetching: false
}

export const newsReducer = (state = initialState, {type,news,isFetching}) => {
  switch (type) {
    case GET_NEWS:
      return {
        ...state,
        news: [...news]
      }
    case GET_FILTER_NEWS:
      return {
        ...state,
        news: [...news]
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: isFetching
      }
    default:
      return state
  }
}

const getUsersAC = (news) => ({type: GET_NEWS, news})
const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getNewsTC = (country,pageSize) => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true))
  const res = await newsAPI.getNews(country,pageSize)
  dispatch(getUsersAC(res.data.articles))
  dispatch(toggleIsFetchingAC(false))
}
export const getNewsWithFilterTC = (country,pageSize,q) => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true))
  const res = await newsAPI.getFilterNews(country,pageSize,q)
  dispatch(getUsersAC(res.data.articles))
  dispatch(toggleIsFetchingAC(false))
}
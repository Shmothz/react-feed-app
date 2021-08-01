import {newsAPI} from '../../api/api'

const SET_NEWS = 'news/SET_NEWS'
const SET_FILTER_NEWS = 'news/SET_FILTER_NEWS'
const SET_IS_FETCHING = 'news/SET_IS_FETCHING'

let initialState = {
  news: [],
  isFetching: false
}

export const newsReducer = (state = initialState, {type, news, isFetching}) => {
  switch (type) {
    case SET_NEWS:
      return {
        ...state,
        news: [...news]
      }
    case SET_FILTER_NEWS:
      return {
        ...state,
        news: [...news]
      }
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching
      }
    default:
      return state
  }
}

const getUsersAC = (news) => ({type: SET_NEWS, news})
const setIsFetchingAC = (isFetching) => ({type: SET_IS_FETCHING, isFetching})

export const getNewsTC = (country,pageSize) => async (dispatch) => {
  dispatch(setIsFetchingAC(true))
  const res = await newsAPI.getNews(country,pageSize)
  dispatch(getUsersAC(res.data.articles))
  dispatch(setIsFetchingAC(false))
}
export const getNewsWithFilterTC = (country,pageSize,q) => async (dispatch) => {
  dispatch(setIsFetchingAC(true))
  const res = await newsAPI.getFilterNews(country,pageSize,q)
  dispatch(getUsersAC(res.data.articles))
  dispatch(setIsFetchingAC(false))
}
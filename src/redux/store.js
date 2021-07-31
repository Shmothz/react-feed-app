import {newsReducer} from './Reducers/news-reducer';
import {profileReducer} from './Reducers/profile-reducer';
import {mainReducer} from './Reducers/main-reducer';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
  newsPage: newsReducer,
  profilePage: profileReducer,
  mainPage: mainReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store
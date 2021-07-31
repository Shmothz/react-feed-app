import {newsReducer} from './reducers/news-reducer';
import {profileReducer} from './reducers/profile-reducer';
import {mainReducer} from './reducers/main-reducer';
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
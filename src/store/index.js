// eslint-disable-next-line         
import { createStore, combineReducers, applyMiddleware, compose } from 'redux' // combineReducers 合并 reducers  applyMiddleware 添加中间件
import reducer from './reducer'
import thunk from 'redux-thunk'

// import createSagaMiddleware from "redux-saga"
// import mySagas from "./sagas"
// const sagaMiddleware = createSagaMiddleware()
 

// export var store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    // 为了使 redux 插件起到作用
// )

// 使用 redux 提供的增强函数来同时使用 中间件和 redux devtool

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;
const enhancer = composeEnhancers(applyMiddleware(thunk))
// const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(mySagas)
export var store = createStore(reducer,enhancer)

// function user(state = {name: 'redux'}, action) {
//     // eslint-disable-next-line default-case
//     switch (action.type) {
//       case 'CHANGE_NAME':
//         return {
//           ...state,
//           name: action.name
//         }
//     }
  
//     return state
// }
  
// function project(state = {name: 'min-react'}, action) {
//     // eslint-disable-next-line default-case
//     switch (action.type) {
//       case 'CHANGE_NAME2':
//         return {
//           ...state,
//           name: action.name
//         }
//     }
  
//     return state
// }

// var rootReducer = combineReducers({
//     user,
//     project
// })
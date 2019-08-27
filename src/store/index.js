// eslint-disable-next-line         
import { createStore, combineReducers, applyMiddleware } from 'redux' // combineReducers 合并 reducers  applyMiddleware 添加中间件
import reducer from './reducer'
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

export var store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    // 为了使 redux 插件起到作用
    )
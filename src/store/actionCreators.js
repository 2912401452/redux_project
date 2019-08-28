import {
    CHANGE_INPUT,
    ADD_VALUE,
    DELETE_ITEM,
    GET_DATA
} from './actionTypes'
import axios from "axios"

export const changeInputAction = (value,)=>({
    type: CHANGE_INPUT,
    inputValue:value
})

export const addInput = ()=>({
    type: ADD_VALUE
})

export const delete_item = (value)=>({
    type:DELETE_ITEM,
    value
})

export const getData = (data)=>({
    type:GET_DATA,
    data
})

export const getMockData = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d65f3a9ad10114f6aab5dbd/redux/name2')
        .then(res => {
            console.log(res)
            const action =getData(res.data.data.names)
            dispatch(action)
        })
        .catch(err => {
            console.log(err)
        })
    }
}
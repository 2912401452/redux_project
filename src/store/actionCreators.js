import {
    CHANGE_INPUT,
    ADD_VALUE,
    DELETE_ITEM,
    GET_DATA
} from './actionTypes'

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
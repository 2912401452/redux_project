import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {store} from '../../store'
import { changeInputAction,addInput,delete_item,getData } from '../../store/actionCreators'
import {TodolistUI} from './TodolistUI'
import axios from 'axios'

export default class Todolist extends Component {
    handleStoreChange=()=>{
        // 改变 store 数据
        this.setState(store.getState());
    }
    constructor(props){
        super(props)
        this.state = store.getState()
        // 订阅 store 数据的改变
        store.subscribe(this.handleStoreChange)
    }
    handleinput = (e)=>{
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    addvalue = ()=>{
        const action = addInput()
        store.dispatch(action)
    }
    deleteItem =(key,e) => {
        console.log(e.target)
        const action = delete_item(key)
        store.dispatch(action)
    }
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
            var list = [
                '11','22','33','44'
            ]
            const action = getData(list)
            store.dispatch(action)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <TodolistUI
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    handleinput={this.handleinput}
                    addvalue={this.addvalue}
                    deleteItem={this.deleteItem}
                />
            </div>
        )
    }
}

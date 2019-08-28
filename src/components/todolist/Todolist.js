import React, { Component } from 'react'
import 'antd/dist/antd.css'
import {store} from '../../store'
import { changeInputAction,addInput,delete_item,getMockData } from '../../store/actionCreators'
import {TodolistUI} from './TodolistUI'
// import { connect } from 'react-redux'
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
        const action = getMockData()
        store.dispatch(action)
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

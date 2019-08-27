import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import 'antd/dist/antd.css'
import { store } from '../store'

import { changeInputAction,addInput,delete_item } from '../store/actionCreators'


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
    deleteItem =(key) => {
        const action = delete_item(key)
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <div>
                    <br/>
                    <Input placeholder="search..." value={this.state.inputValue } onChange={this.handleinput} style={{width:"250px"}}/>
                    <Button type="primary" onClick={this.addvalue} style={{marginLeft:"10px"}}>add</Button>
                </div>
                <div style={{margin:"10px",width:"300px"}}>
                    <List bordered dataSource={this.state.list} renderItem={(item,key)=>(
                        // {} 中传递的是表达式 所以不能直接写方法调用 而要用写一个函数
                        <List.Item onClick={()=>this.deleteItem(key)}>
                            {item}
                        </List.Item>
                    )}></List>
                </div>
            </div>
        )
    }
}

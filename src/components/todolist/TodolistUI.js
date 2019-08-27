import React from 'react'
import { Input, Button, List } from 'antd'

// 使用无状态组件可以提高性能
export const TodolistUI = (props)=>{
    return (
        <div>
            <div>
                <br/>
                <Input placeholder="search..."
                    value={props.inputValue }
                    onChange={props.handleinput} 
                    style={{width:"250px"}}/>
                <Button type="primary" 
                    onClick={props.addvalue} 
                    style={{marginLeft:"10px"}}>add</Button>
            </div>
            <div style={{margin:"10px",width:"300px"}}>
                <List bordered 
                    dataSource={props.list} renderItem={(item,key)=>(
                    // {} 中传递的是表达式 所以不能直接写方法调用 而要用写一个函数
                    <List.Item onClick={(e)=>props.deleteItem(key,e)}>
                        {item}
                    </List.Item>
                )}></List>
            </div>
        </div>
    )
}
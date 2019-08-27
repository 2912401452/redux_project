import React, { Component } from 'react'
import ContextSub from './Context_sub'
// eslint-disable-next-line
export const {Provider, Consumer} = React.createContext("defaultValue") // 创建一个当前组件树的 Context 上下文属性

export default class Context_test extends Component {
    render() {
        let person = {
            name:'Tom'
        }
        return (
            <div>
                <h1>Context Test</h1>
                {/* Provider共享容器 接收一个name属性 */}
                <Provider value={person}>
                    <p>this name value in Context is 'Tom'</p>
                    <ContextSub></ContextSub>
                </Provider>
            </div>
        )
    }
}

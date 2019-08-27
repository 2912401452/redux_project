import React, { Component } from 'react'
import { Consumer } from "./Context_test"

export default class Context_sub extends Component {
    render() {
        return (
            <div>
                <h2>this is Context_sub</h2>
                <Consumer>
                    {
                        (perosn)=>{
                            return <p>{ perosn.name }</p>
                        }
                    }
                </Consumer>
            </div>
        )
    }
}

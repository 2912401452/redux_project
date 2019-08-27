import React, { Component } from 'react'

export default class Fragment_test extends Component {
    render() {
        // return (
        //     <>
        //         <p>p1</p>
        //         <p>p2</p>
        //     </>
        // )
        return (
            <React.Fragment>
                <p>p1</p>
                <p>p2</p>
            </React.Fragment>
        )
    }
}

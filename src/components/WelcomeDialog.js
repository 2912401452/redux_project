import React, { Component } from 'react'

function FancyBorder(props) {
    return (
        <div>
            {/* { props.child() } */}
            { props.child }
        </div>
    );
}

function Chilren(){
    return (
       <div>
            <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p>
       </div>
    )
}

export default class WelcomeDialog extends Component {
    render() {
        return (
        <FancyBorder child={ <Chilren/> }>
            {/* <FancyBorder chid={ Children }> */}
            {/* <h1 className="Dialog-title">
                Welcome
            </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
            </p> */}
        </FancyBorder>
        )
    }
}

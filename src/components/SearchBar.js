import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            filter_text:"",
            is_stock:false
        }
    }
    filter_text_change = (e) => {
        // console.log(e.target.value)
        this.setState({
            filter_text:e.target.value
        })
        this.props.input_change(e.target.value,this.state.is_stock)
    }
    is_stock_change = (e) => {
        // console.log(e.target.checked)
        this.setState({
            is_stock:e.target.checked
        })
        this.props.input_change(this.state.filter_text,e.target.checked)
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.filter_text} onChange={this.filter_text_change} placeholder="Search..."/><br/>
                <input type="checkbox" checked={this.state.is_stock} onChange={this.is_stock_change}/>
                Only show products in stock
            </div>
        )
    }
}

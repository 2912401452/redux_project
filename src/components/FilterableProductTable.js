import React, { Component } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
// import PropTypes from 'prop-types'
import '../css/style.css'
// let data = [
//     {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//     {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//     {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//     {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//     {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//     {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
//   ];
export default class FilterableProductTable extends Component {
    constructor(props){
        super(props)
        this.state = {
            filterText: '', 
            inStockOnly: false
        }
        console.log(process.env)
    }
    
    handle_input(filter_text, is_stock){
        console.log(filter_text, is_stock)
        this.setState({
            filterText: filter_text, 
            inStockOnly: is_stock
        })
    }
    render() {
        return (
            <div  className="out_wrap">
                <SearchBar input_change={this.handle_input}></SearchBar>
                <ProductTable></ProductTable>
            </div>
        )
    }
}
// FilterableProductTable.prototypes={
//     name:PropTypes.string,
//     age:PropTypes.number,
//     str:PropTypes.fun

// }

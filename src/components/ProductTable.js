import React, { Component } from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'
export default class ProductTable extends Component {
    render() {
        return (
            <div>
                <h2>
                    <span>Name </span> 
                    <span> Price</span>
                </h2>
                <ProductCategoryRow></ProductCategoryRow>
                <ProductRow></ProductRow>
            </div>
        )
    }
}

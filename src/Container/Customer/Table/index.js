import React, { Component } from 'react';
import Table from './Table';
export class CustomerList extends Component {
    render() {
        return (
            <div>
                {/* <a href="/customer/new">Add new Customer</a>
                <a href="/">Delete</a> */}
                <Table />
            </div>
        )
    }
}

export default CustomerList

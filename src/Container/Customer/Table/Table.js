import React from 'react'
import ReactTable from 'react-table';
import IconButton from '@material-ui/core/IconButton';
import { Row, Col, Button, Input } from 'reactstrap';
import { withRouter } from 'react-router';

import { connect } from "react-redux";
import Data from '../../../asset/data/data'

import './Table.css';


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (

            <div >

                <ReactTable
                    data={Data ? Data : []}
                    columns={[
                        {
                            Header: () => <div className="ID">S. No.</div>,
                            accessor: 'id',
                            id: 'row',
                            className: 'ID TextCenter',
                            headerClassName: 'ID TextCenter',
                            style: {
                                textAlign: 'center', position: 'relative', marginTop: '1%'
                            },
                            sortable: false,
                            filterable: false,
                            foldable: true,
                            width: 75
                        },
                        {
                            Header: () => <div className="Header" style={{ textAlign: 'center' }} >Name</div>,
                            accessor: 'name',
                            className: 'Name TextCenter',
                            headerClassName: 'Name TextCenter',
                            style: {
                                textAlign: 'center', position: 'relative', marginTop: '1%'
                            },
                            foldable: true
                        },
                        {
                            Header: () => <div className="Header" >Email</div>,
                            accessor: 'email',
                            foldable: true,
                            className: 'company TextCenter',
                            headerClassName: 'company TextCenter',
                            style: {
                                textAlign: 'center', position: 'relative', marginTop: '1%'
                            }
                        },
                        {
                            Header: () => <div className="Header" >Phone</div>,
                            accessor: 'phone',
                            foldable: true,
                            className: 'company TextCenter',
                            headerClassName: 'company TextCenter',
                            style: {
                                textAlign: 'center', position: 'relative', marginTop: '1%'
                            }
                        },
                        {
                            Header: () => <div className="Header" >Action</div>,

                            sortable: false,
                            filterable: false,
                            className: 'Action TextCenter',
                            headerClassName: 'Action TextCenter',
                            id: 'button',
                            width: 150,
                            Cell: (row) => {
                                return (
                                    <span style={{ textAlign: 'center' }}>
                                        <IconButton onClick={() =>
                                            this.props.history.push(
                                                '/customer/new'
                                            )}>
                                            <i className="zmdi zmdi-account-add"></i>
                                        </IconButton>
                                        <IconButton
                                            onClick={() =>
                                                this.props.history.push(
                                                    '/customer/edit/' + row.row._original.id + '/'
                                                )}
                                        >
                                            <i className="zmdi zmdi-edit zmdi-hc-fnewstatusw table-icon" />
                                        </IconButton>
                                        <IconButton
                                            onClick={() => this.deletePopup(row.row._original)}
                                        >
                                            <i className="zmdi zmdi-delete zmdi-hc-fw table-icon" />
                                        </IconButton>
                                    </span>
                                );
                            }

                        },

                    ]}
                    pageSize={Data.length}
                    showPaginationBottom={false}
                />

            </div >
        );
    }
}


// const mapStateToProps = (state) => {
//     return {
//         list: state.list,
//     }
// }

// const mapDispachToProps = (dispatch) => {
//     return {
//         deleteListById: (id) => { dispatch({ type: "deleteListById", payload: { "id": id } }) },
//         pushList: (name, phone, email, designation, address, company) => {
//             dispatch({
//                 type: 'pushList',
//                 payload: {
//                     "name": name, "phone": phone, "email": email,
//                     "designation": designation, "address": address,
//                     "company": company
//                 }
//             })
//         },
//         editListById: (id, name, phone, email, designation, address, company) => {
//             dispatch({
//                 type: 'editListById',
//                 payload: {
//                     "id": id, "name": name, "phone": phone, "email": email,
//                     "designation": designation, "address": address,
//                     "company": company
//                 }
//             })
//         },
//         searchData: (searchInput) => {
//             dispatch({ type: 'searchData', payload: { "searchInput": searchInput } })
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispachToProps)(Table);

export default withRouter(Table);
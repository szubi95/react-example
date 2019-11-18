import React from "react"
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';
import Confirmation from "./Confirmation";

class ReactFromApi extends React.Component {
    state = {
        contacts: [],
        columns: [{
            dataField: 'id',
            text: 'ID'
        }, {
            dataField: 'name',
            text: 'Name'
        }, {
            dataField: 'description',
            text: 'description'
        }],
        defaultSorted: [{
            dataField: 'name',
            order: 'desc'
        }]
    };

    constructor() {
        super();

        this.beforeSave = this.beforeSave.bind(this); // tutaj bind!
    }

    componentDidMount() {
        fetch("http://localhost:8080/rest/reactrest/1.0/react/get")
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => {
                this.setState({contacts: data})
            })
            .catch(error => this.setState({error}));
    }

    beforeSave(oldValue, newValue, row, column, done) {
        console.log("Hello");

        setTimeout(() => {
            if (confirm('Do you want to accept this change?')) {
                done(true);
            } else {
                done(false);
            }
        }, 0);
        return { async: true };
    }

    render() {
        function beforeSaveCell(oldValue, newValue, row, column, done) {

            setTimeout(() => {
                if (confirm('Do you want to accep this change?')) {
                    done(true);
                } else {
                    done(false);
                }
            }, 0);
            return { async: true };
        }

        function getComponent() {
            return <Confirmation/>
        }

        return (
            <div>
                <BootstrapTable
                    bootstrap4
                    keyField='id'
                    data={this.state.contacts}
                    columns={this.state.columns}
                    defaultSorted={this.state.defaultSorted}
                    cellEdit={cellEditFactory({
                        mode: 'click',
                        beforeSaveCell,
                        afterSaveCell: (oldValue, newValue, row, column) => { getComponent() }
                    })}
                />
            </div>
        );
    }
}

export default ReactFromApi;
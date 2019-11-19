import React, { Component } from 'react';
import { render } from 'react-dom';
import 'bulma';
import confirmService from './confirmService';

class Data extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                'Eat hamburger',
                'Drink coke',
                'Go to bathroom'
            ]
        };
        this.removeItem = this.removeItem.bind(this);
    }

    async removeItem({ target: { value } }) {
        const result = await confirmService.show({
            message: 'Are you sure of delete this item?'
        });
        if (result) {
            const items = this.state.items.filter((item, index) => index !== parseInt(value));
            this.setState({ items });
        }
    }

    render() {
        const { items } = this.state;
        return (
            <div className="container-fluid">
                <h1 className="is-size-2">React Confirm as a Service</h1>
                <p>try to delete one</p>
                <h2>TODO:</h2>
                <div className="columns is-mobile is-multiline">
                    {items.map((item, index) => (
                        <div className="column is-6" key={item}>
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">{item}</p>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
                                        <button
                                            className="button is-danger"
                                            value={index}
                                            onClick={this.removeItem}
                                        >
                                            Delete
                                        </button>
                                    </p>
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Data;
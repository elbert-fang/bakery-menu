import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sortField: '',
            isDes: true
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleClassName = this.handleClassName.bind(this);
    }

    handleClick(sortKey) {
        let { isDes } = this.state;
        this.setState({
            sortField: sortKey,
            isDes: !isDes
        });
        this.props.handleSort(sortKey, isDes);
    }

    handleClassName(clickField) {
        let { sortField, isDes } = this.state;
        return (clickField === sortField) ? (isDes ? 'des' : 'asc') : '';
    }

    render() {
        const { menuData } = this.props;
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th className={this.handleClassName('id')} onClick={() => this.handleClick('id')}>ID</th>
                        <th className={this.handleClassName('type')} onClick={() => this.handleClick('type')}>Type</th>
                        <th className={this.handleClassName('name')} onClick={() => this.handleClick('name')}>Name</th>
                        <th className={this.handleClassName('topping')} onClick={() => this.handleClick('topping')}>Topping</th>
                    </tr>
                </thead>

                <tbody>
                    {menuData.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.type}</td>
                                <td>{item.name}</td>
                                <td>{item.topping}</td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
        )
    }
}

export default Table;

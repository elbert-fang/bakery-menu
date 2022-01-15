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
        let { sortField, isDes } = this.state;
        this.setState({ sortField: sortKey });
        this.props.handleSort(sortKey, isDes);
        if (sortKey = sortField) {
            this.setState(prevstate => ({ isDes: !prevstate.isDes }));
        } else {
            this.setState({ isDes: true });
        }
    }

    handleClassName(clickField) {
        let { sortField, isDes } = this.state;
        if (clickField === sortField) {
            return isDes ? 'des' : 'asc';
        }
        return '';
    }


    render() {
        const { menuData } = this.props;
        const { sortField } = this.state;
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th className={this.handleClassName('id')} name="id" onClick={e => this.handleClick('id')}>ID</th>
                        <th className={this.handleClassName('type')} name="type" onClick={e => this.handleClick('type')}>Type</th>
                        <th className={this.handleClassName('name')} name="name" onClick={e => this.handleClick('name')}>Name</th>
                        <th className={this.handleClassName('topping')} name="topping" onClick={e => this.handleClick('topping')}>Topping</th>
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

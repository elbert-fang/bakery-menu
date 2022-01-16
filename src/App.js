import React, { Component } from 'react';
import Table from './Table';
import NewItemForm from './NewItemForm';
import Search from './Search';
import data from './menu-items.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: data,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSort = this.handleSort.bind(this);
  }

  handleSubmit = (newItem) => {
    this.setState({ menuItems: [...this.state.menuItems, newItem] });
  }

  handleSearch = (search) => {
    let filteredData = data.filter(value => {
      return (
        value.id.toLowerCase().includes(search.toLowerCase()) ||
        value.name.toLowerCase().includes(search.toLowerCase()) ||
        value.type.toLowerCase().includes(search.toLowerCase()) ||
        value.topping.toLowerCase().includes(search.toLowerCase())
      );
    });
    this.setState({ menuItems: filteredData });
  }

  handleSort = (sortKey, isDes) => {
    let { menuItems } = this.state;
    let sortedData;

    if (isDes) {
      sortedData = menuItems.sort((a, b) => {
        return a[sortKey] < b[sortKey] ? -1 : 1;
      });
    } else {
      sortedData = menuItems.sort((a, b) => {
        return a[sortKey] < b[sortKey] ? 1 : -1;
      });
    }

    this.setState({ menuItems: sortedData });
  }

  render() {
    const { menuItems } = this.state;
    return (
      <div className='container'>
        <h1 className='text-center'>Activity 1 - Bakery Menu</h1>
        <Search handleSearch={this.handleSearch} />
        <Table menuData={menuItems} handleSort={this.handleSort} />
        <NewItemForm className="form" handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;

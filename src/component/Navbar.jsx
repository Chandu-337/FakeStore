import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <ul>
          <img src="https://fakestoreapi.com/icons/logo.png" alt="Logo" />
          <li>
            <h1>FashionStore</h1>
          </li>
          <i>
            <input
              type="text"
              placeholder="Search Products"
              value={this.props.searchTerm}
              onChange={this.props.handleSearch}
            />
          </i>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>Category</li>
        </ul>
      </div>
    );
  }
}

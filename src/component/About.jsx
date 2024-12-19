import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="about">
          <p>
            FakeStoreApi is a free online REST API that you can use whenever you
            need pseudo-real data for your e-commerce or shopping website
            without running any server-side code. It's awesome for teaching
            purposes, sample codes, tests, etc.
          </p>
          <div id="shop">
            <img src="https://fakestoreapi.com/icons/intro.svg" alt="" />
          </div>
        </div>
      </>
    );
  }
}

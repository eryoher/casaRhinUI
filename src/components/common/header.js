import React, { Component } from 'react'
import Menu from './menu';

export default class Header extends Component {
  render() {

    return (
      <div className="header-container">
        <div className="container-fluid">
            <Menu />
        </div>

      </div>
    )
  }
}

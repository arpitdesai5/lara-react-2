import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="https://github.com/arpitdesai5">Arpit Desai</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="add-item">Create Post</Link></li>
              <li><Link to="display-item">Post List</Link></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;
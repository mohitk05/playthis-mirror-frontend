import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import 'antd/dist/antd.css';

class App extends Component {
  isMirror = window.location.search && window.location.search.includes('?mirror')
  render() {
    return (
      <div className={this.isMirror ? "App-Mirror" : "App"}>
        <Main />
      </div>
    );
  }
}

export default App;

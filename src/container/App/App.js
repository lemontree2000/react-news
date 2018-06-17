import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import './App.less';
import IndexPc from "../../components/Index/IndexPc";
import IndexMoblie from "../../components/Index/IndexMobile";


class App extends Component {
  render() {
    return (
      <div className="App">
        <MediaQuery minDeviceWidth={1224}>
          <IndexPc />
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1224}>
          <IndexMoblie />
        </MediaQuery>
      </div>
    );
  }
}

export default App;

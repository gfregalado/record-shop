import React from 'react';
import './styles.scss';

import Navbar from '../navbar';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="banner"></div>
      </div>
    );
  }
}

export default Home;

import React from 'react';
import { Menu } from 'antd';

class Navbar extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        style={{ backgroundColor: '#F7F2EF' }}
      >
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="shop">Shop</Menu.Item>
        <Menu.Item key="news">News</Menu.Item>
        <Menu.Item key="inspiration">Inspiration</Menu.Item>
      </Menu>
    );
  }
}

export default Navbar;

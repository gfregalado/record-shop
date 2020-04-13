import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout, Row, Col } from 'antd';
import './styles.scss';

const { Header } = Layout;

class Navbar extends React.Component {
  state = {
    current: 'Home',
  };

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Layout>
        <Header style={{ padding: '0px', backgroundColor: '#F7F2EF' }}>
          <Row justify="space-around" align="middle">
            <Col span={4}>
              <div className="logo" />
            </Col>

            <Col span={8}>
              <Menu
                mode="horizontal"
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                style={{
                  backgroundColor: '#F7F2EF',
                  height: '50%',
                  border: 'none',
                }}
              >
                <Menu.Item key="Home">
                  <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item key="Shop">
                  <Link to="/shop">Shop</Link>
                </Menu.Item>

                <Menu.Item key="News">News</Menu.Item>
              </Menu>
            </Col>
            <Col span={4}>cart, user & search bar missing</Col>
          </Row>
        </Header>
      </Layout>
    );
  }
}

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import { Row, Col, Button } from 'antd';

// import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Row className="banner">
          <Col span={8}>
            <h1>オウムの記録</h1>
            <h2>PARROT RECORDS</h2>
            <Link to="/shop">
              <Button
                size="large"
                style={{
                  backgroundColor: '#f7f2ef',
                  borderColor: '#404040',
                  color: '#404040',
                  width: '230px',
                  height: '45px',
                  boxShadow: '6px 6px 0px 1px rgba(64,64,64,1)',
                  position: 'relative',
                  left: '50%',
                  marginTop: '20%',
                }}
              >
                Shop Now
              </Button>
            </Link>
          </Col>
          <Col span={16} className="bannerImage"></Col>
        </Row>
      </div>
    );
  }
}

export default Home;

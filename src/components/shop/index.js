import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import './styles.scss';
import PulseLoader from 'react-spinners/PulseLoader';
import { productslist } from '../../Services/product';

class Storefront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      load: undefined,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    productslist()
      .then((products) => {
        this.setState({
          products: products.results,
          nextPage: products.pagination.urls.next,
          lastPage: products.pagination.urls.last,
          load: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const arrayOfProducts = this.state.products.map((vinyl) => {
      return (
        <Col style={{ width: '25%', paddingLeft: '6%', paddingRight: '6%' }}>
          <Card
            key={vinyl.id}
            cover={<img alt="example" src={vinyl.cover_image} />}
          >
            <p>{vinyl.title}</p>
          </Card>
        </Col>
      );
    });

    return (
      <div className="container">
        <div>
          <h2>Search Options Coming Soons</h2>
        </div>
        <div className="site-card-wrapper">
          {!this.state.load ? (
            <div className="loadWrapper">
              <PulseLoader
                size={30}
                color={'#FD5756'}
                loading={this.state.load}
              />
            </div>
          ) : (
            <Row gutter={[48, 16]}>{arrayOfProducts}</Row>
          )}
        </div>
      </div>
    );
  }
}

export default Storefront;

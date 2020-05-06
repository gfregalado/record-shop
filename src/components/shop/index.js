import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import './styles.scss';
import PulseLoader from 'react-spinners/PulseLoader';
import { productslist } from '../../Services/product';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

class Storefront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      load: false,
      page: 1,
      apiEndpoing: `https://api.discogs.com/database/search?format=vinyl&type=release&sort=year&sort_order=desc&per_page=8&token=${process.env.REACT_APP_DISCOGS_TOKEN}`,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      this.fetchData();
    }
  }

  retrieveArtist(title) {
    const splitTitle = title.split('-');
    return splitTitle[0].trim();
  }
  retrieveAlbum(title) {
    const splitTitle = title.split('-');
    return splitTitle[1].trim();
  }

  fetchData() {
    const page = this.state.page;
    const url = this.state.apiEndpoing + '&page=' + page;
    this.setState({
      load: false,
    });
    productslist(url)
      .then((products) => {
        this.setState({
          products: products.results,
          load: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  nextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  lastPage = () => {
    this.setState({
      page: Math.max(1, this.state.page - 1),
    });
  };

  render() {
    const arrayOfProducts = this.state.products.map((product) => {
      return (
        <Col
          key={product.id}
          style={{ width: '25%', paddingLeft: '6%', paddingRight: '6%' }}
        >
          <Card
            cover={
              <img
                alt="album Cover"
                src={product.cover_image}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://londontopsoc.org/wp-content/uploads/2018/05/Placeholder.png';
                }}
              />
            }
          >
            <div className="album-details">
              <strong>
                <p style={{ marginBottom: '0px' }}>
                  {this.retrieveArtist(product.title)}
                </p>
              </strong>
              <Link
                to={{
                  pathname: `/album/${product.master_id}`,
                  albumCover: `${product.cover_image}`,
                }}
              >
                <p>{this.retrieveAlbum(product.title)}</p>
              </Link>
            </div>
          </Card>
        </Col>
      );
    });

    return (
      <div className="container">
        <div className="controlers">
          <LeftOutlined
            style={{ fontSize: '24px', paddingRight: '10px' }}
            onClick={this.lastPage}
          />
          <RightOutlined style={{ fontSize: '24px' }} onClick={this.nextPage} />
        </div>
        <div className="site-card-wrapper">
          {!this.state.load ? (
            <div className="loadWrapper">
              <PulseLoader size={30} color={'#FD5756'} />
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

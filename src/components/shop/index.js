import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import './styles.scss';
import Axios from 'axios';

class Storefront extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vinylReleases: [],
    };
  }

  getAllVinylReleases = () => {
    Axios.get(
      `https://api.discogs.com/database/search?format=vinyl&type=release&sort=year&sort_order=desc&page=1&per_page=8&token=${process.env.REACT_APP_DISCOGS_TOKEN}`
    ).then((responseFromApi) => {
      const allVinylReleases = responseFromApi.data.results;
      const nextPage = responseFromApi.data.pagination.urls.next;
      const lastPage = responseFromApi.data.pagination.urls.last;

      this.setState({
        vinylReleases: allVinylReleases,
        nextPage: nextPage,
        lastPage: lastPage,
      });
    });
  };

  componentDidMount() {
    this.getAllVinylReleases();
  }

  render() {
    const arrayOfProducts = this.state.vinylReleases.map((vinyl) => {
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
          <Row gutter={[48, 16]}>{arrayOfProducts}</Row>
        </div>
      </div>
    );
  }
}

export default Storefront;

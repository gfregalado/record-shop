import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { masterVersion } from '../../Services/product';
import PulseLoader from 'react-spinners/PulseLoader';
import './styles.scss';

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
      apiEndpoint: `https://api.discogs.com/masters/${this.props.match.params.id}`,
      master: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const url = this.state.apiEndpoint;
    this.setState({
      load: false,
    });
    masterVersion(url)
      .then((master) => {
        this.setState({
          master: master,
          load: true,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const album = this.state.master;
    let tracklist;
    if (this.state.load === true) {
      tracklist = this.state.master.tracklist.map((track) => {
        return <p>{track.title}</p>;
      });
    }

    return (
      <div className="album-container">
        {!this.state.load ? (
          <div className="loadWrapper">
            <PulseLoader size={30} color={'#FD5756'} />
          </div>
        ) : (
          <Row>
            <Col span={12}>
              <div className="art-cover">
                <img
                  alt="album Cover"
                  src={this.props.location.albumCover}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      'https://londontopsoc.org/wp-content/uploads/2018/05/Placeholder.png';
                  }}
                />
              </div>
            </Col>
            <Col span={12}>
              <h1 className="album-title">{album.title}</h1>
              <h3>
                by <Link>{album.artists[0].name}</Link>
              </h3>

              <strong>Tracklist</strong>
              <div>{tracklist}</div>
            </Col>
          </Row>
        )}
      </div>
    );
  }
}

export default Album;

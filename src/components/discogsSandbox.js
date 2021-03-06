import React from 'react';
import Axios from 'axios';

//Tests for the api call structure
class SandboxAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getArtistVinylReleases = (artistName) => {
    const artistNameCleaned = artistName.replace(/\s/g, '+');
    Axios.get(
      `https://api.discogs.com/database/search?artist=Nir&format=vinyl&type=release&sort=year&token=SnbvbMLqlVYcQKFAhbXVKWlDloxshfQpbnOEHjUq`
    ).then((responseFromApi) => {
      const artistVinylReleases = responseFromApi.data;
      this.setState({
        artistVinylReleases: artistVinylReleases,
      });
    });
  };

  componentDidMount() {}

  render() {
    return <div></div>;
  }
}

export default SandboxAPI;

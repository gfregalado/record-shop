import React from 'react';
import Axios from 'axios';

//Tests for the api call structure
class SandboxAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // mapVinylReleases = (vinylReleases) => {
  //   vinylReleases.map((master) =>
  //     Axios.get(
  //       `https://api.discogs.com/masters/${master.id}/versions?format=Vinyl`
  //     ).then((responseFromApi) => {
  //       const vinyl = responseFromApi.data;
  //       console.log(vinyl);
  //       if (vinyl.versions.length >= 1)
  //         this.setState({
  //           artistVinylAlbums: [this.state.artistVinylAlbums, vinyl.versions],
  //         });
  //     })
  //   );
  // };

  getArtistVinylReleases = (artistName) => {
    Axios.get(
      `https://api.discogs.com/database/search?artist=${artistName}&format=vinyl&type=release&sort=year&token=${process.env.REACT_APP_DISCOGS_TOKEN}`
    ).then((responseFromApi) => {
      const artistVinylReleases = responseFromApi.data;
      this.setState({
        artistVinylReleases: artistVinylReleases,
      });
    });
  };

  componentDidMount() {
    this.getArtistVinylReleases('Nirvana');
  }

  render() {
    return (
      <div>
        <h1>SANDBOX</h1>
      </div>
    );
  }
}

export default SandboxAPI;

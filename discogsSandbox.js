//Tests for the api call structure

Axios.get(
  `https://api.discogs.com/database/search?q=${process.env.DISCOGS_TOKEN}`
).then((responseFromApi) => {
  const artist = responseFromApi.data.results[0];
  console.log(artist);
  Axios.get(
    `https://api.discogs.com/artists/3814790/releases?per_page=1000`
  ).then((responseFromApi) => {
    const releases = responseFromApi.data.releases;
    console.log(releases);
    const vinylReleases = releases.filter(
      (release) => release.type === 'master' && release.artist === 'GoldLink'
    );
    console.log(vinylReleases);
    vinylReleases.map((master) =>
      Axios.get(
        `https://api.discogs.com/masters/${master.id}/versions?format=Vinyl`
      ).then((responseFromApi) => {
        const vinyl = responseFromApi.data;
        console.log(vinyl);
        if (vinyl.versions.length >= 1)
          this.setState({
            artistVinylAlbums: [this.state.artistVinylAlbums, vinyl.versions],
          });
      })
    );
  });
});

interface Track {
  id: string;
  uri: string;
  name: string;
  release_date: string;
  popularity: number;
  artist: {
    name: string;
  };
  album: {
    images: { url: string };
  };
}

function parseTracks(data: any): Track[] {
  const tracks: Track[] = [];
  if (data) {
    const items = data.tracks.items;

    for (const item of items) {
      tracks.push({
        id: item.id,
        uri: item.uri,
        name: item.name,
        release_date: item.album.release_date,
        popularity: item.popularity,
        artist: { name: item.artists[0].name },
        album: { images: item.album.images[1] },
      });
    }
  }
  return tracks;
}
export { parseTracks };

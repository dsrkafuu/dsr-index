/**
 * fetch music index
 */
async function fetchIndex() {
  const res = await fetch('/music.min.json');
  if (!res.ok) {
    return [];
  }
  const data = await res.json();
  if (!Array.isArray(data)) {
    return [];
  }

  const audios = [];
  data.forEach((album) => {
    if (!Array.isArray(album.songs)) {
      return;
    }
    album.songs.forEach((song) => {
      audios.push({});
    });
  });
}

export default async () => {
  await fetchIndex();
};

export const getGifts = async (categoria) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    categoria
  )}&limit=10&api_key=1rWd6kNTUtqzKl7v7W6EQZmshL9EFmNf`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};

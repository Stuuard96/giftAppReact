import React from "react";

const GiftGrid = ({ categoria }) => {
  const getGifts = async () => {
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Rick and Morty&limit=10&api_key=1rWd6kNTUtqzKl7v7W6EQZmshL9EFmNf";
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    console.log(gifs);
  };

  getGifts();

  return (
    <div>
      <h3>{categoria}</h3>
    </div>
  );
};

export default GiftGrid;

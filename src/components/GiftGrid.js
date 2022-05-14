import React, { useState, useEffect } from "react";
import GiftGridItem from "./GiftGridItem";

const GiftGrid = ({ categoria }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifts();
  }, []);

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
    setImages(gifs);
  };

  return (
    <div>
      <h3>{categoria}</h3>

      {images.map((img) => (
        <GiftGridItem key={img.id} {...img} />
      ))}
    </div>
  );
};

export default GiftGrid;

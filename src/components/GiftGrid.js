import React, { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifs";
import GiftGridItem from "./GiftGridItem";

const GiftGrid = ({ categoria }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifts(categoria).then(setImages);
  }, [categoria]);

  return (
    <>
      <h3 className="padd-15">{categoria}</h3>
      <div className="card-grid">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;

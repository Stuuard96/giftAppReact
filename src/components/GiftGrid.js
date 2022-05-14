import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GiftGridItem from "./GiftGridItem";

const GiftGrid = ({ categoria }) => {
  const { data: images, loading } = useFetchGifs(categoria);

  return (
    <>
      <h3 className="animate__animated animate__fadeInpadd-15">{categoria}</h3>
      {loading && (
        <p className="animate__animated  animate__flash padd-15">Loading</p>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GiftGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GiftGrid;

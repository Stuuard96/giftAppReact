import React from "react";

const GiftGridItem = ({ title, url }) => {
  /*   console.log({ title, url }); */
  return (
    <div className="card padd-15 animate__animated animate__fadeIn">
      <div className="card__content">
        <img src={url} alt={title}></img>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default GiftGridItem;

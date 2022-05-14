import React from "react";

const GiftGridItem = ({ title, url }) => {
  console.log({ title, url });
  return (
    <div>
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

export default GiftGridItem;

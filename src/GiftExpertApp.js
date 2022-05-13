import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GiftExperApp = () => {
  const [categorias, setCategorias] = useState([
    "One Punch",
    "Samurai X",
    "Dragon Ball",
  ]);

  //const handleAdd = () => {
  //    //setCategorias(["HunterXHunter", ...categorias]);
  //setCategorias((cats) => [...cats, "HunterXHunter"]);
  //};

  return (
    <>
      <h2>GiftExperApp</h2>
      <AddCategory />
      <hr />

      <ol>
        {categorias.map((categoria) => {
          return <li key={categoria}>{categoria}</li>;
        })}
      </ol>
    </>
  );
};
export default GiftExperApp;

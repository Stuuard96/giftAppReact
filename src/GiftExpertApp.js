import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

const GiftExperApp = () => {
  const [categorias, setCategorias] = useState(["Dragon Ball"]);
  /* console.log({ setCategorias }); */

  return (
    <>
      <h1 className="padd-15">Aplicación REACT Gift Apis</h1>
      <AddCategory setCategorias={setCategorias} />
      <hr className="padd-15" />
      {categorias.map((categoria) => (
        <GiftGrid key={categoria} categoria={categoria} />
      ))}
    </>
  );
};
export default GiftExperApp;

import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GiftGrid from "./components/GiftGrid";

const GiftExperApp = () => {
  const [categorias, setCategorias] = useState(["One Punch"]);

  return (
    <>
      <h2>GiftExperApp</h2>
      <AddCategory setCategorias={setCategorias} />
      <hr />
      <ol>
        {categorias.map((categoria) => (
          <GiftGrid key={categoria} categoria={categoria} />
        ))}
      </ol>
    </>
  );
};
export default GiftExperApp;

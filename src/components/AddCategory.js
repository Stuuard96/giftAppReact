import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategorias }) => {
  const [inputValue, setInputValue] = useState("");
  const HandleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias((cats) => [...cats, inputValue]);
      setInputValue("");
    }
    /* console.log("Submit hecho"); */
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={HandleInputChange}
        placeholder="Hola, escribe algo"
      />
    </form>
  );
};

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
export default AddCategory;

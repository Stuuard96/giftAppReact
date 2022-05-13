import React, { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("");
  const HandleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit hecho");
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

export default AddCategory;

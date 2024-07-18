import React from "react";
import noteImage from "../assets/note.png";

const CreateRecipeButton = ({ onClick }) => {
  return (
    <button
      className="flex flex-col justify-center items-center w-60 h-32 bg-white border-0 rounded-xl hover:-translate-y-2 focus:outline-none transition-transform duration-200"
      onClick={onClick}
    >
      <img src={noteImage} alt="create recipe" className="w-16 h-16" />
      <text>Create Recipe</text>
    </button>
  );
};

export default CreateRecipeButton;

import React, { useState } from "react";
import TimeInput from "../components/TimeInput";
import Selector from "../components/Selector";
import NumericInput from "../components/NumericInput";
import TextInput from "../components/TextInput";
import TextAreaInput from "../components/TextAreaInput";
import IngredientInputs from "../components/IngredientInputs";
import InstructionsInput from "../components/InstructionsInput";
import Button from "react-bootstrap/Button";

const CreateRecipePage = () => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [prepTime, setPrepTime] = useState(0);
  const [cookingTime, setCookingTime] = useState(0);
  const [serving, setServing] = useState(0);
  const [ingredients, setIngredients] = useState([
    { name: "", quantity: "", unit: "" },
  ]);
  const [instructions, setInstructions] = useState([
    {
      step: 1,
      description: "",
    },
  ]);

  const categories = [
    "Rice",
    "Noodle",
    "Entree",
    "Baking",
    "Hotpot",
    "Soup",
    "Drink",
    "Other",
  ];

  const addIngredient = () => {
    const newIngredient = { name: "", quantity: "", unit: "" };
    setIngredients([...ingredients, newIngredient]);
  };

  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  const updateIngredient = (index, field, value) => {
    const newIngredients = ingredients.map((ingredient, i) => {
      if (i === index) {
        return { ...ingredient, [field]: value };
      }
      return ingredient;
    });
    setIngredients(newIngredients);
  };

  const addInstruction = () => {
    const newInstruction = { step: instructions.length + 1, description: "" };
    setInstructions([...instructions, newInstruction]);
  };

  const removeInstruction = (index) => {
    const newInstructions = instructions.filter((_, i) => i !== index);
    setInstructions(newInstructions);
  };

  const updateInstruction = (index, field, value) => {
    const newInstructions = instructions.map((instruction, i) => {
      if (i === index) {
        return { ...instruction, [field]: value };
      }
      return instruction;
    });
    setInstructions(newInstructions);
  };

  return (
    <div className="flex flex-col items-center w-full h-screen">
      <div className="flex flex-col justify-start items-center w-4/6 h-auto bg-red-100 rounded-xl p-8 m-10">
        <text className="text-black text-3xl my-8">Create Your Recipe</text>
        <div className="w-full">
          <TextInput
            inputName="Recipe Name"
            value={recipeName}
            setValue={setRecipeName}
          />
        </div>
        <div className="w-full">
          <TextAreaInput
            inputName="Description"
            value={description}
            setValue={setDescription}
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center w-full">
          <TimeInput
            inputName="Prep Time"
            value={prepTime}
            setValue={setPrepTime}
          />
          <TimeInput
            inputName="Cooking Time"
            value={cookingTime}
            setValue={setCookingTime}
          />
          <NumericInput
            inputName="Servings"
            value={serving}
            setValue={setServing}
          />
        </div>
        <Selector
          inputName="Category"
          value={category}
          setValue={setCategory}
          options={categories}
        />
      </div>
      <div className="flex flex-col justify-start items-center w-4/6 h-auto bg-red-100 rounded-xl p-8 m-10">
        <text className="text-black text-3xl my-8">Ingredients</text>

        {ingredients.map((ingredient, index) => (
          <IngredientInputs
            ingredient={ingredient}
            index={index}
            updateIngredient={updateIngredient}
            removeIngredient={removeIngredient}
          />
        ))}
        <Button
          className="w-20 h-12 rounded-xl my-7 border-2 border-red-400 text-red-600 bg-red-200 hover:bg-red-300"
          onClick={addIngredient}
        >
          Add
        </Button>
      </div>
      <div className="flex flex-col justify-start items-center w-4/6 h-auto bg-red-100 rounded-xl p-8 m-10">
        <text className="text-black text-3xl my-8">Instructions</text>
        {instructions.map((instruction, index) => (
          <InstructionsInput
            instruction={instruction}
            index={index}
            updateInstruction={updateInstruction}
            removeInstruction={removeInstruction}
          />
        ))}
        <Button
          className="w-20 h-12 rounded-xl my-7 border-2 border-red-400 text-red-600 bg-red-200 hover:bg-red-300"
          onClick={addInstruction}
        >
          Add
        </Button>
      </div>
      <div>
        <Button
          className="w-40 h-12 rounded-xl my-7 border-2 border-red-400 text-red-600 bg-red-200 hover:bg-red-300"
          onClick={() => {}}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateRecipePage;

import React from "react";
import TextInput from "./TextInput";
import NumericInput from "./NumericInput";
import Selector from "./Selector";
import Button from "react-bootstrap/Button";

const IngredientInputs = ({
  ingredient,
  index,
  updateIngredient,
  removeIngredient,
}) => {
  const options = [
    "tsp",
    "tbsp",
    "cup",
    "pt",
    "quart",
    "gallon",
    "oz",
    "fl oz",
    "lb",
    "mL",
    "L",
    "g",
    "kg",
  ];

  return (
    <div
      key={index}
      className="flex flex-row flex-wrap justify-center w-full bg-red-300 rounded-xl my-3"
    >
      <TextInput
        inputName="Ingredient Name"
        value={ingredient.name}
        setValue={(value) => updateIngredient(index, "name", value)}
      />
      <NumericInput
        inputName="Quantity"
        value={ingredient.quantity}
        setValue={(value) => updateIngredient(index, "quantity", value)}
      />
      <Selector
        inputName="Unit"
        value={ingredient.unit}
        setValue={(value) => updateIngredient(index, "unit", value)}
        options={options}
      />

      <Button
        className="w-24 h-10 rounded-xl self-end my-3 border-2 border-red-400 text-red-600 bg-red-200 hover:bg-red-300"
        onClick={() => {
          removeIngredient(index);
        }}
      >
        Remove
      </Button>
    </div>
  );
};

export default IngredientInputs;

const IngredientCard = ({ ingredients }) => {
  const ingredientList = ingredients.map((ingredient) => (
    <>
      <div className="flex flex-row justify-between w-full">
        <text className="text-white text-sm my-3 ">{`${ingredient.ingredient}`}</text>
        <text className="text-white text-sm my-3 ">{`${ingredient.quantity} ${ingredient.unit} `}</text>
      </div>
      <div className="border-t border-gray-400 w-full "></div>
    </>
  ));

  return (
    <div className="flex flex-col items-start w-1/3 h-auto bg-gray-500 rounded-xl p-8 ml-10 mr-20">
      <text className="text-white text-xl font-bold my-4">Ingredients</text>
      {ingredientList}
    </div>
  );
};

export default IngredientCard;

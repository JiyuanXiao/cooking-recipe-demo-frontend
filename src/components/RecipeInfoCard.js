const RecipeInfoCard = ({ infoType, infoContent }) => {
  return (
    <div className="flex flex-col items-start w-60 h-28 border-gray-500 border-0 m-10">
      <text className="text-lg text-gray-500 my-2">{infoType}</text>
      <text className="text-2xl font-bold my-2">{infoContent}</text>
    </div>
  );
};

export default RecipeInfoCard;

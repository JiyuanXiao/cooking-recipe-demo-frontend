const DescriptionCard = ({ name, description, imageSrc }) => {
  return (
    <div className="flex flex-col items-center w-full h-auto bg-white rounded-xl p-8 ml-20 mr-10">
      <text className="text-black text-3xl font-bold my-4">Description</text>
      <text className=" text-gray-600 text-lg my-4">{description}</text>
      <img
        src={imageSrc}
        alt={name}
        className="w-4/5 h-auto object-cover my-4 rounded-2xl"
      />
    </div>
  );
};

export default DescriptionCard;

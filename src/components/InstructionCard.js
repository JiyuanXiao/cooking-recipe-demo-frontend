const instructions = [
  {
    id: 1,
    step: 1,
    description: "步骤1",
    recipe: 1,
  },
  {
    id: 2,
    step: 2,
    description: "步骤2",
    recipe: 1,
  },
  {
    id: 3,
    step: 3,
    description: "步骤3",
    recipe: 1,
  },
  {
    id: 4,
    step: 4,
    description: "步骤4",
    recipe: 1,
  },
  {
    id: 5,
    step: 5,
    description: "步骤5",
    recipe: 1,
  },
];

const InstructionCard = () => {
  const instructionList = instructions.map((instruction) => (
    <>
      <div className="flex flex-row justify-start w-full">
        <text className="text-red-400 text-3xl m-3 ">{`${instruction.step}`}</text>
        <text className="text-gray-700 text-sm my-3 ">{`${instruction.description}`}</text>
      </div>
      <div className="border-t border-gray-400 w-full "></div>
    </>
  ));

  return (
    <div className="flex flex-col items-start w-4/6 h-auto bg-white rounded-xl p-8 m-10">
      <text className="text-black text-3xl font-bold my-4">Instruction</text>
      {instructionList}
    </div>
  );
};

export default InstructionCard;

import TextAreaInput from "./TextAreaInput";
import Button from "react-bootstrap/Button";

const InstructionsInput = ({
  instruction,
  index,
  updateInstruction,
  removeInstruction,
}) => {
  return (
    <div
      key={index}
      className="relative flex flex-row justify-center items-end w-full"
    >
      <div className="w-4/5">
        <TextAreaInput
          inputName=""
          value={instruction.description}
          setValue={(value) => {
            updateInstruction(index, "description", value);
          }}
        />
      </div>
      <Button
        className="w-24 h-10 rounded-xl my-3 border-2 border-red-400 text-red-600 bg-red-200 hover:bg-red-300"
        onClick={() => {
          removeInstruction(index);
        }}
      >
        Remove
      </Button>
    </div>
  );
};

export default InstructionsInput;

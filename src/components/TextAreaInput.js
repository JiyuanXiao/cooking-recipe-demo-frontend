const TextAreaInput = ({ inputName, value, setValue }) => {
  return (
    <div className="flex flex-col items-center w-auto my-3">
      <text className="text-gray-600 font-bold m-2">{inputName}</text>
      <textarea
        className=" w-3/4 h-32 border-2 border-red-400 rounded-lg p-1"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default TextAreaInput;

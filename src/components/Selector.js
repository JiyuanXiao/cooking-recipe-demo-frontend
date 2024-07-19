const Selector = ({ inputName, value, setValue, options }) => {
  const optionList = options.map((option) => (
    <option value={option}>{option}</option>
  ));

  return (
    <div className="w-auto min-w-64 flex flex-col items-center my-3">
      <text className=" text-gray-600 font-bold m-2">{inputName}</text>
      <select
        className="w-3/4 h-10 border-2 border-red-400 rounded-lg p-1"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      >
        <option value="">---</option>
        {optionList}
      </select>
    </div>
  );
};

export default Selector;

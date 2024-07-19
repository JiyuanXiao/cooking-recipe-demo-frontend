const TimeInput = ({ inputName, value, setValue }) => {
  return (
    <div className="w-auto flex flex-col items-center my-3">
      <text className=" text-gray-600 font-bold m-2">{inputName}</text>
      <div className="relative">
        <input
          className=" w-3/4 h-10 border-2 border-red-400 rounded-lg p-2"
          value={value}
          onChange={(event) => {
            const value = event.target.value;
            if (/^\d*$/.test(value)) {
              // Check if the value is numeric or empty
              setValue(value);
            }
          }}
        />
        <span className="absolute right-10 py-2 text-gray-600">min</span>
      </div>
    </div>
  );
};

export default TimeInput;

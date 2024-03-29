/* eslint-disable react/prop-types */


const DateInput = ({ Icon }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    // onChange(e.target.value)
  };

  return (
    <div className="p-2 rounded flex justify-between items-center bg-[#00575763]">
      <input
        type="date"
        onChange={handleChange}
        className="placeholder-[#007C7C] text-gray-200 text-sm outline-none border-none bg-transparent pr-3 appearance-none"
      />

      <Icon className="text-primary-300" />
    </div>
  );
};

export default DateInput;

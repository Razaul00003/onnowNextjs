import { useState } from "react";

function DateInputField() {
  const [date, setDate] = useState("");

  const handleChange = (event) => {
    setDate(event.target.value);
  };

  return (
    <div className="relative   flex-grow">
      <input
        type="date"
        value={date}
        onChange={handleChange}
        className="block w-full mt-2  pr-8 p-6 leading-tight bg-gray-100 border border-gray-400 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none"></div>
    </div>
  );
}

export default DateInputField;

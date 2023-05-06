import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersData, setOrdersData } from "../../GlobalRedux/orderSlice";

const Dropdown = ({ type }) => {
  const [selectedOption, setSelectedOption] = useState("Onnow");
  const orderData = useSelector((state) => state.orders.data);
  const [options, setOptions] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (type == "brandName" && orderData) {
      const brands = new Set(orderData.map((item) => item.outlet.brandName));
      setOptions(brands);
    }
  }, [orderData, type]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);

    if (type === "brandName" && selectedOption && options) {
      orders = orderData.filter(
        (item) => item.outlet.brandName === selectedOption
      );
      dispatch(setOrdersData(orders));
    }
    setIsOpen(false);
  };

  return (
    <div className="relative flex-grow inline-block text-left py-2 ">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-400 px-4 p-6 bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption}
            <HiChevronDown className="-mr-1 ml-2 h-5 w-5" />
          </button>
        </span>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg">
          <div className="rounded-md bg-white shadow-xs">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              {Array.from(options).map((option) => (
                <button
                  key={option}
                  className="block px-4 py- text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Dropdown;

import { useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersData, setOrdersData } from "../../GlobalRedux/orderSlice";

const SearchBox = ({ placeholder, search }) => {
  const inputRef = useRef(null);
  let orders = [];
  const orderData = useSelector((state) => state.orders.data);
  const dispatch = useDispatch();
  if (orderData) orders = orderData;

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const onSearch = () => {
    if (search == "byId" && searchTerm) {
      orders = orderData.filter(
        (item) => item.orderId == searchTerm.toUpperCase()
      );
      dispatch(setOrdersData(orders));
    }
    if (search == "byName" && searchTerm) {
      orders = orderData.filter(
        (item) =>
          item.customer.username.toUpperCase() == searchTerm.toUpperCase()
      );
      dispatch(setOrdersData(orders));
    }
    if (search == "byPhoneNumber" && searchTerm) {
      orders = orderData.filter(
        (item) =>
          item.customer.phoneNumber.toUpperCase() == searchTerm.toUpperCase()
      );
      dispatch(setOrdersData(orders));
    }
  };

  return (
    <div className="flex flex-grow items-center rounded-full bg-gray-100 px-4 py-2">
      <BsSearch onClick={onSearch} className="w-5 h-10 ml-2 text-gray-500" />

      <input
        type="text"
        className="w-full bg-transparent focus:outline-none"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;

import React from "react";
import SearchBox from "../Filter/SearchBox";
import Dropdown from "../Filter/Dropdown";
import DateInputField from "../Filter/DateInput";
import { useDispatch, useSelector } from "react-redux";

const FilterBox = () => {
  return (
    <>
      <div className="flex gap-2 flex-col md:flex-row justify-between">
        <SearchBox placeholder="Search by Order Id" search="byId" />
        <SearchBox placeholder="Search by Customer Name" search="byName" />
        <SearchBox
          placeholder="Search by Phone Number"
          search="byPhoneNumber"
        />
        <Dropdown type="brandName" />
      </div>
      <div className="flex gap-2 flex-col md:flex-row justify-between">
        <Dropdown type="paymentMethod" />
        <Dropdown type="orderType" />
        <Dropdown type="channel" />
        <DateInputField />
        <Dropdown type="orderStatus" />
        <button className="bg-primary text-white p-6 rounded-md">
          Clear Filter
        </button>
      </div>
    </>
  );
};

export default FilterBox;

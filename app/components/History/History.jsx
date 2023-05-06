import React from "react";
import OrdersTable from "./OrdersTable";
import Brands from "./Brands";
import FilterBox from "./FilterBox";

const History = () => {
  return (
    <div className="my-3 mt-8 p-3 ">
      <p className="text-4xl text-gray-600 font-bold">Order History </p>
      <Brands />
      <FilterBox />
      <OrdersTable />
    </div>
  );
};

export default History;

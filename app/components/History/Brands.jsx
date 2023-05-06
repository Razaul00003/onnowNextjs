import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

const Brands = () => {
  let companies = [];
  let orders = [];
  const orderData = useSelector((state) => state.orders.data);
  if (orderData) orders = orderData;
  companies = new Set(orders.map((item) => item.outlet.brandName));

  return (
    <div
      className=" my-4 p-4 flex gap-4 justify-between flex-wrap flex-row  "
      style={{ scrollbarWidth: "none" }}
    >
      {Array.from(companies).map((item, index) => (
        <div
          key={item}
          className={` p-3 md:p-10 shadow-lg rounded-md ${
            index == 0 ? "bg-primary text-white border-2 border-red-600" : ""
          }`}
        >
          <p
            className={` text-primary text-3xl ${
              index == 0 ? "text-white " : ""
            }`}
          >
            {item}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Brands;

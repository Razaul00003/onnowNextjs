"use client";
import React, { useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import { FaShapes } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLogoutBoxLine } from "react-icons/ri";
import { HiChatAlt } from "react-icons/hi";
import Link from "next/link";
import axios from "axios";

const MenuItem = ({ icon, text, active }) => {
  const renderIcon = () => {
    if (icon == "Dashboard") return <MdDashboard size={24} />;
    if (icon == "Live Orders") return <MdMessage size={24} />;
    if (icon == "Inventory") return <BiCube size={24} />;
    if (icon == "Brands") return <FaShapes size={24} />;
    if (icon == "Menu") return <MdDashboard size={24} />;
    if (icon == "Customers") return <MdRestaurantMenu size={24} />;
    if (icon == "Order Histroy") return <HiChatAlt size={24} />;
    if (icon == "Edit Profile") return <BsFillPersonFill size={24} />;
    if (icon == "Logout") return <RiLogoutBoxLine size={24} />;
  };

  return (
    <Link href={`/${text}`}>
      <div
        onClick={() => {}}
        className={`flex flex-row   py-4 border-b-2 gap-3 ${
          active ? "text-primary font-bold" : "text-gray-600"
        }`}
      >
        {renderIcon()}
        <span className="text-xl ">{text}</span>
      </div>
    </Link>
  );
};

export default MenuItem;

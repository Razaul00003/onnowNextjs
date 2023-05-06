"use client";
import React, { useState } from "react";
import MenuItem from "./MenuItem";

const SidebarMenu = () => {
  const [showMenu, setShowMenu] = useState(true);
  return showMenu ? (
    <div className="mr-2 md:mr-0 md:flex flex-col justify-center items-center">
      <div className="">
        <MenuItem icon="Dashboard" text="Dashboard" />
        <MenuItem icon="Live Orders" text="Live Orders" />
        <MenuItem icon="Inventory" text="Inventory" />
        <MenuItem icon="Brands" text="Brands" />
        <MenuItem icon="Menu" text="Menu" />
        <MenuItem icon="Customers" text="Customers" />
        <MenuItem icon="Order Histroy" active text="Order Histroy" />
        <MenuItem icon="Edit Profile" text="Edit Profile" />
        <MenuItem icon="Logout" text="Logout" />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default SidebarMenu;

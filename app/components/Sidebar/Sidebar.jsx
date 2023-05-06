import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  return (
    <div className=" flex-grow  flex-row md:flex-col justify-between ">
      <div className="flex flex-row justify-between md:justify-center bg-primary">
        <div className="md:hidden pl-4 text-white flex flex-row justify-center items-center">
          {!open ? (
            <GiHamburgerMenu size={28} onClick={toggleMenu} />
          ) : (
            <AiOutlineClose size={28} onClick={toggleMenu} />
          )}
        </div>
        <div className="bg-red p-4 flex flex-row justify-center items-center">
          <Image
            src="/images/onnowlogo.png"
            width={40}
            height={30}
            alt="onnoow logo"
          />
          <p className="text-white border-r-2  p-2 py-2 text-3xl border-white">
            ONNOW
          </p>
          <div className="rounded ml-2 h-10 w-10 bg-white flex items-center justify-center text-primary font-bold text-4xl">
            o
          </div>
        </div>
      </div>
      <div className={` ${open ? "flex flex-col" : "hidden"} md:block`}>
        <SidebarMenu />
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container-fluid flex flex-col  md:flex-row justify-between ">
      {children}
    </div>
  );
};

export default Container;

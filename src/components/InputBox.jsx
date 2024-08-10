import React from "react";

export const InputBox = ({ icon, placeholder, value, onChangeFun }) => {
  return (
    <div>
      {icon}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

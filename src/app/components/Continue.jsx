import React from "react";

export const Continue = ({ onClick, button, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-black text-white w-full h-9 flex justify-center items-center rounded-2xl cursor-pointer disabled:cursor-not-allowed hover:opacity-70"
    >
      <p>{button}</p>
      <img src="./chevron_right.svg" />
    </button>
  );
};

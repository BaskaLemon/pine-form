import React from "react";

export const Continue = ({ onClick, button }) => {
  return (
    <button
      onClick={onClick}
      className="bg-black text-white w-full h-9 flex justify-center items-center rounded-2xl "
    >
      <p>{button}</p>
      <img src="./chevron_right.svg" />
    </button>
  );
};

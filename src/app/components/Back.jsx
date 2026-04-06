import React from "react";

export const Back = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="border w-32 rounded-2xl flex justify-center items-center hover:bg-stone-200 cursor-pointer"
    >
      <img src="./chevron_left.svg" />
      <p>Back</p>
    </button>
  );
};

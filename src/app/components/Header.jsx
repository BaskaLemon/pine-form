import React from "react";

export const Header = () => {
  return (
    <div>
      <div
        className="size-16 bg-cover bg-center"
        style={{ backgroundImage: "url(./pinelogo.png)" }}
      ></div>

      <div className="text-black text-shadow-lg text-3xl font-bold">
        Join Us! 😎
      </div>

      <div className="text-gray-500 text[18px]">
        Please provide all current information accurately.
      </div>
    </div>
  );
};

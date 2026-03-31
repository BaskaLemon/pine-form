import React from "react";

export const Names = ({}) => {
  return (
    <div className="flex flex-col gap-3 items-start ">
      <div className="flex flex-col gap-2 items-stretch w-full">
        <p className="text-blue-950">First Name</p>
        <input className=" h-9 border rounded-xs text-black" />
      </div>
      <div className="flex flex-col gap-2 items-stretch w-full">
        <p className="text-blue-950">Last Name</p>
        <input className=" h-9 border rounded-xs text-black" />
      </div>
      <div className="flex flex-col gap-2 items-stretch w-full">
        <p className="text-blue-950">Username</p>
        <input className=" h-9 border rounded-xs text-black" />
      </div>
    </div>
  );
};

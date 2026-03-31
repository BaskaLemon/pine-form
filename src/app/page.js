"use client";
import Image from "next/image";
import { Header } from "./components/Header";
import { Names } from "./components/Names";
import { Continue } from "./components/Continue";
import { Back } from "./components/Back";
import { useState } from "react";

export default function Home() {
  const [names, setNames] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });

  const [error, setError] = useState("");
  if (firstname.trim()) {
    error.name = "Name is required";
  } else if ("/[^a-zA-Z0-9\s.\-]/".test(names.name)) {
    error.name = "No special characters allowed";
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col w-120 h-163.75 p-8 justify-between items-start shadow-2xl">
        <div className="flex flex-col gap-7 w-full">
          <Header />
          <Names />
        </div>
        <div className="flex flex-col w-full">
          <Continue />
        </div>
      </div>
    </div>
  );
}

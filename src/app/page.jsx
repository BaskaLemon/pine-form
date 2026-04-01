"use client";
import Image from "next/image";
import { Header } from "./components/Header";
import { InputField } from "./components/InputField";
import { Continue } from "./components/Continue";
import { Back } from "./components/Back";
import { useState } from "react";

export default function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");

  const isFirstNameValid = () => {
    if (firstname === "") return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(firstname))
      return "First name cannot contain special characters or numbers.";
  };
  const isLastNameValid = () => {
    if (lastname === "") return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(lastname))
      return "Last name cannot contain special characters or numbers.";
  };
  const isUserNameValid = () => {
    if (username === "") return "Username cannot be empty...";
    if (username === "Lemon")
      return "This username is already taken. Please choose another one.";
  };
  const onClick = () => {};

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col w-120 h-163.75 p-8 justify-between items-start shadow-2xl">
        <div className="flex flex-col gap-7 w-full">
          <Header />
          <InputField
            value={firstname}
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
            error={isFirstNameValid()}
            required={true}
            label="First name"
            placeholder="Placeholder"
          />
          <InputField
            value={lastname}
            onChange={(e) => {
              setLastname(e.target.value);
            }}
            error={isLastNameValid()}
            required={true}
            label="Last name"
            placeholder="Placeholder"
          />
          <InputField
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            error={isUserNameValid()}
            required={true}
            label="Last name"
            placeholder="Placeholder"
          />
        </div>
        <div className="flex flex-col w-full">
          <Continue />
        </div>
      </div>
    </div>
  );
}

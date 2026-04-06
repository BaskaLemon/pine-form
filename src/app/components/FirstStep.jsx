"use client";
import React, { useState } from "react";
import { Header } from "./Header";
import { InputField } from "./InputField";
import { Continue } from "./Continue";

export const FirstStep = ({
  currentStep,
  nextStep,
  form,
  setForm,
  errors,
  setErrors,
  touched,
  setTouched,
}) => {
  const isFirstNameValid = (value) => {
    if (!value) return "First name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value))
      return "First name cannot contain special characters or numbers.";
    return "";
  };
  const isLastNameValid = (value) => {
    if (!value) return "Last name cannot be empty...";
    if (!/^[A-Za-z-]+$/.test(value))
      return "Last name cannot contain special characters or numbers.";
    return "";
  };
  const isUserNameValid = (value) => {
    if (!value) return "Username cannot be empty...";
    if (value === "Lemon")
      return "This username is already taken. Please choose another one.";
    return "";
  };
  const isHavingError = () => {
    return (
      isFirstNameValid(form.firstname) !== "" ||
      isLastNameValid(form.lastname) !== "" ||
      isUserNameValid(form.username) !== ""
    );
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <Header />
        <InputField
          value={form.firstname}
          onChange={(e) => {
            setTouched({ ...touched, firstname: true });
            const value = e.target.value;
            setErrors({
              ...errors,
              firstname: isFirstNameValid(value),
            });
            setForm({ ...form, firstname: value });
          }}
          error={errors.firstname}
          required={true}
          label="First name"
          placeholder="Placeholder"
          touched={touched.firstname}
        />
        <InputField
          value={form.lastname}
          onChange={(e) => {
            setTouched({ ...touched, lastname: true });
            const value = e.target.value;
            setErrors({
              ...errors,
              lastname: isLastNameValid(value),
            });
            setForm({ ...form, lastname: value });
          }}
          error={errors.lastname}
          required={true}
          label="Last name"
          placeholder="Placeholder"
          touched={touched.lastname}
        />
        <InputField
          value={form.username}
          onChange={(e) => {
            setTouched({ ...touched, username: true });
            const value = e.target.value;
            setErrors({
              ...errors,
              username: isUserNameValid(value),
            });
            setForm({ ...form, username: value });
          }}
          error={errors.username}
          required={true}
          label="Username"
          placeholder="Placeholder"
          touched={touched.username}
        />
      </div>
      <div>
        <Continue
          onClick={nextStep}
          disabled={isHavingError()}
          button={`Continue ${currentStep}/3`}
        />
      </div>
    </div>
  );
};

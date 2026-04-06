"use client";
import React, { useState } from "react";
import { Header } from "./Header";
import { InputField } from "./InputField";
import { Back } from "./Back";
import { Continue } from "./Continue";

export const SecondStep = ({
  currentStep,
  nextStep,
  prevStep,
  form,
  setForm,
  errors,
  setErrors,
  touched,
  setTouched,
}) => {
  const isEmailValid = (value) => {
    if (!value) return "Email cannot be empty...";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value))
      return "Please provide a valid email address.";
    return "";
  };
  const isPhoneValid = (value) => {
    if (!value) return "Phone number cannot be empty...";
    if (!/^\+?[1-9][0-9]{7,14}$/.test(value))
      return "Please enter a valid phone number.";
    return "";
  };
  const isPasswordValid = (value) => {
    if (!value) return "Password cannot be empty...";
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        value,
      )
    )
      return "Password must be 8 characters long and must include lowercase, uppercase letters, one digit and a special character";
    return "";
  };

  const isConfrimPassValid = (value) => {
    if (!value) return "Password cannot be empty...";
    if (value !== form.password)
      return "Passwords don't match. Please try again.";
    return "";
  };
  const isHavingError = () => {
    return (
      isEmailValid(form.email) !== "" ||
      isPhoneValid(form.phone) !== "" ||
      isPasswordValid(form.password) !== "" ||
      isConfrimPassValid(form.confirmPass) !== ""
    );
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <Header />
        <InputField
          value={form.email}
          onChange={(e) => {
            setTouched({ ...touched, email: true });
            const value = e.target.value;
            setForm({ ...form, email: value });
            setErrors({ ...errors, email: isEmailValid(value) });
          }}
          error={errors.email}
          required={true}
          label="Email"
          placeholder="Placeholder"
          touched={touched.email}
        />
        <InputField
          value={form.phone}
          onChange={(e) => {
            setTouched({ ...touched, phone: true });
            const value = e.target.value;
            setForm({ ...form, phone: value });
            setErrors({ ...errors, phone: isPhoneValid(value) });
          }}
          error={errors.phone}
          required={true}
          label="Phone"
          placeholder="Placeholder"
          touched={touched.phone}
        />
        <InputField
          value={form.password}
          onChange={(e) => {
            setTouched({ ...touched, password: true });
            const value = e.target.value;
            setForm({ ...form, password: value });
            setErrors({ ...errors, password: isPasswordValid(value) });
          }}
          error={errors.password}
          required={true}
          label="Password"
          placeholder="Placeholder"
          touched={touched.password}
        />
        <InputField
          value={form.confirmPass}
          onChange={(e) => {
            setTouched({ ...touched, confirmPass: true });
            const value = e.target.value;
            setForm({ ...form, confirmPass: value });
            setErrors({
              ...errors,
              confirmPass: isConfrimPassValid(value),
            });
          }}
          error={errors.confirmPass}
          required={true}
          label="Confirm Password"
          placeholder="Placeholder"
          touched={touched.confirmPass}
        />
      </div>
      <div className="flex gap-2.5 w-full">
        <Back onClick={prevStep} />
        <Continue
          onClick={nextStep}
          disabled={isHavingError()}
          button={`Continue ${currentStep}/3`}
        />
      </div>
    </div>
  );
};

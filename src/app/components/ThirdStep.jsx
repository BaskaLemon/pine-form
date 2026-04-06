"use client";
import React, { useState } from "react";
import { Header } from "./Header";
import { InputField } from "./InputField";
import { Back } from "./Back";
import { Continue } from "./Continue";
import { ImageField } from "./ImageField";

export const ThirdStep = ({
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
  const isDateValid = (value) => {
    if (!value) return "Please select a date.";
    return "";
  };
  const isPictureValid = (file) => {
    if (!file) return "Image cannot be blank";
    return "";
  };
  const isHavingError = () => {
    return isDateValid(form.date) !== "" || isPictureValid(form.picture) !== "";
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <Header />
        <InputField
          value={form.date}
          type={"date"}
          onChange={(e) => {
            setTouched({ ...touched, date: true });
            const value = e.target.value;
            setForm({ ...form, date: value });
            setErrors({ ...errors, date: isDateValid(value) });
          }}
          error={errors.date}
          required={true}
          label="Date of birth"
          touched={touched.date}
        />
        <ImageField
          value={form.picture}
          onChange={(e) => {
            setTouched({ ...touched, picture: true });
            const file = e.target.files?.[0];
            if (!file) return;
            const imageValue = URL.createObjectURL(file);
            setForm({ ...form, picture: imageValue });
            setErrors({ ...errors, picture: isPictureValid(imageValue) });
          }}
          onCancel={() => {
            setForm({ ...form, picture: "" });
            setErrors({ ...errors, picture: "Image cannot be blank" });
            setTouched({ ...touched, picture: true });
          }}
          required={false}
          label="Profile Image"
          touched={touched.picture}
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

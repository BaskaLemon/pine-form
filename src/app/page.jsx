"use client";
import { useState } from "react";
import { FirstStep } from "./components/FirstStep";
import { SecondStep } from "./components/SecondStep";
import { ThirdStep } from "./components/ThirdStep";
import { FourthSet } from "./components/FourthSet";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPass: "",
    date: "",
    picture: "",
  });
  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPass: "",
    date: "",
    picture: "",
  });
  const [touched, setTouched] = useState({
    firstname: false,
    lastname: false,
    username: false,
    email: false,
    phone: false,
    password: false,
    confirmPass: false,
    date: false,
    picture: false,
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col w-120 h-fit p-8 gap-6 justify-between items-start shadow-2xl">
        <div className="flex flex-col gap-7 w-full">
          {currentStep === 1 && (
            <FirstStep
              nextStep={nextStep}
              currentStep={currentStep}
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              touched={touched}
              setTouched={setTouched}
            />
          )}
          {currentStep === 2 && (
            <SecondStep
              nextStep={nextStep}
              prevStep={prevStep}
              currentStep={currentStep}
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              touched={touched}
              setTouched={setTouched}
            />
          )}
          {currentStep === 3 && (
            <ThirdStep
              nextStep={nextStep}
              prevStep={prevStep}
              currentStep={currentStep}
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              touched={touched}
              setTouched={setTouched}
            />
          )}
          {currentStep === 4 && <FourthSet />}
        </div>
      </div>
    </div>
  );
}

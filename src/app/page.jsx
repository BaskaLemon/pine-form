"use client";
import { useEffect, useState } from "react";
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
  const [form, setForm] = useState(null);
  const [errors, setErrors] = useState(null);
  const [touched, setTouched] = useState(null);
  useEffect(() => {
    if (form !== null) {
      localStorage.setItem("form", JSON.stringify(form));
    } else {
      const storedForm = JSON.parse(localStorage.getItem("form"));
      if (storedForm) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setForm(storedForm);
      } else {
        setForm({
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
      }
    }
  }, [form]);
  useEffect(() => {
    if (errors !== null) {
      localStorage.setItem("errors", JSON.stringify(errors));
    } else {
      const storedError = JSON.parse(localStorage.getItem("errors"));
      if (storedError) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setErrors(storedError);
      } else {
        setErrors({
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
      }
    }
  }, [errors]);
  useEffect(() => {
    if (touched !== null) {
      localStorage.setItem("touched", JSON.stringify(touched));
    } else {
      const storedTouched = JSON.parse(localStorage.getItem("touched"));
      if (storedTouched) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setErrors(storedTouched);
      } else {
        setErrors({
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
      }
    }
  }, [touched]);
  if (!form) return null;
  if (!errors) return null;
  if (!touched) return null;
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col w-120 h-fit p-8 gap-6 justify-between items-start shadow-2xl rounded-2xl">
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

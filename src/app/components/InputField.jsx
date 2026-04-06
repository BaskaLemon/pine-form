import React from "react";

export const InputField = (props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
    error,
    type = "text",
    required = false,
    size = true,
    touched,
  } = props;
  return (
    <div className="space-y-2">
      <label className="font-semibold text-sm text-black">
        {label}{" "}
        {required && (!touched || error) && (
          <span className="text-[#E14942]">*</span>
        )}
      </label>
      <input
        className={`w-full ${size ? "h-11" : "h-56"} rounded-lg border text-black  p-3 ${error ? "border-[#E14942]" : "border-[#CBD5E1]"}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
      {error && <p className="text-sm text-[#E14942]">{error}</p>}
    </div>
  );
};

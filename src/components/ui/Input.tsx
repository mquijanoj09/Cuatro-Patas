"use client";
import { FieldError, UseFormRegister } from "react-hook-form";

interface InputProps {
  inputText: string;
  inputType: string;
  error?: FieldError;
  label: string;
  register: UseFormRegister<any>;
  className?: string;
}

export default function Input({
  inputText,
  inputType,
  error,
  register,
  label,
  className,
}: InputProps) {
  return (
    <div className="relative flex w-full h-full flex-col items-center">
      <input
        className={`${
          className ||
          "w-full h-12 px-3 placeholder-gray-300 border rounded-lg focus:outline-main"
        }`}
        type={inputType}
        placeholder={inputText}
        {...register(label)}
      />
      {error && (
        <p className="absolute -bottom-4 text-[9px] text-red-600">
          {error?.message}
        </p>
      )}
    </div>
  );
}

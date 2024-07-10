import React from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
export default function AuthInput({
  type,
  name,
  id,
  placeholder,
  errors,
  register = () => {},
}) {
  const [show, setShow] = useState(false);
  const onToggleShow = () => setShow(!show);
  const isPassword = type === "password";
  return (
    <div className="pb-2 pt-4">
      <div className="flex gap-2 items-center bg-black hover:border border-white">
        <input
          type={!isPassword ? type : isPassword && show ? "text" : type}
          id={id}
          placeholder={placeholder}
          className="block w-full outline-0  p-4 text-lg rounded-sm bg-black"
          {...register(name)}
          hidden={false}
        />
        {isPassword && (
          <div>
            {show ? (
              <EyeIcon
                onClick={onToggleShow}
                className="h-6 w-6 mx-3  text-gray-200 hover:cursor-pointer hover:text-gray-500"
              />
            ) : (
              <EyeSlashIcon
                onClick={onToggleShow}
                className="h-6 w-6 mx-3 text-gray-200 hover:cursor-pointer hover:text-gray-500"
              />
            )}
          </div>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-800 mt-2 text-base md:text-base  text-left ml-1">
          {errors[name]?.message}
        </p>
      )}
    </div>
  );
}

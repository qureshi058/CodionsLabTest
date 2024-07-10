import React from "react";
import { bgImageUrl } from "../Constant/Data";

export default function AuthFirstSection() {
  return (
    <div
    className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
    style={{
      backgroundImage:`url(${bgImageUrl})`,
    }}
  >
    <div className="absolute bg-black opacity-60 inset-0 z-0" />
    <div className="w-full px-24 z-10">
      <h1 className="text-5xl font-bold text-left tracking-wide">
        Keep it special
      </h1>
      <p className="text-3xl my-4">
      Simplify your workload with seamless organization and productivity tools.
      </p>
    </div>
  </div>
  );
}

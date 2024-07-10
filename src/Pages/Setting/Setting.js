import React, { useState } from "react";
import {useSetting} from "./useSetting";

function Setting({}) {
const {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    onSubmit
}=useSetting()

  return (
    <div
      className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold
                   shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl"
    >
      <h3 className=" text-lg ">Profile</h3>

      <div className="mt-8 flex flex-col space-y-1">
        <label className="  text-sm dark:text-white text-gray-500">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="task-name-input"
          type="text"
          className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
          placeholder="e.g John Doe"
        />
      </div>
      <div className="mt-8 flex flex-col space-y-1">
        <label className="  text-sm dark:text-white text-gray-500">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="task-name-input"
          type="email"
          className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
          placeholder="e.g john@example.com"
        />
      </div>
      <div className="mt-8 flex flex-col space-y-1">
        <label className="  text-sm dark:text-white text-gray-500">
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="task-name-input"
          type="password"
          className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
        />
      </div>

      <button
        onClick={onSubmit}
        className="mt-8 w-full items-center text-white bg-[#635fc7] py-2 rounded-full "
      >
        {" Save "}
      </button>
    </div>
  );
}

export default Setting;

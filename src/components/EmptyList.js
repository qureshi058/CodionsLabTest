import React, { useState } from "react";

function EmptyList({  }) {
  return (
    <div className=" bg-white dark:bg-[#2b2c37] h-screen w-screen flex flex-col  items-center justify-center">
      <h3 className=" text-gray-500 font-bold">
        { "There are no projects available. "}
      </h3>

    </div>
  );
}

export default EmptyList;

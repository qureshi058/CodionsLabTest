import React from "react";

export default function Loader() {
  return (
    <div class="modal z-200 flex items-center justify-center h-full min-h-screen w-screen fixed top-0 bg-black/70 overflow-hidden">
      {/* <div class="relative">
        <div class="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
        <div class="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-secondary animate-spin"></div>
      </div> */}
      <div className="relative inline-flex">
        <div className="w-10 h-10 bg-secondary rounded-full" />
        <div className="w-10 h-10 bg-secondary rounded-full absolute top-0 left-0 animate-ping" />
        <div className="w-10 h-10 bg-secondary rounded-full absolute top-0 left-0 animate-pulse" />
      </div>
    </div>
  );
}

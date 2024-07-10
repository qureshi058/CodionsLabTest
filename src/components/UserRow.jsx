import React, { useState } from "react";
import { format } from "date-fns";
export default function UserRow({deleteUser,user}) {
 
  return (
    <tr key={user.id} className="bg-white transition-all duration-500 hover:bg-gray-50">
    <td className="p-5">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
        />
      </div>
    </td>
    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
      {user.id}
    </td>
    <td className="p-5">
      <div className="flex items-center gap-3">
        <img
          src="https://i.pinimg.com/280x280_RS/79/dd/11/79dd11a9452a92a1accceec38a45e16a.jpg"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-normal text-sm text-gray-900">{user.name}</p>
          <p className="font-normal text-xs leading-5 text-gray-400">{user.email}</p>
        </div>
      </div>
    </td>
    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
      {user.role}
    </td>
    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
      {format(new Date(user.created_at), "MM/dd/yyyy")}
    </td>
    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
      <div
        className={`py-1.5 px-2.5 rounded-full flex justify-center items-center gap-1 ${
          user.is_active === 1
            ? "bg-emerald-50 text-emerald-600"
            : "bg-amber-50 text-amber-600"
        }`}
      >
        <svg
          width={5}
          height={6}
          viewBox="0 0 5 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="2.5"
            cy={3}
            r="2.5"
            fill={user.is_active === 1 ? "#059669" : "#D97706"}
          />
        </svg>
        <span className="font-medium text-xs">
          {user.is_active === 1 ? "Active" : "Pending"}
        </span>
      </div>
    </td>
    <td className="p-5 flex items-center gap-2">
      <button
        onClick={() => deleteUser(user.id)}
        className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex items-center"
      >
        <svg
          className="fill-current text-red-600 group-hover:text-white"
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 5V4H3V5H4ZM16 5H17V4H16V5ZM17.5 5L17.5 6C17.9421 6 18.3 5.64183 18.3 5.2C18.3 4.75817 17.9421 4.4 17.5 4.4L17.5 5ZM9.3 9.25C9.3 8.80814 8.94212 8.45 8.5 8.45C8.05847 8.45 7.7 8.80814 7.7 9.25H9.3ZM7.7 13.75C7.7 14.1918 8.05847 14.55 8.5 14.55C8.94212 14.55 9.3 14.1918 9.3 13.75H7.7ZM12.3 9.25C12.3 8.80814 11.9421 8.45 11.5 8.45C11.0585 8.45 10.7 8.80814 10.7 9.25H12.3ZM10.7 13.75C10.7 14.1918 11.0585 14.55 11.5 14.55C11.9421 14.55 12.3 14.1918 12.3 13.75H10.7ZM4 6H16V4H4V6ZM15.2 5V12.5H16.8V5H15.2ZM11 16.7H9V18.3H11V16.7ZM4.8 12.5V5H3.2V12.5H4.8ZM9 16.7C7.79918 16.7 6.97882 16.6983 6.36373 16.6156C5.77165 16.536 5.49093 16.3948 5.29823 16.2021L4.16686 17.3334C4.70639 17.873 5.38104 18.0979 6.15053 18.2013C6.89702 18.3017 7.84442 18.3 9 18.3V16.7ZM3.2 12.5C3.2 13.6559 3.19861 14.6033 3.29897 15.3498C3.40243 16.1193 3.62733 16.7939 4.16686 17.3334L5.29823 16.2021C5.10553 16.0094 4.96431 15.7286 4.88471 15.1366C4.80201 14.5215 4.80031 13.7011 4.80031 12.5H3.20031ZM15.2 12.5C15.2 13.7011 15.1986 14.5215 15.1159 15.1366C15.0363 15.7286 14.8951 16.0094 14.7024 16.2021L15.8337 17.3334C16.3733 16.7939 16.5982 16.1193 16.7016 15.3498C16.802 14.6033 16.8 13.6559 16.8 12.5H15.2ZM14.7024 16.2021C14.5097 16.3948 14.229 16.536 13.6369 16.6156C13.0218 16.6983 12.2015 16.7 11 16.7V18.3C12.1556 18.3 13.103 18.3017 13.8495 18.2013C14.619 18.0979 15.2936 17.873 15.8332 17.3334L14.7024 16.2021ZM5 4V3C5 2.86194 5.00699 2.72511 5.02074 2.58967C5.06448 2.1531 5.1898 1.76135 5.39574 1.46314C5.59539 1.17222 5.8599 0.957139 6.17146 0.844415C6.51587 0.717472 6.8728 0.7 7.22068 0.7H12.7793C13.1272 0.7 13.4841 0.717472 13.8285 0.844415C14.1401 0.957139 14.4046 1.17222 14.6043 1.46314C14.8102 1.76135 14.9355 2.1531 14.9793 2.58967C14.993 2.72511 15 2.86194 15 3V4H16.8V3C16.8 2.79558 16.793 2.5919 16.7732 2.38933C16.7222 1.8397 16.5823 1.34665 16.3331 0.899509C16.0757 0.433528 15.7125 0.0814424 15.2597 0.00426249C14.7357 -0.0874847 14.1957 -0.1 13.6656 -0.1H6.3344C5.80432 -0.1 5.26432 -0.0874847 4.74031 0.00426249C4.28751 0.0814424 3.92431 0.433528 3.6669 0.899509C3.41766 1.34665 3.27779 1.8397 3.22683 2.38933C3.20705 2.5919 3.20031 2.79558 3.20031 3V4H5ZM6 4V3C6 2.86194 6.00699 2.72511 6.02074 2.58967C6.06448 2.1531 6.1898 1.76135 6.39574 1.46314C6.59539 1.17222 6.8599 0.957139 7.17146 0.844415C7.51587 0.717472 7.8728 0.7 8.22068 0.7H11.7793C12.1272 0.7 12.4841 0.717472 12.8285 0.844415C13.1401 0.957139 13.4046 1.17222 13.6043 1.46314C13.8102 1.76135 13.9355 2.1531 13.9793 2.58967C13.993 2.72511 14 2.86194 14 3V4H6Z"
          />
        </svg>
      </button>
    </td>
  </tr>
  );
}

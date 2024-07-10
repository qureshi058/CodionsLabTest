import React, { useEffect, useState } from "react";
import { useReduxStore } from "../hooks/useReduxStore";
import { API } from "../services/API";
import { format } from "date-fns";
import AddEditUserModal from "./AddUserModal";
import { fetchApi } from "../helper/helper";

export default function UsersList() {
  const { getState } = useReduxStore();
  const [users, setUsers] = useState([]);
  const [addUserModal, setAddUserModal] = useState(false);

  const { token } = getState("AUTH");

  const getUsers = async () => {
    const users = await fetchApi("v1/admin/user", {}, token, "GET");
    setUsers(users?.data?.data);
  };

  const deleteUser = async (id) => {
    const data = await fetchApi(`v1/admin/user/${id}`, {}, token, "DELETE");
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
   


<>
<div className="flex flex-col mt-28">
  <div className="flex flex-1 justify-end items-end my-2 mb-4">
    <button
      className="button hidden md:block"
      onClick={() => {
        setAddUserModal(true);
      }}
    >
      + Add New User
    </button>
  </div>
  <div className="overflow-x-auto pb-4">
    <div className="inline-block min-w-full align-middle">
      <div className="overflow-hidden border rounded-lg border-gray-300">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="p-5 text-left text-sm font-semibold text-gray-900">
                <input
                  type="checkbox"
                  className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                />
              </th>
              <th scope="col" className="p-5 text-left text-sm font-semibold text-gray-900">
                User ID
              </th>
              <th scope="col" className="p-5 text-left text-sm font-semibold text-gray-900 min-w-[150px]">
                Full Name &amp; Email
              </th>
              <th scope="col" className="p-5 text-left text-sm font-semibold text-gray-900">
                Type
              </th>
              <th scope="col" className="p-5 text-left text-sm font-semibold text-gray-900">
                Join Date
              </th>
              <th scope="col" className="p-5 text-left text-sm font-semibold text-gray-900">
                Status
              </th>
              <th scope="col" className="p-5 text-left text-sm font-semibold text-gray-900">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users?.map((e) => (
              <tr key={e.id} className="hover:bg-gray-50">
                <td className="p-5">
                  <input
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                </td>
                <td className="p-5 whitespace-nowrap text-sm font-medium text-gray-900">
                  {e.id}
                </td>
                <td className="p-5 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src="https://pagedone.io/asset/uploads/1697536419.png"
                      alt="User avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="text-sm">
                      <p className="text-gray-900">{e.name}</p>
                      <p className="text-gray-500">{e.email}</p>
                    </div>
                  </div>
                </td>
                <td className="p-5 whitespace-nowrap text-sm text-gray-900">
                  {e.role}
                </td>
                <td className="p-5 whitespace-nowrap text-sm text-gray-900">
                  {format(new Date(e.created_at), "MM/dd/yyyy")}
                </td>
                <td className="p-5 whitespace-nowrap text-sm text-gray-900">
                  {e.is_active === 1 ? (
                    <div className="py-1.5 px-2.5 bg-emerald-50 rounded-full flex items-center gap-1">
                      <svg
                        width={5}
                        height={6}
                        viewBox="0 0 5 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy={3} r="2.5" fill="#059669" />
                      </svg>
                      <span className="text-xs text-emerald-600">Active</span>
                    </div>
                  ) : (
                    <div className="py-1.5 px-2.5 bg-amber-50 rounded-full flex items-center gap-1">
                      <svg
                        width={5}
                        height={6}
                        viewBox="0 0 5 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2.5" cy={3} r="2.5" fill="#D97706" />
                      </svg>
                      <span className="text-xs text-amber-600">Pending</span>
                    </div>
                  )}
                </td>
                <td className="p-5 whitespace-nowrap text-sm text-gray-900">
                  <button
                    onClick={() => deleteUser(e.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  {addUserModal && (
    <AddEditUserModal isOpen={addUserModal} onClose={() => setAddUserModal(false)} />
  )}
</div>
</>
  );
}

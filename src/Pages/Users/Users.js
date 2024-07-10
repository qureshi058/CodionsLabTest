import React from "react";
import AddUserModal from "../../components/AddUserModal";
import useUsers from "./useUsers";
import UserRow from '../../components/UserRow'
export default function Users() {
  const { users, addUserModal, deleteUser, onAddBtnClick } = useUsers();

  return (
    <>
      <div className="flex flex-col mt-20 w-[90vw]">
        <div className="flex justify-end items-end my-2 mb-4">
          <button className="button hidden md:block mr-2 mt-2" onClick={onAddBtnClick}>
            + Add New User
          </button>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg border-gray-300">
              <table className="table-auto min-w-full rounded-xl">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-5 h-5 appearance-none border border-gray-300 rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                        />
                      </div>
                    </th>
                    <th className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">
                      User ID
                    </th>
                    <th className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px]">
                      Full Name &amp; Email
                    </th>
                    <th className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Type
                    </th>
                    <th className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Join Date
                    </th>
                    <th className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Status
                    </th>
                    <th className="p-5 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  {users?.map((user,index) => (
                  <UserRow key={index} user={user} deleteUser={deleteUser}/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {addUserModal && <AddUserModal />}
    </>
  );
}

import React from "react";
import ProjectRow from "./ProjectRow";

export default function ProjectList({ projects, allusers, token, handleEdit,navigate,userData }) {
  return (
<div className="flex flex-col mt-28">
<div className="overflow-x-auto pb-4">
  <div className="min-w-full inline-block align-middle">
    <div className="overflow-hidden border rounded-lg border-gray-300">
      {projects?.length ? (
        <div className="shadow overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Users
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Created At
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((item, index) => (
                <ProjectRow
                  key={index} 
                  userData={userData}
                  navigate={navigate}
                  handleEdit={handleEdit}
                  token={token}
                  index={index}
                  allusers={allusers}
                  {...item}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  </div>
</div>
</div>

  );
}

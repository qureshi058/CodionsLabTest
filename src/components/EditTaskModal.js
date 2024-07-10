import React, { useState } from "react";
import { format } from "date-fns";
import Select from "react-tailwindcss-select";

function TaskDetailModal({
  device,
  setIsAddTaskModalOpen,
  taskData,
}) {
  const [value, setValue] = useState(
  );
  const handleChange = (value) => {
    setValue(value);
  };
  return (
    <div
      className={
        device === "mobile"
          ? "  py-6 px-6 pb-40 z-100 absolute   left-0 flex  right-0  top-20 dropdown h-full"
          : "  py-6 px-6 pb-40 z-100 absolute   left-0 flex  right-0 bottom-0 top-0 dropdown w-full h-full"
      }
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setIsAddTaskModalOpen(false);
      }}
    >
      {/* Modal Section */}

      <div
        className=" scrollbar-hide overflow-y-scroll max-h-[80vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold
       shadow-md shadow-[#364e7e1a] w-[80vw] md:w-[70vw]  mx-auto  px-8  py-8 rounded-xl"
      >
        <div className="space-y-4">
          <span className="font-medium text-lg">Dashboard</span>
          <table className="w-full text-left space-y-2">
            <tr>
              <td className="py-2 w-4/12">Project</td>
              <td>{taskData?.projectData?.name}</td>
            </tr>
            <tr>
              <td className="py-2 w-4/12">Assignee</td>
              <td>
                {" "}
                {taskData?.projectData?.users?.map(
                  (e, i) => (i !== 0 ? "," : "") + e?.name
                )}{" "}
              </td>
            </tr>
            <tr>
              <td className="py-2 w-4/12">Due Date</td>
     {  taskData?.due_date&&<td> {format(new Date(taskData?.due_date), "MM/dd/yyyy")}</td>}
            </tr>
            <tr>
              <td className="py-2 w-4/12">Task</td>
              <td>{taskData?.name}</td>
            </tr>
          </table>
          <div className="flex flex-col space-y-2">
            <span className="font-medium">Description : </span>
            <span className="text-gray-500 min-w-[400px]">
              {taskData?.description}
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-medium">Assign : </span>
            <Select
              placeholder="Assignee"
              primaryColor={"indigo"}
              value={value}
              onChange={handleChange}
              options={taskData?.projectData?.allusers?.map((e) => ({
                value: e?.id,
                label: e?.name,
              }))}
              isMultiple
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="font-medium">Comment</span>
            <div className="flex justify-between items-center gap-4">
              <div className="w-full">
                <input
                  placeholder="Write comment"
                  type="text"
                  className="border text-xs p-2 rounded-md focus:border-gray-500 focus:outline-none w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetailModal;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddEditTaskAction, } from "../store/Actions/action";
import { useReduxStore } from "../hooks/useReduxStore";
import { updateProject } from "../store/Reducers/projectReducer";
function AddTaskModal({
  type,
  device,
}) {
  const dispatch = useDispatch();
  const { dispatch: dispatchRedux ,getState} = useReduxStore();
  const {projectDetail,taskDetail}=getState("Project")
  const [title, setTitle] = useState(taskDetail?.title||"");
  const [description, setDescription] = useState(taskDetail?.description||"");
  const [status, setStatus] = useState("Active");
  const onChangeStatus = (e) => {
    setStatus(e.target.value);
  };
  const onSubmit =  () => {
    const body = {
      name: title,
      description,
      projectId:projectDetail?.id,
      parent_id:null,
      due_date:new Date().toISOString(),
      status:"todo",
      isEdit:Boolean(taskDetail?.id),
      taskId:taskDetail?.id
    };
    dispatch(AddEditTaskAction(body))
  };

  return (
    <div
      className={
        device === "mobile"
          ? "  py-6 px-6 pb-40  z-100 absolute overflow-y-scroll  left-0 flex  right-0 bottom-[-100vh] top-0 dropdown "
          : "  py-6 px-6 pb-40 z-100  absolute overflow-y-scroll  left-0 flex  right-0 bottom-0 top-0 dropdown "
      }
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        dispatch(updateProject({addTaskModal:false}))

      }}
    >
      {/* Modal Section */}

      <div
        className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold
       shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl"
      >
        <h3 className=" text-lg ">
          {type === "edit" ? "Edit" : "Add New"} Task
        </h3>

        {/* Project Name */}

        <div className="mt-8 flex flex-col space-y-1">
          <label className="  text-sm dark:text-white text-gray-500">
            Task Name
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="task-name-input"
            type="text"
            className=" bg-transparent  px-4 py-2 outline-none focus:border-0 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-1  ring-0  "
            placeholder=" e.g Fitness app"
          />
        </div>

        {/* Description */}
        <div className="mt-8 flex flex-col space-y-1">
          <label className="  text-sm dark:text-white text-gray-500">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="task-description-input"
            className=" bg-transparent outline-none min-h-[200px] focus:border-0 px-4 py-2 rounded-md text-sm  border-[0.5px] border-gray-600 focus:outline-[#635fc7] outline-[1px] "
            placeholder="e.g. It's always good to take a break. This 
            15 minute break will  recharge the batteries 
            a little."
          />
        </div>
        {/* current Status  */}
        <div className="mt-4 flex flex-col space-y-3">
          <label className="  text-sm dark:text-white text-gray-500">
            Current Status
          </label>
          <select
            value={status}
            onChange={onChangeStatus}
            className=" select-status flex-grow px-4 py-2 rounded-md text-sm bg-transparent focus:border-0  border-[1px] border-gray-300 focus:outline-[#635fc7] outline-none"
          >
            {[{ name: "Active" }, { name: "Inactive" }]?.map(
              (column, index) => (
                <option key={index}>{column.name}</option>
              )
            )}
          </select>
        </div>
        <button
          onClick={onSubmit}
          className="mt-8 w-full items-center text-white bg-[#635fc7] py-2 rounded-full "
        >
          {taskDetail?.id ? " Save Changes" : "Create Task"}
        </button>
      </div>
    </div>
  );
}

export default AddTaskModal;

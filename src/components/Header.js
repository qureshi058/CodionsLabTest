import React, { useContext, useState } from "react";
import Logo from "../assets/logo-mobile.svg";
import AddEditProjectModal from "../modals/AddEditProjectModal";
import { useDispatch,  } from "react-redux";
import { useDashboardContext } from "../context/dashboardContext";
import { updateProject } from "../store/Reducers/projectReducer";

function Header({
  isAdmin,
  route
}) {
  const {
    isModal: isTaskModalOpen,
    setIsModal: setIsTaskModalOpen,
    task,
    setTask,
  } = useDashboardContext();
  const isProjectDetail=route==="ProjectDetail" 
  const isDashboard=route==="Dashboard" 
  const dispatch = useDispatch();
const onAddProject=() => {
  setTask(null);
  setIsTaskModalOpen((prevState) => !prevState);
}
const onAddTask=() => {
  dispatch(updateProject({addTaskModal:true}))
  }
  return (
    <div className="  p-4 fixed left-0 bg-white dark:bg-[#2b2c37] z-50 right-0 ">
      <header className=" flex justify-between dark:text-white items-center  ">
        {/* Left Side  */}
        <div className=" flex items-center space-x-2  md:space-x-4">
          <img src={Logo} alt=" Logo " className=" h-6 w-6" />
          <h3 className=" md:text-4xl  hidden md:inline-block font-bold  font-sans">
            CodionsLab
          </h3>
       
        </div>

        {/* Right Side */}

        <div className=" flex space-x-4 items-center md:space-x-6 ">
          {!isProjectDetail&&isAdmin&&isDashboard ? (
            <button
              className=" button hidden md:block "
              onClick={onAddProject}
            >
              + Add New Project
            </button>
          ) : null}
            {isProjectDetail ? (
            <button
              className=" button hidden md:block "
              onClick={onAddTask}
            >
              + Add New Task
            </button>
          ) : null}
   
        </div>

        {/* {openDropdown && (
          <HeaderDropDown
            setOpenDropdown={setOpenDropdown}
            setIsBoardModalOpen={setIsBoardModalOpen}
          />
        )} */}
      </header>
      {isTaskModalOpen && (
        <AddEditProjectModal
          task={task}
          setIsAddTaskModalOpen={setIsTaskModalOpen}
          type={task ? "edit" : "add"}
          device="mobile"
        />
      )}

   
    </div>
  );
}

export default Header;

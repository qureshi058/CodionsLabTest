import React, { useState } from "react";
import { CreateUserAction, GetProjects } from "../store/Actions/action";
import { useReduxStore } from "../hooks/useReduxStore";
import { updateAuth } from "../store/Reducers/authReducer";

function AddEditUserModal({
  type,
  device,
}) {
  const {dispatch}=useReduxStore()
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    setIsValid(false);
    if (!name.trim()) {
      return false;
    }
    if (!email.trim()) {
      return false;
    }
    if (!password.trim()) {
      return false;
    }

    setIsValid(true);
    return true;
  };

  const onSubmit =  () => {
dispatch(CreateUserAction({
  name,
  email,
  password,
  role: "user",
}))
    
  };

  return (
    <div
      className={
        device === "mobile"
          ? "  py-6 px-6 pb-40 z-100  absolute overflow-y-scroll  left-0 flex  right-0  top-20 dropdown h-full"
          : "  py-6 px-6 pb-40 z-100 absolute overflow-y-scroll  left-0 flex  right-0 bottom-0 top-0 dropdown h-full "
      }
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        dispatch(updateAuth({addUserModal:false}))
      }}
    >
      {/* Modal Section */}

      <div
        className=" scrollbar-hide overflow-y-scroll max-h-[95vh]  my-auto  bg-white dark:bg-[#2b2c37] text-black dark:text-white font-bold
       shadow-md shadow-[#364e7e1a] max-w-md mx-auto  w-full px-8  py-8 rounded-xl"
      >
        <h3 className=" text-lg ">
          {type === "edit" ? "Edit" : "Add New"} User
        </h3>

        {/* Project Name */}

        <div className="mt-8 flex flex-col space-y-1">
          <label className="  text-sm dark:text-white text-gray-500">
            Name
          </label>
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
          <label className="  text-sm dark:text-white text-gray-500">
            Email
          </label>
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
          onClick={ () => {
            const isValid = validate();
            if (isValid) {
               onSubmit();
            }
          }}
          className="mt-8 w-full items-center text-white bg-[#635fc7] py-2 rounded-full "
        >
          {type === "edit" ? " save edit" : "Create user"}
        </button>
      </div>
    </div>
  );
}

export default AddEditUserModal;

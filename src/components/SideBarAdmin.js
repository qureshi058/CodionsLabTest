import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "@headlessui/react";
import boardIcon from "../assets/icon-board.svg";
import useDarkMode from "../hooks/useDarkMode";
import darkIcon from "../assets/icon-dark-theme.svg";
import lightIcon from "../assets/icon-light-theme.svg";
import { useNavigate } from "react-router-dom";
import { LogoutAction } from "../store/Actions/action";

function SidebarAdmin({ isSideBarOpen, setIsSideBarOpen, isAdmin }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const boards = useSelector((state) => state.boards);

  const toggleSidebar = () => {
    setIsSideBarOpen((curr) => !curr);
  };

  return (
    <div>
      <div
        className={
          isSideBarOpen
            ? `min-w-[261px] bg-white dark:bg-[#2b2c37]  fixed top-[72px] h-screen  items-center left-0 z-20`
            : ` bg-[#635FC7] dark:bg-[#2b2c37] dark:hover:bg-[#635FC7] top-auto bottom-10 justify-center items-center hover:opacity-80 cursor-pointer  p-0 transition duration-300 transform fixed felx w-[56px] h-[48px] rounded-r-full  `
        }
      >
        <div>
          {/* reWrite modal  */}

          {isSideBarOpen && (
            <div className=" bg-white  dark:bg-[#2b2c37]    w-full   py-4 rounded-xl">
          

              <div className="  dropdown-borad flex flex-col h-[70vh]  justify-between ">
                <div>
                  <div
                    className=" flex  items-baseline space-x-2  mr-8 rounded-r-full duration-500 ease-in-out cursor-pointer text-[#635fc7] px-5 py-4 hover:bg-[#635fc71a] hover:text-[#635fc7] dark:hover:bg-white  "
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <img src={boardIcon} className="   filter-white  h-4 " />
                    <p className=" text-lg font-bold  ">Projects</p>
                  </div>
                  {isAdmin && (
                    <div
                      className=" flex  items-baseline space-x-2  mr-8 rounded-r-full duration-500 ease-in-out cursor-pointer text-[#635fc7] px-5 py-4 hover:bg-[#635fc71a] hover:text-[#635fc7] dark:hover:bg-white  "
                      onClick={() => {
                        navigate("UsersList");
                      }}
                    >
                      <img src={boardIcon} className="   filter-white  h-4 " />
                      <p className=" text-lg font-bold  ">Users</p>
                    </div>
                  )}
                  <div
                    className=" flex  items-baseline space-x-2  mr-8 rounded-r-full duration-500 ease-in-out cursor-pointer text-[#635fc7] px-5 py-4 hover:bg-[#635fc71a] hover:text-[#635fc7] dark:hover:bg-white  "
                    onClick={() => {
                      navigate("Settings");
                    }}
                  >
                    <img src={boardIcon} className="   filter-white  h-4 " />
                    <p className=" text-lg font-bold  ">Settings</p>
                  </div>
                </div>

                <div>
                  <div
                  style={{cursor:'pointer'}}
                  onClick={() => {
                      dispatch(LogoutAction());
                    }}
                    className=" mx-2 mb-3 p-4 relative space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg"
                  >
                    <p>Logout</p>
                  </div>
                  <div className=" mx-2  p-4 relative space-x-2 bg-slate-100 dark:bg-[#20212c] flex justify-center items-center rounded-lg">
                    <img src={lightIcon} alt="sun indicating light mode" />
                    <Switch
                      checked={darkSide}
                      onChange={toggleDarkMode}
                      className={`${
                        darkSide ? "bg-[#635fc7]" : "bg-gray-200"
                      } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                      <span
                        className={`${
                          darkSide ? "translate-x-6" : "translate-x-1"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                    <img src={darkIcon} alt="moon indicating dark mode" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar hide/show toggle */}
     
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;

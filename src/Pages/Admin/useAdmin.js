import React, { useEffect, useState } from "react";
import { useReduxStore } from "../../hooks/useReduxStore";
import { getAllUsersAction, GetProjects } from "../../store/Actions/action";

export const useAdmin = (isAdmin) => {
  const { dispatch, getState } = useReduxStore();
  const {
    projects,
    currentPage,
  } = getState("Project");
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [tab, setTab] = useState("projects");
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const getItems = (page) => {
    let param = {
      page: page || currentPage,
      isAdmin,
    };

    dispatch(GetProjects(param));
  };
  const getUsers=()=>{
    dispatch(getAllUsersAction())
  }
  useEffect(() => {
    getItems(1);
    isAdmin&& getUsers()
  }, []);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
  return {
    windowSize,
    isBoardModalOpen,
    projects,
    isSideBarOpen,
    tab,
    setTab,
    setIsBoardModalOpen,
    setIsSideBarOpen,
  };
};

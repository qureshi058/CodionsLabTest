import React, { useEffect, useState } from "react";
import { useAdmin } from "./useAdmin";
import SidebarAdmin from "../../components/SideBarAdmin";
import Header from "../../components/Header";
import { useReduxStore } from "../../hooks/useReduxStore";
import { Outlet } from "react-router-dom";
import { DashboardProvider } from "../../context/dashboardContext";
function Admin() {
  const { getState } = useReduxStore();
  const { token, userData } = getState("AUTH");
  const route=window?.location?.hash?.split("/").pop()
   const {
    windowSize,
    isBoardModalOpen,
    projects,
    isSideBarOpen,
    tab,
    setTab,
    setIsBoardModalOpen,
    setIsSideBarOpen,
  } = useAdmin(userData?.role === "admin");

  return (
    <>
      <DashboardProvider>
        <Header
          isAdmin={userData?.role === "admin"}
          setIsBoardModalOpen={setIsBoardModalOpen}
          isBoardModalOpen={isBoardModalOpen}
          setIsTaskModalOpen={setIsBoardModalOpen}
          isTaskModalOpen={isBoardModalOpen}
          token={token}
          projects={projects}
          route={route}
        />
        <div
          className={
            windowSize[0] >= 768 && isSideBarOpen
              ? " bg-[#f4f7fd]  scrollbar-hide h-screen flex dark:bg-[#20212c]  overflow-x-scroll gap-6  ml-[261px]"
              : "bg-[#f4f7fd]  scrollbar-hide h-screen flex    dark:bg-[#20212c] overflow-x-scroll gap-6 "
          }
        >
          {windowSize[0] >= 768 && (
            <SidebarAdmin
              tab={tab}
          isAdmin={userData?.role === "admin"}
          setTab={setTab}
              setIsBoardModalOpen={setIsBoardModalOpen}
              isBoardModalOpen={isBoardModalOpen}
              isSideBarOpen={isSideBarOpen}
              setIsSideBarOpen={setIsSideBarOpen}
            />
          )}
          <Outlet />
        </div>
      </DashboardProvider>
    </>
  );
}

export default Admin;

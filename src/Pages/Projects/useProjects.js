import React, { useEffect, useState } from "react";
import { useReduxStore } from "../../hooks/useReduxStore";
import { useNavigate } from "react-router-dom";
import { useDashboardContext } from "../../context/dashboardContext";
export const useProjects = (isAdmin) => {
    const { getState } = useReduxStore();
    const { token ,userData,users} = getState("AUTH");
    const navigate = useNavigate();
    const { setIsModal: setIsBoardModalOpen, setTask } = useDashboardContext();
    const handleEdit = async (data) => {
      setTask(data);
      setIsBoardModalOpen(true);
    };
  
  return {
  token,
  userData,
  users,
  handleEdit,
  navigate,
  };
};

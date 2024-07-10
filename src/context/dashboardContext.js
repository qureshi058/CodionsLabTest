// DashboardContext.js
import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export const DashboardProvider = ({ children }) => {
  const [isModal, setIsModal] = useState(false);
  const [task, setTask] = useState(null);
  return (
    <DashboardContext.Provider value={{ isModal, setIsModal, task, setTask }}>
      {children}
    </DashboardContext.Provider>
  );
};

import React, { useState } from "react";
import Admin from "./Pages/Admin/Admin";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { ToastContainer } from "react-toastify";
import { useReduxStore } from "./hooks/useReduxStore";
import Loader from "./components/Loader";
import Projects from "./Pages/Projects/Projects";
import Setting from "./Pages/Setting/Setting";
import Users from "./Pages/Users/Users";
import Taskmanager from "./Pages/Taskmanager/Taskmanager";
import AddTaskModal from "./modals/AddTaskModal";
function App() {
  const { getState } = useReduxStore();
  const { loading, token, } = getState("AUTH");
  const { addTaskModal } = getState("Project");
  return (
    <div className=" overflow-hidden  overflow-x-scroll">
      <Router future={{ v7_startTransition: true }}>
    {addTaskModal&& (
        <AddTaskModal
          taskData={null}
          setIsAddTaskModalOpen={(val) => {}}
          type={"add"}
          device="desktop"
          token={token}
        />
      )}
        {loading && <Loader />}
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
          theme="light"
        />
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={token ? <Navigate to="/Dashboard" replace /> : <Login />}
          />
          <Route
            path="/Signup"
            element={token ? <Navigate to="/Dashboard" replace /> : <Signup />}
          />
          <Route
            path="/Dashboard"
            element={token ? <Admin /> : <Navigate to="/" replace />}
          >
            <Route index element={<Projects />} />
            <Route path="ProjectDetail" element={<Taskmanager />} />
            <Route path="UsersList" element={<Users />} />
            <Route path="Settings" element={<Setting />} />
          </Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import EmptyList from "../../components/EmptyList";
import { useAdmin } from "../Admin/useAdmin";
import ProjectList from "../../components/ProjectList";
import { useProjects } from "./useProjects";
function Projects() {
  const {
    projects,
  } = useAdmin();
const {
    token,
    userData,
    users,
    handleEdit,
    navigate,
}=useProjects()


  return (
  !projects?.length?<EmptyList/>
  :  <ProjectList
    userData={userData}
      navigate={navigate}
      handleEdit={handleEdit}
      token={token}
      allusers={users}
      projects={projects}
    />
  );
}

export default Projects;

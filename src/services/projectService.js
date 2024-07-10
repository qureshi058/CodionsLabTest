import APIRequest from "./APIRequest";

export const getAllCategories = () => {
  return APIRequest.get(`categories`);
};
export const getSubCategories = () => {
  return APIRequest.get(`subcategories`);
};
export const getBanners = () => {
  return APIRequest.get(`promotions`);
};

export const trendingItems = () => {
  return APIRequest.get("products/trending");
};
export const popularItems = () => {
  return APIRequest.get("products/popular");
};
export const getProjects = ({page }) => {

  return APIRequest.get(`v1/admin/project?page=${page}`, );
};
export const getUserProjects = ({page }) => {

  return APIRequest.get(`v1/project?page=${page}`, );
};
export const getPopularItemsByCategory = () => {
  return APIRequest.get(`categories/products`);
};
export const addTaskService = (param) => {
  let {projectId}=param
  return APIRequest.post(`v1/project/${projectId}/task
`, param);
};
export const editTaskService = (param) => {
  let {projectId,taskId}=param
  return APIRequest.put(`v1/project/${projectId}/task/${taskId}
`, param);
};
export const getAllTasks = ({projectId}) => {
  return APIRequest.get(`v1/project/${projectId}/task`);
};
export const deleteTask = ({projectId,taskId}) => {
  return APIRequest.delete(`v1/project/${projectId}/task/${taskId}`);
};
export const updateTaskStatus = (param) => {
  let {projectId,taskId}=param
  return APIRequest.put(`v1/project/${projectId}/task/${taskId}`,param);
};

export const addProjectService = (param) => {
  return APIRequest.post(`v1/admin/project`,param);
};
export const editProjectService = (param) => {
  let {projectId,}=param
  return APIRequest.put(`v1/admin/project/${projectId}`,param)
};

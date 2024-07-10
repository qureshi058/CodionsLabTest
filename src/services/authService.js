import APIRequest from "./APIRequest";

export const getWishListItem = ({ stopLoading = false }) => {
  return APIRequest.get(`favorites`, { stopLoading });
};
export const toggleWisthListItem = ({ id }) => {
  return APIRequest.post(`favorite/toggle?product_id=${id}`, {
    stopLoading: true,
  });
};
export const register = (params) => {
  return APIRequest.post(`v1/register`, params);
};
export const editBasicInfo = (params) => {
  return APIRequest.post(`v1/profile`, params);
};

export const changePassword = (params) => {
  return APIRequest.post(`change/password`, params);
};
export const login = (params) => {
  return APIRequest.post(`v1/login`, params);
};
export const logout = () => {
  return APIRequest.post(`v1/logout`);
};
export const resetPasswordRequest = (params) => {
  return APIRequest.post(`password/reset/request`, params);
};
export const cretaeUserService = (params) => {
  return APIRequest.post(`v1/admin/user`, params);
};
export const resetPassword = (params) => {
  return APIRequest.post(`password/reset`, params);
};
export const getAllUsers = (params) => {
  return APIRequest.get(`v1/admin/user`, );
};
export const deleteUserService = ({id}) => {
  return APIRequest.delete(`v1/admin/user/${id}`, );
};


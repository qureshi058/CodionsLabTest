import { createAction } from "@reduxjs/toolkit";
export const RegisterAction = createAction("REGISTER");
export const EditBasicInfoAction = createAction("EDIT_BASIC_INFO");
export const ChangePasswordAction = createAction("CHANGE_PASSWORD_ACTION");
export const LoginAction = createAction("LOGIN");
export const LogoutAction = createAction("LOGOUT");
export const resetPasswordRequestAction = createAction(
  "RESET_PASSWORD_REQUEST_ACTION"
);
export const getAllUsersAction = createAction(
  "GET_ALL_USERS"
);
export const CreateUserAction = createAction("CREATE_USER");
export const DeleteUserAction = createAction("DELETE_USER_ACTION");
export const resetPasswordAction = createAction("RESET_PASSWORD_ACTION");
export const ToggleWishlistItemAction = createAction("TOGGLE_WISHLIST_ITEM");
export const GetWishlistItemsAction = createAction("GET_WISHLIST_ITEMS");
// project actions---------------------
export const GetBanners = createAction("GET_BANNERS");
export const AddEditProjectAction = createAction("ADD_EDIT_PROJECT_ACTION");
export const GetItemsByCategory = createAction("GET_ITEMS_CATEGORY");
export const GetProjects = createAction("GET_PROJECTS");
export const AddEditTaskAction = createAction("ADD_TASK");
export const GetAllTasksAction = createAction("GET_ALL_TASKS");


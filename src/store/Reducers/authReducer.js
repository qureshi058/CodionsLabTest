import { createSlice } from "@reduxjs/toolkit";
const initial_state = {
  token: null,
  userData: {},
  users:[],
  login: false,
  loading: false,
  loadingType: "default",
  isError: false,
  errorTitle: "Error",
  errorMessage: "Something went wrong",
  isSuccessModal: false,
  successTitle: "Error",
  successMessage: "Your Task is Perform Successfully",
  confirmationTitle: null,
  confirmationMessage: null,
  isConfirmationModal: false,
  btnLeftText: null,
  btnRightText: null,
  confirmationImage: null,
  wishlistItems: [],
  buyItems: [],
  loginSuccess: false,
  registerSuccess: false,
  changeSuccess: false,
  resetSuccess: false,
  addUserModal: false,
};

const authSlice = createSlice({
  name: "AUTH",
  initialState: initial_state,
  reducers: {
    updateAuth: (state, { payload }) => {
      return { ...state, ...payload };
    },
    logout: (state, action) => {
      state = initial_state;
      return state;
    },
  },
});

export const { updateAuth, logout } = authSlice.actions;
export default authSlice.reducer;

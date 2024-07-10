import React, { useEffect, useState } from "react";
import { useReduxStore } from "../../hooks/useReduxStore";
import { DeleteUserAction, getAllUsersAction } from "../../store/Actions/action";
import { updateAuth } from "../../store/Reducers/authReducer";

export default function useUsers() {
  const { getState,dispatch } = useReduxStore();
  const { token,users,addUserModal } = getState("AUTH");
  const getUsers = async () => {
     dispatch(getAllUsersAction())
  };
  const deleteUser = async (id) => {
  dispatch(DeleteUserAction({id}))
  };
const onAddBtnClick=()=>{
  dispatch(updateAuth({addUserModal:true}))
}
  useEffect(() => {
    getUsers();
  }, []);
  return {
    token,
    addUserModal,
    users,
    getUsers,
    deleteUser,
    onAddBtnClick
  }
}

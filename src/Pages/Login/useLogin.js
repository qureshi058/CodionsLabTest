import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Schemas from "../../utilities/validations";
import { useReduxStore } from "../../hooks/useReduxStore";
import { LoginAction,  } from "../../store/Actions/action";
import { useNavigate } from "react-router-dom";
export default function useLogin() {
  const navigate = useNavigate();
  const { dispatch, getState } = useReduxStore();
  const { loginSuccess } = getState("AUTH");
  let { route, goBack } = window?.history?.state?.usr || {};
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: Schemas.logIn,
  });

  const onSubmit = (data = {}) => {
    dispatch(LoginAction({ ...data }));
  };
  const onNavigate = () => {
    navigate("/Dashboard")
  };
  useEffect(() => {
    loginSuccess && onNavigate();
  }, [loginSuccess]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
}

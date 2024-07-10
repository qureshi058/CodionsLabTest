import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Schemas from "../../utilities/validations";
import { useReduxStore } from "../../hooks/useReduxStore";
import { RegisterAction } from "../../store/Actions/action";
import { useNavigate } from "react-router-dom";
export default function useSignup() {
  const navigate = useNavigate();
  const { dispatch, getState } = useReduxStore();
  const { registerSuccess } = getState("AUTH");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: Schemas.register,
  });

  const onSubmit = (data = {}) => {
    dispatch(RegisterAction({ ...data }));
  };
  useEffect(() => {
    registerSuccess && navigate("/");
  }, [registerSuccess]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
}

import React, { useState } from "react";
import { useReduxStore } from "../../hooks/useReduxStore";
import { EditBasicInfoAction } from "../../store/Actions/action";

export const useSetting=()=>{
    const { getState, dispatch } = useReduxStore();
    const { token, userData } = getState("AUTH");
    const [isValid, setIsValid] = useState(true);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState(userData?.email);
    const [name, setName] = useState(userData?.name);
  
    const validate = () => {
      setIsValid(false);
      if (!name.trim()) {
        return false;
      }
      if (!email.trim()) {
        return false;
      }
  
      setIsValid(true);
      return true;
    };
  
    const onSubmit = async () => {
      const isValid = validate();
      if (isValid) {
        dispatch(
          EditBasicInfoAction({ name, email, password: password ?password: null })
        );
      }
    };

  return {
    name,
    email,
    password,
    token,
    userData,
    setName,
    setEmail,
    setIsValid,
    setPassword,
    validate,
    dispatch,
    onSubmit
  }
   
}


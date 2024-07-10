import { useSelector, useDispatch } from "react-redux";
export const useReduxStore = () => {
  const state = useSelector((state) => state);
  function getState(reducerName) {
    return state[reducerName];
  }
  const dispatch = useDispatch();
  return {
    getState,
    dispatch,
  };
};

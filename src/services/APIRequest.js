import { create } from "apisauce";
import { API } from "./API";
import { store } from "../store/store";
import { updateAuth } from "../store/Reducers/authReducer";

const APIRequest = create({
  baseURL: API,
  timeout: 10000,
  timeoutErrorMessage: "Please try Again server is Busy now",
});

const hideLoaderAPIs = [
  "offers",

];

APIRequest.addRequestTransform((config) => {
  const { AUTH } = store.getState();
  var parts = config.url.split("/");
  var { stopLoading } = config?.params || config?.data || {};
  var lastSegment = parts.pop() || parts.pop();
  if (!hideLoaderAPIs.includes(lastSegment) && !stopLoading) {
    store.dispatch(updateAuth({ loading: true }));
  }
  config.headers = {
    Authorization: `Bearer ${AUTH?.token}`,
  };
  return config;
});

APIRequest.addResponseTransform((response) => {
  store.dispatch(updateAuth({ loading: false }));
  return response;
});
export default APIRequest;

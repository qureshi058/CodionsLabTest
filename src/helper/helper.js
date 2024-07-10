import { toast } from "react-toastify";
import { toastConfiguration } from "../Constant/Data";
import { API } from "../services/API";
export const returnSubCategoryName = (arr) =>
  Array.isArray(arr) ? arr?.map((item) => item?.name).join(" , ") : "Romantic";
export const deepCopy = (arr) => JSON.parse(JSON.stringify(arr));
export const apiResponse = (value) => {
  return typeof value === "string" ? value : Object.values(value)[0].toString();
};
export const scrollToTop = () => window.scrollTo(0, 0);
export const onError = (data, originalError) => {
  const errorMsg = Boolean(typeof data?.message === "string");
  const message = data?.message || originalError?.message;
  if (errorMsg) toast.error(message, toastConfiguration);
  else toast.error(apiResponse(message), toastConfiguration);
};
export const getFirstName = (name = "") => {
  return name ? name.split(" ").shift() : "";
};
export const getExtension = (url = "") => {
  return url ? url.split(".").pop() : "";
};
export const getFileName = (url = "") => {
  return url ? url.split("/").pop() : "";
};
export const toFixed = (val = 0) => {
  return Number(val).toFixed(2);
};
export const getItemsLength = (arr = []) => {
  let products = [];
  arr.forEach((item) => {
    if (item?.products?.length) {
      products.push(1);
    }
  });
  console.log("length------", products?.length);
  return products?.length;
};
export const sorting = (arr = [], type = "assending") => {
  function compareByTitle(a, b) {
    const titleA =
      a?.title?.toUpperCase() || a?.product_details?.title?.toUpperCase();
    const titleB =
      b?.title?.toUpperCase() || b?.product_details?.title?.toUpperCase();

    if (titleA < titleB) {
      return type === "assending" ? -1 : 1;
    }
    if (titleA > titleB) {
      return type === "assending" ? 1 : -1;
    }
    return 0;
  }
  type?.length && arr.sort(compareByTitle);
  return arr;
};
export const getYear = (date) => {
  return date ? new Date(date).getFullYear() : "";
};

export async function fetchApi(enp, body, token, method = "POST") {
  const url = API + enp;
  const configObj={
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  }
  if(method==="POST"||method==="PUT"||method==="PATCH"){
configObj.body=JSON.stringify(body)
  }
  try {
    const response = await fetch(url, configObj);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}

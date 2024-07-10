import { delay, put, takeLatest, call,select } from "redux-saga/effects";
import { logout, updateAuth } from "../Reducers/authReducer";
import {
  ChangePasswordAction,
  CreateUserAction,
  DeleteUserAction,
  EditBasicInfoAction,
  LoginAction,
  LogoutAction,
  RegisterAction,
  getAllUsersAction,
} from "../Actions/action";
import * as authServie from "../../services/authService";
import { toast } from "react-toastify";
import { apiResponse, onError } from "../../helper/helper";
import { toastConfiguration } from "../../Constant/Data";
function* editBasicInfoSaga({ payload }) {
  try {
    const { ok, data, originalError } = yield call(
      authServie.editBasicInfo,
      payload
    );
    if (ok) {
      const {userData}= yield select(({AUTH} )=> AUTH);
      toast.success("Edit Successfully", toastConfiguration);
      yield put(updateAuth({ userData:{...userData,...payload} }));
    } else {
      const errorMsg = Boolean(typeof data?.message === "string");
      const message = data?.message || originalError?.message;
      if (errorMsg) toast.error(message, toastConfiguration);
      else toast.error(apiResponse(message), toastConfiguration);
    }
  } catch (error) {
    toast.error("Something Went Wrong");
    // console.log("error-----------", error);
  }
}
function* changePasswordSaga({ payload }) {
  try {
    const { ok, data, originalError } = yield call(
      authServie.changePassword,
      payload
    );
    if (ok) {
      toast.success(
        "Your password has been changed successfully",
        toastConfiguration
      );
      yield delay(200);
      yield put(updateAuth({ changeSuccess: true }));
      yield delay(500);
      yield put(updateAuth({ changeSuccess: false }));
    } else {
      const errorMsg = Boolean(typeof data?.message === "string");
      const message = data?.message || originalError?.message;
      if (errorMsg) toast.error(message, toastConfiguration);
      else toast.error(apiResponse(message, toastConfiguration));
    }
  } catch (error) {
    toast.error("Something Went Wrong", toastConfiguration);
    // console.log("error-----------", error);
  }
}
function* registerSaga({ payload }) {
  try {
    const { ok, data, originalError } = yield call(
      authServie.register,
      payload
    );
    if (ok) {
      toast.success(
        "Your Account Has Been Registered Successfully",
        toastConfiguration
      );
      yield put(updateAuth({ registerSuccess: true }));
      yield delay(500);
      yield put(updateAuth({ registerSuccess: false }));
    } else {
   
      const errorMsg = Boolean(typeof data?.message === "string");
      const message = data?.message || originalError?.message;
      if (errorMsg) toast.error(message, toastConfiguration);
      else toast.error(apiResponse(message), toastConfiguration);
    }
  } catch (error) {
    toast.error("Something Went Wrong", toastConfiguration);
    // console.log("error-----------", error);
  } finally {
  }
}


function* loginSaga({ payload }) {
  try {
    const { ok, data, originalError } = yield call(authServie.login, payload);
    // console.log("data-----------", data,ok);
    if (ok) {
      let { data: userData } = data || {};
      yield put(
        updateAuth({
          userData:{...userData?.user},
          token: userData?.token,
          loginSuccess: true,
        })
      );
      yield delay(500);
      yield put(updateAuth({ loginSuccess: false }));
    } else {
      const errorMsg = Boolean(typeof data?.message === "string");
      const message = data?.message || originalError?.message;
      if (errorMsg) toast.error(message, toastConfiguration);
      else toast.error(apiResponse(message), toastConfiguration);
    }
  } catch (error) {
    toast.error("Something Went Wrong ", toastConfiguration);
  } finally {
  }
}
function* logoutSaga() {
  try {
    const { ok, data, originalError } = yield call(authServie.logout);
    if (ok) {
      toast.success("Logout Successfully", toastConfiguration);
      yield put(logout());
    } else {
      onError(data, originalError);
      yield put(logout());
    }
  } catch (error) {
    toast.error("Something Went Wrong ", toastConfiguration);
  }
}

function* getAllUsersSaga(action) {
  try {
    const { ok, data, originalError, status } = yield call(
      authServie.getAllUsers,
      {}
    );
    console.log("data user-------",data)
    if (ok) {
      const { data: users } = data?.data || {};
      yield put(
        updateAuth({
          users,
        })
      );
    } else {
      if (status === 404) {
        yield put(
          updateAuth({
            wishlistItems: [],
          })
        );
        return;
      }
      onError(data, originalError);
    }
  } catch (error) {
    toast.error("Something Went Wrong ", toastConfiguration);
  } finally {
  }
}


function* createUserSaga({ payload }) {
  try {
    const { ok, data, originalError } = yield call(
      authServie.cretaeUserService,
      payload
    );
    // console.log("add user data---",data)
    if (ok) {
    const {data:user}=data||{}  
    const {users}= yield select(({AUTH} )=> AUTH);
      toast.success(
        "User Created Successfully",
        toastConfiguration
      );
      yield put(updateAuth({ addUserModal: false ,users:[{...user},...users]}));
 
    } else {
      const errorMsg = Boolean(typeof data?.message === "string");
      const message = data?.message || originalError?.message;
      if (errorMsg) toast.error(message, toastConfiguration);
      else toast.error(apiResponse(message), toastConfiguration);
    }
  } catch (error) {
    toast.error("Something Went Wrong", toastConfiguration);
    // console.log("error-----------", error);
  } finally {
  }
}
function* deleteUserSaga({ payload }) {
  const {id}=payload
  try {
    const { ok, data, originalError } = yield call(
      authServie.deleteUserService,
      payload
    );
    if (ok) {
    let {users}= yield select(({AUTH} )=> AUTH);
    let newUsers=[...users]
    let index=newUsers?.findIndex(item=>item?.id===id)
    newUsers.splice(index,1)
      toast.success(
        "User Deleted Successfully",
        toastConfiguration
      );
      yield put(updateAuth({ addUserModal: false ,users:[...newUsers]}));
 
    } else {
      const errorMsg = Boolean(typeof data?.message === "string");
      const message = data?.message || originalError?.message;
      if (errorMsg) toast.error(message, toastConfiguration);
      else toast.error(apiResponse(message), toastConfiguration);
    }
  } catch (error) {
    toast.error("Something Went Wrong", toastConfiguration);
    console.log("error-----------", error);
  } finally {
  }
}
function* authSaga() {
  yield takeLatest(RegisterAction, registerSaga);
  yield takeLatest(EditBasicInfoAction, editBasicInfoSaga);
  yield takeLatest(ChangePasswordAction, changePasswordSaga);
  yield takeLatest(LoginAction, loginSaga);
  yield takeLatest(LogoutAction, logoutSaga);
  yield takeLatest(getAllUsersAction, getAllUsersSaga);
  yield takeLatest(CreateUserAction, createUserSaga);
  yield takeLatest(DeleteUserAction, deleteUserSaga);

}

export default authSaga;

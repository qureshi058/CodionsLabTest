import { delay, put, takeLatest, call ,select} from "redux-saga/effects";
import { updateProject } from "../Reducers/projectReducer";
import {
  AddEditProjectAction,
  AddEditTaskAction,
  GetAllTasksAction,
  GetProjects,
} from "../Actions/action";
import * as projectService from "../../services/projectService";
import { apiResponse, onError } from "../../helper/helper";
import { toast } from "react-toastify";
import { toastConfiguration } from "../../Constant/Data";

function* addEditTaskSaga(action) {
  const {isEdit,taskId}=action?.payload||{}
  try {
    const { ok, data, originalError } = yield call(
      isEdit?projectService.editTaskService:
        projectService.addTaskService,
      action.payload
    );
    if (ok) {
    const {allTasks}= yield select(({Project} )=> Project);
      const { data: task } = data || {};
      let newData=[...allTasks]
      if(isEdit){
        let index=newData?.findIndex(item=>item?.id===taskId)
        newData[index]={...task}
      }
      else{
       newData.push({...task,})
      }
      yield put(
        updateProject({
          addTaskModal:false,
          allTasks:[...newData],
          taskDetail:null
        })
      );
      toast.success(isEdit?"Task Updated Successfully":"Task Added Successfully",toastConfiguration)

    } else {
      const errorMsg = Boolean(typeof data?.message === "string");
      const message = data?.message || originalError?.message;
      if (errorMsg) toast.error(message, toastConfiguration);
      else toast.error(apiResponse(message), toastConfiguration);
    }
  } catch (error) {
    // console.log("error-----------", error);
  }
}
function* addEditProjectSaga(action) {
  const {projectId,type}=action?.payload||{}
  try {
    const { ok, data, originalError } = yield call(
    type==="edit"?  projectService.editProjectService:projectService.addProjectService,
      action.payload
    );
    if (ok) {
    const {projects}= yield select(({Project} )=> Project);
    const { data: projectData } = data || {};
    let newData=[...projects]
    if(type==="edit"){
      let index=newData?.findIndex(item=>item?.id===projectId)
      newData[index]={...projectData}
    }
    else{
     newData.unshift({...projectData,is_active:true})
    }
      yield put(
        updateProject({
          addTaskModal:false,
          projects:[...newData]
        })
      );
      toast.success(`Project ${type==="edit"?"Updated":"Added"} Successfully`,toastConfiguration)
    } else {
      const errorMsg = Boolean(typeof data?.message === "string");
      const message = data?.message || originalError?.message;
      if (errorMsg) toast.error(message, toastConfiguration);
      else toast.error(apiResponse(message), toastConfiguration);
    }
  } catch (error) {
    // console.log("error-----------", error);
  }
}

function* getProjects(action) {
  try {
    const { id, page, search, isAdmin } = action?.payload || {};
    console.log("🚀 ~ function*getProjects ~ isAdmin:", isAdmin)
    const { ok, data, originalError, status } = yield call(
      !isAdmin ? projectService?.getUserProjects : projectService.getProjects,
      { id, page, search }
    );
    if (ok) {
      const { data: projects, meta } = data?.data || {};
      yield put(
        updateProject({
          projects,
          currentPage: data?.current_page,
          lastPage: data?.last_page,
          totalItemsCount: data?.total,
          perPageCount: data?.per_page,
        })
      );
    } else {
      if (status === 404) {
        yield put(
          updateProject({
            projects: [],
          })
        );
        return;
      }
      onError(data, originalError);
    }
  } catch (error) {
    toast.error("Some Thing Went Wrong", toastConfiguration);
    // console.log("error-----------", error);
  }
}
function* getAllTasksSaga(action) {
  try {
    const { ok, data, originalError, status } = yield call(
   projectService.getAllTasks,
      action?.payload
    );
    console.log("getAllTasks------",data)
    if (ok) {
      const { data: allTasks } = data || {};
      yield put(
        updateProject({
          allTasks
        })
      );
    } else {
      if (status === 404) {
        yield put(
          updateProject({
            projects: [],
          })
        );
        return;
      }
      onError(data, originalError);
    }
  } catch (error) {
    toast.error("Some Thing Went Wrong", toastConfiguration);
    // console.log("error-----------", error);
  }
}
function* projectSaga() {
  yield takeLatest(GetAllTasksAction, getAllTasksSaga);
  yield takeLatest(GetProjects, getProjects);
  yield takeLatest(AddEditProjectAction, addEditProjectSaga);
  yield takeLatest(AddEditTaskAction, addEditTaskSaga);
}

export default projectSaga;

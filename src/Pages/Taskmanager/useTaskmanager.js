import React, { useEffect, useState } from "react";
import "./taskmanager.css";
import { useReduxStore } from "../../hooks/useReduxStore";
import { useLocation } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import { GetAllTasksAction } from "../../store/Actions/action";
import {deleteTask,updateTaskStatus} from '../../services/projectService'
import { updateProject } from "../../store/Reducers/projectReducer";
export default function useTaskmanager() {
  const initialData = {
    lanes: [
      {
        id: "todo",
        title: "Todo",
        cards: [],
      },
      {
        id: "in-progress",
        title: "In  Progress",
        cards: [],
      },
      {
        id: "testing",
        title: "In  Testing",
        cards: [],
      },
      {
        id: "hold",
        title: "Hold",
        cards: [],
      },
      {
        id: "completed",
        title: "Completed",
        cards: [],
      },
    ],
  };
  const { getState,dispatch } = useReduxStore();
  const [data, setData] = useState(initialData);
  const { token } = getState("AUTH");
  const { updateTask,allTasks:tasksData } = getState("Project");
  const [modalData, setModalData] = useState({
    isVisible: false,
    data: null,
  });
  const location = useLocation();
  const projectId = location?.state?.id;
  const onCardClick=(e) => {
    const task = tasksData?.find((el) => el.id == e);
    setModalData({
      isVisible: true,
      data: { ...task, projectData: location?.state },
    });
  }
  
  const getTaskData = async (taskData) => {
      const todos = taskData?.filter((e) => e.status === "todo");
      const inProgress = taskData?.filter(
        (e) => e.status === "in-progress"
      );
      const testing = taskData.filter((e) => e.status === "testing");
      const hold = taskData?.filter((e) => e.status === "hold");
      const completed = taskData?.filter((e) => e.status === "completed");

      setData({
        lanes: [
          {
            id: "todo",
            title: "Todo",
            cards: todos.map((e) => ({
              id: e?.id?.toString(),
              title: e?.name,
              description: e?.description,
              label: formatDistanceToNow(new Date(e?.updated_at), {
                addSuffix: false,
              }),
            })),
          },
          {
            id: "in-progress",
            title: "In  Progress",
            cards: inProgress.map((e) => ({
              id: e?.id?.toString(),
              title: e?.name,
              description: e?.description,
              label: formatDistanceToNow(new Date(e?.updated_at), {
                addSuffix: false,
              }),
            })),
          },
          {
            id: "testing",
            title: "In  Testing",
            cards: testing.map((e) => ({
              id: e?.id?.toString(),
              title: e?.name,
              description: e?.description,
              label: formatDistanceToNow(new Date(e?.updated_at), {
                addSuffix: false,
              }),
            })),
          },
          {
            id: "hold",
            title: "Hold",
            cards: hold.map((e) => ({
              id: e?.id?.toString(),
              title: e?.name,
              description: e?.description,
              label: formatDistanceToNow(new Date(e?.updated_at), {
                addSuffix: false,
              }),
            })),
          },
          {
            id: "completed",
            title: "Completed",
            cards: completed.map((e) => ({
              id: e?.id?.toString(),
              title: e?.name,
              description: e?.description,
              label: formatDistanceToNow(new Date(e?.updated_at), {
                addSuffix: false,
              }),
            })),
          },
        ],
      });
  };
const onCardDelete=async(e)=>{
  let {data}= await deleteTask({projectId,taskId:e});
}
const onDragEnd=async (e, sourceLaneId, targetLaneId) => {
  const task = tasksData?.find((el) => el.id == e);
await updateTaskStatus({
    projectId,
    taskId:e,
    name: task.name,
    description: task?.description,
    due_date: task?.due_date,
    status: targetLaneId,
  })

}
const onUnmount=()=>{
  dispatch(updateProject({projectDetail:null,
taskDetail:null
  }))
}
useEffect(()=>{  projectId&&  dispatch(GetAllTasksAction({projectId}))
},[projectId])
  useEffect(() => {
    tasksData?.length&& getTaskData(tasksData);
  }, [tasksData]);

  useEffect(() => {
   return()=>{
    onUnmount()
   }
  }, []);
  return {
    initialData,
    location,
    projectId,token,
    modalData,
    data,
    tasksData,
    setModalData,
    getTaskData,
    onCardClick,
    onCardDelete,
    onDragEnd
    ,
  }
}

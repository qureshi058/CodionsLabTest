import React, { useEffect, useState } from "react";
import "./taskmanager.css";
import Board from "react-trello";
import useTaskmanager from "./useTaskmanager";
import TaskDetailModal from "../../components/EditTaskModal";
export default function Taskmanager() {
const {
  token,
  modalData,
  setModalData,
  data,
  onCardClick,
  onCardDelete,
  onDragEnd
}=useTaskmanager()
 


  return (
    <>
      <div className="mt-[100px]">
        <Board
          onCardClick={onCardClick}
          onCardDelete={onCardDelete}
          handleDragEnd={onDragEnd}
          style={{ backgroundColor: "transparent" }}
          data={data}
        />
      </div>
      {modalData.isVisible && (
        <TaskDetailModal
          taskData={modalData.data}
          setIsAddTaskModalOpen={(val) => setModalData({ isVisible: val })}
          type={"add"}
          device="desktop"
          token={token}
        />
      )}
       
    </>
  );
}

import React from "react";
import { useSelector } from "react-redux";
import TaskDone from "../components/TaskDone";

const DoneTask = ({}) => {
  const todos = useSelector((state) => state.todos.todos);

  return <>{todos && <TaskDone tasks={todos} />}</>;
};

export default DoneTask;

import React from "react";
import { Task } from "../types";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  return <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap">{task.content}</p>;
};

export default TaskCard;

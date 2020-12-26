import React from "react";
import { Task } from "./Types"

type Props ={
    task: Task
    handleDone  : (task: Task) => void
    handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> = ({ task,handleDone,handleDelete}) => {
    return(
      <li className={task.done ? 'done' : ''}>
       <label>
        <input
          type="checkbox"
          className="checkbox-input"
          onclick={() => handleDone(task)}
          defaultChecked={task.done}
            />
        <span clasName="checkbox-label">{task.title}</span>
        </label>
        <button
           onclick={() => handleDelete(task)}
           className="btn is-delete">
          削除</button>
         </li>
    )
}

export default TaskItem
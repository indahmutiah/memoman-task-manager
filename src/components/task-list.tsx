import { TaskListItem } from "./task-list-item";
import { Task } from "../types/task";

export function TaskList({ taskItem }: { taskItem: Task[] }) {
  return (
    <ul className="flex flex-col gap-4 p-4  hover:bg-gray-100">
      {taskItem.map((taskItem) => {
        return (
          <li
            key={taskItem.id}
            className="flex items-center gap-4 p-4 hover:bg-gray-100"
          >
            <TaskListItem
              text={taskItem.text}
              isCompleted={taskItem.isCompleted}
              onToggle={() => {}}
            />
          </li>
        );
      })}
    </ul>
  );
}

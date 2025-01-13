import { Task } from "../types/task";
import { TaskListItem } from "./task-list-item";

export function TaskList({ taskItems }: { taskItems: Task[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {taskItems.map((taskItem) => {
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

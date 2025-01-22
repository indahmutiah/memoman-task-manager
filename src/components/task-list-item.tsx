import { Task } from "@/types/task";
import { TaskCards } from "./task-cards";

type TaskListItemProps = {
  taskItem: Task;
  onToggle: () => void;
  onDelete: () => void;
};

export function TaskListItem({
  taskItem,
  onToggle,
  onDelete,
}: TaskListItemProps) {
  return (
    <li className="mb-4">
      <TaskCards taskItem={taskItem} onToggle={onToggle} onDelete={onDelete} />
    </li>
  );
}

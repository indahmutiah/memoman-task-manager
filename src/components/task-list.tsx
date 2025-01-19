import { TaskListItem } from "@/components/task-list-item";
import { Task } from "@/types/task";

type TaskListProps = {
  taskItem: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export function TaskList({ taskItem, onToggle, onDelete }: TaskListProps) {
  return (
    <ul className="flex flex-col gap-4 p-4">
      {taskItem.map((task) => (
        <TaskListItem
          key={task.id}
          taskItem={task}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
}

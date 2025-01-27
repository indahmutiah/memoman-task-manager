import { Task } from "@/types/task";
import { TaskCard } from "./task-card";

type TaskListProps = {
  taskItem: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export function TaskList({ taskItem, onToggle, onDelete }: TaskListProps) {
  return (
    <ul className="flex flex-col gap-4 p-4">
      {taskItem.map((task) => (
        <TaskCard
          key={task.id}
          taskItem={task}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
}

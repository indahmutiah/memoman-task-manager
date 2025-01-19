import { TaskListItem } from "@/components/task-list-item";
import { Task } from "@/types/task";
import { useState } from "react";

export function TaskList({ taskItem }: { taskItem: Task[] }) {
  const [tasks, setTasks] = useState(taskItem);

  const toggleTask = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };
  
  return (
    <ul className="flex flex-col gap-4 p-4">
      {tasks.map((taskItem) => {
        return (
          <li
            key={taskItem.id}
            className="flex items-center gap-4 p-4 hover:bg-gray-100"
          >
            <TaskListItem
              taskItem={taskItem}
              onToggle={() => toggleTask(taskItem.id)}
              onDelete={() => deleteTask(taskItem.id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

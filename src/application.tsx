import { Header } from "@/components/header";
import { TaskList } from "@/components/task-list";
import { MenuSection } from "@/components/menu-section";
import { Footer } from "@/components/footer";
import { Task } from "@/types/task";
import { useState } from "react";
import { DialogAddTask } from "@/components/dialog-add-task";

const initialTaskItem: Task[] = [
  {
    id: 1,
    title: "Fixing Bugs for the Project",
    isCompleted: true,
    date: new Date(),
  },
  {
    id: 2,
    title: "Report Daily Progress",
    isCompleted: true,
    date: new Date(),
  },
  {
    id: 3,
    title: "Checking for New Features",
    isCompleted: false,
    date: new Date(),
  },
];

export function App() {
  const [taskItems, setTaskItem] = useState(initialTaskItem);

  function addTaskItem(title: string) {
    const newTaskItem = {
      id: taskItems.length > 0 ? taskItems[taskItems.length - 1].id + 1 : 1,
      title: title,
      isCompleted: false,
      date: new Date(),
    };
    const updatedTaskItems = [...taskItems, newTaskItem];

    setTaskItem(updatedTaskItems);
  }

  function toogleTask(id: number) {
    const updatedTaskItems = taskItems.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTaskItem(updatedTaskItems);
  }

  function deleteTask(id: number) {
    const updatedTaskItems = taskItems.filter((task) => task.id !== id);

    setTaskItem(updatedTaskItems);
  }

  return (
    <>
      <Header />

      <main className="flex flex-col md:flex-row h-screen">
        <MenuSection />

        <section className="w-full md:w-2/3 bg-white shadow-lg overflow-y-auto">
          <h2 className="text-2xl font-bold">
            <span className="ml-4">Memo</span>
          </h2>

          <DialogAddTask onSubmitTask={addTaskItem} />
          <TaskList
            taskItem={taskItems}
            onToggle={toogleTask}
            onDelete={deleteTask}
           />
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Header } from "./components/header";
import { TaskList } from "./components/task-list";
import { MenuSection } from "./components/menu-section";
import { Task } from "./types/task";
import { IoAdd } from "react-icons/io5";


export function App() {
  const taskItem: Task[] = [
    {
      id: 1,
      text: "Fixing Bugs for the Project",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Report Daily Progress",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Checking for New Features",
      isCompleted: false,
    },
  ];
  return (
    <>
      <Header />

      <main className="flex flex-col md:flex-row h-screen">
        <MenuSection />

        <section className="w-full md:w-2/3 bg-white shadow-lg overflow-y-auto">
          <h2 className="text-2xl font-bold">
            <span className="ml-4">Tasks</span>
          </h2>
          <button className="bg-yellow-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-4">
            <IoAdd className="inline-block mr-2" />
            Add Task
          </button>
          <TaskList taskItem={taskItem} />
          
        </section>
      </main>
      
    </>
  );
}

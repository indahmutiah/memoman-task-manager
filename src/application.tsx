import { Header } from "./components/header";
import { TaskList } from "./components/task-list";
import { Task } from "./types/task";

export function App() {
  const taskItems: Task[] = [
    { id: 1, text: "Fixing Bugs for the Project", isCompleted: true },
    { id: 2, text: "Report Daily Progress", isCompleted: true },
    { id: 3, text: "Checking for New Features", isCompleted: false },
  ];

  return (
    <>
      <Header />

      <main className="flex flex-col md:flex-row h-screen">
        <section className="w-full md:w-1/3 bg-gray-50 p-6 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-lg">Today's Tasks</h2>
          </div>
        </section>

        <section className="w-full md:w-2/3 bg-white shadow-lg overflow-y-auto">
          <h2 className="text-2xl font-bold">
            <span className="ml-4">Tasks</span>
            <TaskList taskItems={taskItems} />
          </h2>
        </section>
      </main>
    </>
  );
}

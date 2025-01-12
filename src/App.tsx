import { Header } from "./components/header";
import { TaskList } from "./components/task-list";
export function App() {
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
            <TaskList />
          </h2>
        </section>
      </main>
    </>
  );
}

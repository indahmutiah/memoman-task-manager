import { TaskItems } from "./task-items";
export function TaskList() {
  return (
    <ul className="flex flex-col gap-4">
      <TaskItems
        text="Fixing Bugs for the Project"
        isCompleted={true}
        onToggle={() => {}}
      />
      <TaskItems
        text="Report Daily Progress"
        isCompleted={true}
        onToggle={() => {}}
      />
      <TaskItems
        text="Checking for New Features"
        isCompleted={false}
        onToggle={() => {}}
      />
    </ul>
  );
}

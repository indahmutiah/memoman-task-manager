import { Task } from "../types/task";

type TaskListItemProps = {
  taskItem: Task;
  onToggle: () => void; // to sign check or uncheck
};

export function TaskListItem({
  taskItem: { text, isCompleted, date },
  onToggle,
}: TaskListItemProps) {
  const checkBoxClass = [
    "h-5",
    "w-5",
    "border-gray-300",
    "rounded",
    "focus:ring-2",
  ];

  if (isCompleted) {
    checkBoxClass.push("text-green-600", "focus:ring-green-500");
  } else {
    checkBoxClass.push("text-red-600", "focus:ring-red-500");
  }

  return (
    <li className="flex items-center gap-4 ">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        className={checkBoxClass.join(" ")}
      />
      <div>
        <p className="text-xl">{text}</p>
        <span className="text-sm text-gray-700">{date.toDateString()}</span>
      </div>
    </li>
  );
}

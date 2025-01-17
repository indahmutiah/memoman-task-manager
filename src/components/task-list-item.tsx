type TaskListItemProps = {
  text: string;
  isCompleted: boolean;
  onToggle: () => void; // to sign check or uncheck
};

export function TaskListItem({
  text,
  isCompleted,
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
    <li className="flex items-center gap-4 p-4 hover:bg-white">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={onToggle}
        className={checkBoxClass.join(" ")}
      />
      <span className="text-xl">{text}</span>
    </li>
  );
}

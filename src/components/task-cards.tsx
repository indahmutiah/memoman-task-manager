import { Task } from "@/types/task";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { DeleteAlert } from "@/components/delete-alert";

type TaskCardsProps = {
  taskItem: Task;
  onToggle: () => void;
  onDelete: () => void;
};

export function TaskCards({ taskItem, onToggle, onDelete }: TaskCardsProps) {
  const { title, isCompleted, date } = taskItem;

  return (
    <Card className="shadow-lg rounded-lg border-yellow-900 border-2">
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox checked={isCompleted} onCheckedChange={onToggle} />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <DeleteAlert onDelete={onDelete} taskText={title} />
      </CardHeader>
      <CardContent className="px-6">
        <p className="text-sm text-gray-700">{date.toDateString()}</p>
      </CardContent>
      <CardFooter>
        <Badge className={isCompleted ? "bg-green-600" : "bg-red-600"}>
          {isCompleted ? "Completed" : "In Progress"}
        </Badge>
      </CardFooter>
    </Card>
  );
}

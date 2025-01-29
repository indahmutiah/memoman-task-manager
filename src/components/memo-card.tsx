import parse from "html-react-parser";
import { useNavigate } from "react-router";
import { Memo } from "@/types/memo";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { DeleteAlert } from "@/components/delete-alert";

type MemoCardProps = {
  memoItem: Memo;
  onToggle: () => void;
  onDelete: () => void;
};

function truncateDescription(description: string, maxWords: number): string {
  const words = description.split(" ");
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(" ") + "...";
  }
  return description;
}

export function MemoCard({ memoItem, onToggle, onDelete }: MemoCardProps) {
  const { id, title, isCompleted, description, date } = memoItem;
  const truncatedDescription = truncateDescription(description, 35);
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/memo-details/${id}`);
  };

  return (
    <Card
      className="shadow-lg rounded-lg border-yellow-900 border-2"
      onClick={handleCardClick}
    >
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <Checkbox checked={isCompleted} onCheckedChange={onToggle} />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
        <DeleteAlert onDelete={onDelete} taskText={title} />
      </CardHeader>
      <CardContent className="px-6">
        <div>{parse(truncatedDescription)}</div>
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

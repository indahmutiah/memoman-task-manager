import { Memo } from "@/types/memo";
import { MemoCards } from "./memo-cards";

type MemoListProps = {
  memoItem: Memo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export function MemoList({ memoItem, onToggle, onDelete }: MemoListProps) {
  return (
    <ul className="flex flex-col gap-4 p-4">
      {memoItem.map((task) => (
        <MemoCards
          key={task.id}
          memoItem={task}
          onToggle={() => onToggle(task.id)}
          onDelete={() => onDelete(task.id)}
        />
      ))}
    </ul>
  );
}

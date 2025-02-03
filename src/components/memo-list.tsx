import { Memo } from "@/types/memo";
import { MemoCard } from "./memo-card";

type MemoListProps = {
  memoItem: Memo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export function MemoList({ memoItem, onToggle, onDelete }: MemoListProps) {
  return (
    <ul className="flex flex-col gap-4 p-4">
      {memoItem.map((memo) => (
        <MemoCard
          key={memo.id}
          memoItem={memo}
          onToggle={() => onToggle(memo.id)}
          onDelete={() => onDelete(memo.id)}
        />
      ))}
    </ul>
  );
}

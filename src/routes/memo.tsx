import { useParams } from "react-router";
import { Textarea } from "@/components/ui/textarea";
import { DataMemoItems } from "@/data/memo-items";

export function MemoRoute() {
  const { id } = useParams();
  if (!id) return null;

  const memoItem = DataMemoItems.find((memo) => memo.id === Number(id));

  if (!memoItem) {
    return <div>Memo not found</div>;
  }

  const { title, description } = memoItem;
  return (
    <>
      <div className="border-b border-gray-200 p-4">
        <h2 className="text-2xl font-bold">
          <span className="ml-4">{title}</span>
        </h2>
      </div>
      <div className="p-4">
        <Textarea value={description} readOnly />
      </div>
    </>
  );
}

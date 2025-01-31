import { useParams } from "react-router";

import { Textarea } from "@/components/ui/textarea";
import { dataMemoItems } from "@/data/memo-items";
import { Button } from "@/components/ui/button";

export function MemoRoute() {
  const { id } = useParams();

  if (!id) return null;

  const memoItem = dataMemoItems.find((memo) => memo.id === Number(id));

  if (!memoItem) {
    return <div>Memo not found</div>;
  }

  function handleEditMemo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Edit");
  }

  return (
    <form className="space-y-4 p-4" onSubmit={handleEditMemo}>
      <input
        type="text"
        defaultValue={memoItem.title}
        className="text-2xl font-bold border p-2 rounded-md w-full"
      />
      <Textarea defaultValue={memoItem.description} />
      <Button type="submit">Save Memo</Button>
    </form>
  );
}

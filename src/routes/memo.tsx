import { useParams } from "react-router";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { getMemoByIdStorage } from "@/modules/memo";

export function MemoRoute() {
  const { id } = useParams();

  if (!id) return null;

  const memoItem = getMemoByIdStorage(Number(id));

  if (!memoItem) {
    return (
      <div>
        <p>Memo not found</p>
      </div>
    );
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

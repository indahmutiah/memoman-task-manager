import { useParams, useNavigate } from "react-router";
import { getMemoByIdStorage, updateMemoByIdStorage } from "@/modules/memo";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Memo } from "@/types/memo";

export function MemoRoute() {
  const { id } = useParams();
  const memoId = Number(id);
  const navigate = useNavigate();
  const [memoItem, setMemoItem] = useState<Memo | null>(null);

  useEffect(() => {
    const memo = getMemoByIdStorage(memoId);
    if (memo) {
      setMemoItem(memo);
    }
  }, [memoId]);

  if (!memoItem) {
    return (
      <div>
        <p>Memo not found</p>
      </div>
    );
  }

  function handleEditMemo(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const updatedTitle = formData.get("title") as string;
    console.log("Titel:", updatedTitle);
    const updatedDescription = formData.get("description") as string;
    console.log("description:", updatedDescription);

    if (updatedTitle && updatedDescription) {
      updateMemoByIdStorage(memoId, {
        title: updatedTitle,
        description: updatedDescription,
      });
      navigate("/");
    }
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

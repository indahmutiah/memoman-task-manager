import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { getMemoByIdStorage, updateMemoByIdStorage } from "@/modules/memo";
import { Memo } from "@/types/memo";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function MemoRoute() {
  const { id } = useParams<{ id: string }>();
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
    const updatedDescription = formData.get("description") as string;

    console.log("Updated Title:", updatedTitle);
    console.log("Updated Description:", updatedDescription);

    if (updatedTitle && updatedDescription) {
      updateMemoByIdStorage(memoId, {
        title: updatedTitle,
        description: updatedDescription,
      });
      navigate("/");
    } else {
      alert("Title and description cannot be empty.");
    }
  }

  return (
    <form className="space-y-4 p-4" onSubmit={handleEditMemo}>
      <input
        type="text"
        defaultValue={memoItem.title}
        name="title"
        className="text-2xl font-bold border p-2 rounded-md w-full"
      />
      <Textarea defaultValue={memoItem.description} name="description" />
      <Button type="submit">Save Memo</Button>
    </form>
  );
}

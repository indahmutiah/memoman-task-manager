import { useEffect, useState } from "react";
import { MemoList } from "@/components/memo-list";
import { Memo } from "@/types/memo";
import { DialogAddMemo } from "@/components/dialog-add-memo";
import {
  getMemoItemsStorage,
  setMemoItemsStorage,
  deleteMemoByIdStorage,
} from "@/modules/memo";

export function HomeRoute() {
  const [memoItems, setMemoItems] = useState<Memo[]>([]);

  useEffect(() => {
    const storedMemoItems = getMemoItemsStorage();
    if (storedMemoItems) {
      setMemoItems(storedMemoItems);
    }
  }, []);

  useEffect(() => {
    setMemoItemsStorage(memoItems);
  }, [memoItems]);

  function addMemoItem(formData: FormData) {
    const newMemoItem: Memo = {
      id: memoItems.length > 0 ? memoItems[memoItems.length - 1].id + 1 : 1,
      title: String(formData.get("title")),
      description: String(formData.get("description")),
      isCompleted: false,
      date: new Date(),
    };

    const updatedMemoItems = [...memoItems, newMemoItem];
    setMemoItems(updatedMemoItems);
  }

  function toggleMemo(id: number) {
    const updatedMemoItems = memoItems.map((memo) =>
      memo.id === id ? { ...memo, isCompleted: !memo.isCompleted } : memo
    );

    setMemoItems(updatedMemoItems);
  }

  function deleteMemo(id: number) {
    deleteMemoByIdStorage(id);
    setMemoItems(memoItems.filter((memo) => memo.id !== id));
  }

  return (
    <>
      <h2 className="text-2xl font-bold">
        <span className="ml-4">Memo ({memoItems.length})</span>
      </h2>

      <DialogAddMemo addMemoItem={addMemoItem} />
      <MemoList
        memoItem={memoItems}
        onToggle={toggleMemo}
        onDelete={deleteMemo}
      />
    </>
  );
}

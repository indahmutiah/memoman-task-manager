import { MemoList } from "@/components/memo-list";
import { Memo } from "@/types/memo";
import { useState } from "react";
import { DialogAddMemo } from "@/components/dialog-add-memo";
import { dataMemoItems } from "@/data/memo-items";

const initialMemoItem: Memo[] = dataMemoItems;

export function HomeRoute() {
  const [memoItems, setMemoItems] = useState(initialMemoItem);

  function addMemoItem(formData: FormData) {
    const newMemoItem = {
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
    const updatedMemoItems = memoItems.map((memo) => {
      if (memo.id === id) {
        return { ...memo, isCompleted: !memo.isCompleted };
      }
      return memo;
    });

    setMemoItems(updatedMemoItems);
  }

  function deleteMemo(id: number) {
    const updatedMemoItems = memoItems.filter((Memo) => Memo.id !== id);

    setMemoItems(updatedMemoItems);
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

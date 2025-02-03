import { Memo } from "@/types/memo";

export function getMemoItemsStorage(): Memo[] {
  const storedMemoItems = localStorage.getItem("memoItems");
  if (storedMemoItems) {
    const parsedMemoItems: Memo[] = JSON.parse(storedMemoItems);
    return parsedMemoItems.map((memo) => ({
      ...memo,
      date: new Date(memo.date),
    }));
  }
  return [];
}

export function setMemoItemsStorage(memoItems: Memo[]): void {
  localStorage.setItem("memoItems", JSON.stringify(memoItems));
}

export function getMemoByIdStorage(id: number): Memo | undefined {
  const storedMemoItems = getMemoItemsStorage();
  return storedMemoItems.find((memo) => memo.id === id);
}

export function deleteMemoByIdStorage(id: number): void {
  const storedMemoItems = getMemoItemsStorage();
  const updatedMemoItems = storedMemoItems.filter((memo) => memo.id !== id);
  setMemoItemsStorage(updatedMemoItems);
}

export function updateMemoByIdStorage(
  id: number,
  updatedMemo: Partial<Memo>
): void {
  const storedMemoItems = getMemoItemsStorage();
  const updatedMemoItems = storedMemoItems.map((memo) =>
    memo.id === id ? { ...memo, ...updatedMemo } : memo
  );
  setMemoItemsStorage(updatedMemoItems);
}

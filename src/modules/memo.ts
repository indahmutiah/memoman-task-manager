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

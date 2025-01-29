import { Header } from "@/components/header";
import { MemoList } from "@/components/memo-list";
import { MenuSection } from "@/components/menu-section";
import { Footer } from "@/components/footer";
import { Memo } from "@/types/memo";
import { useState } from "react";
import { DialogAddMemo } from "@/components/dialog-add-memo";
import { data } from "@/data/data";

const initialMemoItem: Memo[] = data;

export function App() {
  const [memoItems, setMemoItem] = useState(initialMemoItem);

  function addMemoItem(formData: FormData) {
    const newMemoItem = {
      id: memoItems.length > 0 ? memoItems[memoItems.length - 1].id + 1 : 1,
      title: String(formData.get("title")),
      description: String(formData.get("description")),
      isCompleted: false,
      date: new Date(),
    };
    const updatedMemoItems = [...memoItems, newMemoItem];

    setMemoItem(updatedMemoItems);
  }

  function toogleMemo(id: number) {
    const updatedMemoItems = memoItems.map((Memo) => {
      if (Memo.id === id) {
        return { ...Memo, isCompleted: !Memo.isCompleted };
      }
      return Memo;
    });

    setMemoItem(updatedMemoItems);
  }

  function deleteMemo(id: number) {
    const updatedMemoItems = memoItems.filter((Memo) => Memo.id !== id);

    setMemoItem(updatedMemoItems);
  }

  return (
    <>
      <Header />

      <main className="flex flex-col md:flex-row h-screen">
        <MenuSection />

        <section className="w-full md:w-2/3 bg-white shadow-lg overflow-y-auto">
          <h2 className="text-2xl font-bold">
            <span className="ml-4">Memo ({memoItems.length})</span>
          </h2>

          <DialogAddMemo addMemoItem={addMemoItem} />
          <MemoList
            memoItem={memoItems}
            onToggle={toogleMemo}
            onDelete={deleteMemo}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

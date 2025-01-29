import { useParams } from "react-router";
import { MenuSection } from "@/components/menu-section";
import { Textarea } from "@/components/ui/textarea";
import { dataMemoItems } from "@/data/memo-items";

export function MemoRoute() {
  const { id } = useParams();
  if (!id) return null;

  const memoItem = dataMemoItems.find((memo) => memo.id === Number(id));

  if (!memoItem) {
    return <div>Memo not found</div>;
  }

  return (
    <main className="flex flex-col md:flex-row h-screen">
      <MenuSection />

      <section className="w-full md:w-2/3 bg-white shadow-lg overflow-y-auto">
        <div className="border-b border-gray-200 p-4">
          <h2 className="text-2xl font-bold">
            <span className="ml-4">{memoItem.title}</span>
          </h2>
        </div>
        <div className="p-4">
          <Textarea value={memoItem.description} readOnly />
        </div>
      </section>
    </main>
  );
}

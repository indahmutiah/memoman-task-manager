import { useParams } from "react-router";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MenuSection } from "@/components/menu-section";
import { Textarea } from "@/components/ui/textarea";
import { data } from "@/data/data";

export function MemoDetailsRoute() {
    const { id } = useParams<{ id: string }>();
    const memoItem = data.find((memo) => memo.id === parseInt(id || "", 10));

    if (!memoItem) {
      return <div>Memo not found</div>;
    }

    const { title, description } = memoItem;
  return (
    <>
      <Header />
      <main className="flex flex-col md:flex-row h-screen">
        <MenuSection />

        <section className="w-full md:w-2/3 bg-white shadow-lg overflow-y-auto">
          <div className="border-b border-gray-200 p-4">
            <h2 className="text-2xl font-bold">
              <span className="ml-4">{title}</span>
            </h2>
          </div>
          <div className="p-4">
            <Textarea value={description} readOnly />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

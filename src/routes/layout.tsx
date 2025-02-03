import { Outlet } from "react-router";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MenuSection } from "@/components/menu-section";

export function LayoutRoute() {
  return (
    <>
      <Header />

      <main className="flex flex-col md:flex-row h-screen">
        <MenuSection />

        <section className="w-full md:w-2/3 bg-white shadow-lg overflow-y-auto">
          <Outlet />
        </section>
      </main>

      <Footer />
    </>
  );
}

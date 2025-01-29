import { Outlet } from "react-router";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function LayoutRoute() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

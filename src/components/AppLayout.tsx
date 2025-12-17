import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <>
      <NavBar />

      <main className="mt-12 px-20 max-xl:px-8 max-md:px-6">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;

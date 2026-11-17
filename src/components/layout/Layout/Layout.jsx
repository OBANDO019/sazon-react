import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main className="contenedor" id="contenido-principal">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

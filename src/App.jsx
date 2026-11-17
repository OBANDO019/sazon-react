import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout/Layout";
import Home from "./views/Home";
import Catalogo from "./views/Catalogo";
import Recetario from "./views/Recetario";
import Mercadeo from "./views/Mercadeo";
import Usuarios from "./views/Usuarios";
import EnConstruccion from "./views/EnConstruccion";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="usuarios" element={<Usuarios />} />
        <Route path="catalogo" element={<Catalogo />} />
        <Route path="recetario" element={<Recetario />} />
        <Route path="despensa" element={<EnConstruccion titulo="Despensa" />} />
        <Route path="nutricion" element={<EnConstruccion titulo="Nutrición" />} />
        <Route path="planificador" element={<EnConstruccion titulo="Planificador" />} />
        <Route path="comunidad" element={<EnConstruccion titulo="Comunidad" />} />
        <Route path="mercadeo" element={<Mercadeo />} />
      </Route>
    </Routes>
  );
}

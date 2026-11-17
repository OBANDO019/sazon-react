import { useState } from "react";
import CuponForm from "../components/cupones/CuponForm/CuponForm";
import CuponFiltro from "../components/cupones/CuponFiltro/CuponFiltro";
import CuponTabla from "../components/cupones/CuponTabla/CuponTabla";
import Alert from "../components/ui/Alert/Alert";
import { useCupones } from "../hooks/useCupones";
import styles from "./Vista.module.css";

export default function Mercadeo() {
  const { cupones, crear, actualizar, eliminar } = useCupones();
  const [editando, setEditando] = useState(null);
  const [filtro, setFiltro] = useState("");
  const [mensaje, setMensaje] = useState("");

  const visibles = filtro
    ? cupones.filter((c) => c.idCampania === Number(filtro))
    : cupones;

  const guardar = (cupon) => {
    if (editando) {
      actualizar(editando.id, cupon);
      setMensaje("Cupón actualizado.");
    } else {
      crear(cupon);
      setMensaje("Cupón creado.");
    }
    setEditando(null);
  };

  const borrar = (cupon) => {
    if (!window.confirm(`¿Eliminar el cupón ${cupon.codigo}?`)) return;
    eliminar(cupon.id);
    setMensaje("Cupón eliminado.");
  };

  return (
    <section className={styles.pagina}>
      <div className={styles.bloque}>
        <h1>Mercadeo</h1>
        <p>Gestione los cupones de las campañas de Sazón.</p>
        <Alert>{mensaje}</Alert>
      </div>
      <div className={styles.bloque}>
        <h2>Cupones</h2>
        <CuponForm cuponEditando={editando} onGuardar={guardar} onCancelar={() => setEditando(null)} />
        <CuponFiltro valor={filtro} onCambiar={setFiltro} onLimpiar={() => setFiltro("")} />
        <CuponTabla cupones={visibles} onEditar={setEditando} onEliminar={borrar} />
      </div>
    </section>
  );
}

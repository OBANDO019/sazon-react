import Button from "../../ui/Button/Button";
import styles from "./CuponFiltro.module.css";

export default function CuponFiltro({ valor, onCambiar, onLimpiar }) {
  return (
    <div className={styles.filtro}>
      <label htmlFor="filtro-campania" className={styles.etiqueta}>Filtrar por ID de campaña</label>
      <input id="filtro-campania" type="number" min="1" value={valor} onChange={(e) => onCambiar(e.target.value)} />
      <Button variante="secundario" onClick={onLimpiar}>Ver todos</Button>
    </div>
  );
}

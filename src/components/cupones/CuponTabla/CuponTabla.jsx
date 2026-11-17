import Button from "../../ui/Button/Button";
import styles from "./CuponTabla.module.css";

export default function CuponTabla({ cupones, onEditar, onEliminar }) {
  if (cupones.length === 0) {
    return <p className={styles.vacio}>No hay cupones para mostrar.</p>;
  }
  return (
    <div className={styles.contenedor}>
      <table className={styles.tabla}>
        <caption>Listado de cupones</caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Código</th>
            <th scope="col">Descuento</th>
            <th scope="col">Inicio</th>
            <th scope="col">Fin</th>
            <th scope="col">Campaña</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {cupones.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.codigo}</td>
              <td>{c.descuento}%</td>
              <td>{c.fechaInicio}</td>
              <td>{c.fechaFin}</td>
              <td>{c.idCampania}</td>
              <td className={styles.acciones}>
                <Button variante="secundario" onClick={() => onEditar(c)}>Editar</Button>
                <Button variante="peligro" onClick={() => onEliminar(c)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

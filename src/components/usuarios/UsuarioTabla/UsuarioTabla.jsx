import styles from "./UsuarioTabla.module.css";

export default function UsuarioTabla({ usuarios }) {
  return (
    <div className={styles.contenedor}>
      <table className={styles.tabla}>
        <caption>Listado de usuarios creados</caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Rol</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.idUsuario}>
              <td>{u.idUsuario}</td>
              <td>{u.nombreUsuario}</td>
              <td>{u.correo}</td>
              <td>{u.rol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

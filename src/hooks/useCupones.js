import { useState } from "react";
import { cuponesIniciales } from "../data/cupones";

export function useCupones() {
  const [cupones, setCupones] = useState(cuponesIniciales);

  const crear = (cupon) =>
    setCupones((lista) => {
      const mayor = lista.reduce((m, c) => Math.max(m, c.id), 0);
      return [...lista, { ...cupon, id: mayor + 1 }];
    });

  const actualizar = (id, cupon) =>
    setCupones((lista) => lista.map((c) => (c.id === id ? { ...cupon, id } : c)));

  const eliminar = (id) => setCupones((lista) => lista.filter((c) => c.id !== id));

  return { cupones, crear, actualizar, eliminar };
}

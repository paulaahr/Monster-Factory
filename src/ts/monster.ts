/**
 * monster.ts
 * ----------
 * Lógica para consultar y trabajar con los monstruos.
 *
 * Conceptos de JavaScript/TypeScript utilizados:
 * - Closures
 * - Funciones de orden superior
 * - Destructuring + spread
 * - Promesas
 * - async/await
 * - setTimeout
 */

import {
  Monstruo,
  Color,
  Personalidad,
  Rareza,
} from "./types.js";

// --- Closures ---------------------------------------------------------------

export function crearContadorConsultas() {
  let total = 0;

  return {
    registrar() {
      total += 1;
      return total;
    },

    obtenerTotal() {
      return total;
    },
  };
}

// --- Funciones de orden superior --------------------------------------------

export function filtrarPorColor(
  lista: Monstruo[],
  color: Color
): Monstruo[] {
  return lista.filter(
    (monstruo) => monstruo.color === color
  );
}

export function filtrarPorPersonalidad(
  lista: Monstruo[],
  personalidad: Personalidad
): Monstruo[] {
  return lista.filter(
    (monstruo) => monstruo.personalidad === personalidad
  );
}

export function filtrarPorRareza(
  lista: Monstruo[],
  rareza: Rareza
): Monstruo[] {
  return lista.filter(
    (monstruo) => monstruo.rareza === rareza
  );
}

export function calcularPromedioOjos(
  lista: Monstruo[]
): number {
  if (lista.length === 0) return 0;

  const suma = lista.reduce(
    (acumulado, monstruo) =>
      acumulado + monstruo.ojos,
    0
  );

  return Math.round(suma / lista.length);
}

// --- Destructuring + spread -------------------------------------------------

export function mostrarResumen(
  monstruo: Monstruo
): Monstruo {
  const {
    nombre,
    color,
    personalidad,
    ...caracteristicas
  } = monstruo;

  return {
    nombre,
    color,
    personalidad,
    ...caracteristicas,
  };
}
//

function cargarInformacion(
  monstruo: Monstruo
): Promise<Monstruo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!monstruo || !monstruo.nombre) {
        reject(
          new Error(
            `Monstruo inválido (id: ${monstruo?.id})`
          )
        );

        return;
      }

      resolve(monstruo);
    }, 150);
  });
}

export async function consultarMonstruos(
  lista: Monstruo[]
): Promise<Monstruo[]> {
  try {
    const disponibles = await Promise.all(
      lista.map((monstruo) =>
        cargarInformacion(monstruo)
      )
    );

    return disponibles;
  } catch (error) {
    console.error(
      "No se pudo cargar la información:",
      (error as Error).message
    );

    return [];
  }
}
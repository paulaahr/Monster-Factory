/**
 * monster.js
 * ----------
 * Funciones para consultar y trabajar con la información
 * de los monstruos.
 *
 * Conceptos de JavaScript avanzado:
 * - Closures
 * - Funciones de orden superior
 * - Destructuring + spread
 * - Promesas
 * - async/await
 * - setTimeout
 */

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

export function filtrarPorColor(lista, color) {
  return lista.filter((monstruo) => monstruo.color === color);
}

export function filtrarPorPersonalidad(lista, personalidad) {
  return lista.filter(
    (monstruo) => monstruo.personalidad === personalidad
  );
}

export function filtrarPorRareza(lista, rareza) {
  return lista.filter((monstruo) => monstruo.rareza === rareza);
}

export function calcularPromedioOjos(lista) {
  if (lista.length === 0) return 0;

  const suma = lista.reduce(
    (acumulado, monstruo) => acumulado + monstruo.ojos,
    0
  );

  return Math.round(suma / lista.length);
}

// --- Destructuring + spread -------------------------------------------------

export function mostrarResumen(monstruo) {
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

// --- Promesas, async/await y setTimeout -------------------------------------

function cargarInformacion(lista) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!lista || lista.length === 0) {
        reject(new Error("No hay información de monstruos disponible."));
        return;
      }

      resolve(lista);
    }, 1000);
  });
}

export async function consultarMonstruos(lista) {
  try {
    const monstruos = await cargarInformacion(lista);
    return monstruos;
  } catch (error) {
    console.error(
      "No se pudo cargar la información:",
      error.message
    );

    return [];
  }
}
/**
 * index.ts
 * --------
 * Punto de entrada de Monster Factory.
 */

import { monstruos } from "./data.js";

import {
  crearContadorConsultas,
  filtrarPorColor,
  filtrarPorPersonalidad,
  filtrarPorRareza,
  calcularPromedioOjos,
  mostrarResumen,
  consultarMonstruos,
} from "./monster.js";

async function main(): Promise<void> {
  console.log("    MONSTER FACTORY\n");

  // Closure
  const contador = crearContadorConsultas();

  contador.registrar();
  contador.registrar();

  console.log(
    `Consultas realizadas: ${contador.registrar()}`
  );

  // Promise + async/await + setTimeout
  console.log(
    "\nCargando información de los monstruos..."
  );

  const disponibles =
    await consultarMonstruos(monstruos);

  console.log(
    "Información cargada correctamente."
  );

  console.log(
    `Monstruos disponibles: ${disponibles.length}`
  );

  // Filter
  const monstruosAzules =
    filtrarPorColor(disponibles, "azul");

  console.log(
    `\nMonstruos azules: ${monstruosAzules
      .map((monstruo) => monstruo.nombre)
      .join(", ")}`
  );

  // Filter
  const monstruosAmigables =
    filtrarPorPersonalidad(
      disponibles,
      "amigable"
    );

  console.log(
    `Monstruos amigables: ${monstruosAmigables
      .map((monstruo) => monstruo.nombre)
      .join(", ")}`
  );

  // Filter
  const monstruosLegendarios =
    filtrarPorRareza(
      disponibles,
      "legendario"
    );

  console.log(
    `Monstruos legendarios: ${monstruosLegendarios
      .map((monstruo) => monstruo.nombre)
      .join(", ")}`
  );

  // Reduce
  const promedio =
    calcularPromedioOjos(disponibles);

  console.log(
    `\nPromedio de ojos: ${promedio}`
  );

  // Destructuring + spread
  const resumen =
    mostrarResumen(disponibles[0]);

  console.log(
    "\nInformación del monstruo:"
  );

  console.log(resumen);
}

main();
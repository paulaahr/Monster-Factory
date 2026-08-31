/**
 * index.js
 * --------
 * Punto de entrada de la versión JavaScript.
 * Muestra y consulta la información de los monstruos.
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

async function main() {
  console.log("    MONSTER FACTORY\n");

  // Closure
  const contador = crearContadorConsultas();

  contador.registrar();
  contador.registrar();

  console.log(`Consultas realizadas: ${contador.registrar()}`);

  // Promise + async/await + setTimeout
  console.log("\nCargando información de los monstruos...");

  const disponibles = await consultarMonstruos(monstruos);

  console.log("Información cargada correctamente.");
  console.log(`Monstruos disponibles: ${disponibles.length}`);

  // Filter por color
  const monstruosAzules = filtrarPorColor(disponibles, "azul");

  console.log(
    `\nMonstruos azules: ${monstruosAzules
      .map((monstruo) => monstruo.nombre)
      .join(", ")}`
  );

  // Filter por personalidad
  const monstruosAmigables = filtrarPorPersonalidad(
    disponibles,
    "amigable"
  );

  console.log(
    `Monstruos amigables: ${monstruosAmigables
      .map((monstruo) => monstruo.nombre)
      .join(", ")}`
  );

  // Filter por rareza
  const monstruosLegendarios = filtrarPorRareza(
    disponibles,
    "legendario"
  );

  console.log(
    `Monstruos legendarios: ${monstruosLegendarios
      .map((monstruo) => monstruo.nombre)
      .join(", ")}`
  );

  // Reduce
  const promedioOjos = calcularPromedioOjos(disponibles);

  console.log(`\nPromedio de ojos: ${promedioOjos}`);

  // Destructuring + spread
  const resumen = mostrarResumen(disponibles[0]);

  console.log("\nInformación del monstruo:");
  console.log(resumen);
}

main();
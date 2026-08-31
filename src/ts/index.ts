import { generateMonster } from "./monster.js";

async function main(): Promise<void> {
  try {
    const monster = await generateMonster();

    console.log("MONSTER FACTORY");
    console.log("Monstruo generado:");
    console.log(monster);
  } catch (error) {
    console.error("Error al generar el monstruo:", error);
  }
}

main();
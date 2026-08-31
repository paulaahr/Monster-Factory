import {
  names,
  colors,
  eyeCounts,
  personalities,
  abilities,
  rarities
} from "./data.js";

import type { Monster } from "./types.js";

export function getRandomItem<T>(array: T[]): T {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

export function generateMonster(): Promise<Monster> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const [name, color, eyes, personality, ability, rarity] = [
        getRandomItem(names),
        getRandomItem(colors),
        getRandomItem(eyeCounts),
        getRandomItem(personalities),
        getRandomItem(abilities),
        getRandomItem(rarities)
      ];

      const monster: Monster = {
        name,
        color,
        eyes,
        personality,
        ability,
        rarity
      };

      resolve(monster);
    }, 1000);
  });
}
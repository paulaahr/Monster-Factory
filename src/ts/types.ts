export type Color = "azul" | "morado" | "amarillo" | "verde";

export type Personality =
  | "amigable"
  | "divertido"
  | "tímido"
  | "peligroso";

export type Rarity = "común" | "raro" | "épico" | "legendario";

export interface Monster {
  name: string;
  color: Color;
  eyes: number;
  personality: Personality;
  ability: string;
  rarity: Rarity;
}
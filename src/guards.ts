import { type Pokemon } from "./types";

export function isPokemon(value: unknown): value is Pokemon {
  return (
    typeof value === "object" &&
    value !== null &&
    "id" in value &&
    "name" in value &&
    "sprites" in value &&
    "types" in value &&
    typeof value.name === "string" &&
    typeof value.id === "number" &&
    typeof value.sprites === "object" &&
    value.sprites !== null &&
    Array.isArray(value.types)
  );
}

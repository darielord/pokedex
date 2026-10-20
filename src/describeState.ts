import { type RequestState } from "./types";
import { type Pokemon } from "./types";

export function describeState(state: RequestState<Pokemon, string>): string {
  switch (state.status) {
    case "idle":
      return "actualmente idle";

    case "loading":
      return "Cargando...";

    case "success":
      return state.data.name;

    case "error":
      return state.error;

    default:
      const pred: never = state;
      throw new Error("Estado desconocido");
  }
}

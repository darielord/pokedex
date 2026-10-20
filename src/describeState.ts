import { type RequestState } from "./types";
import { type Pokemon } from "./types";
import { type ApiError } from "./types";
import { describeError } from "./describeError";

export function describeState(state: RequestState<Pokemon, ApiError>): string {
  switch (state.status) {
    case "idle":
      return "actualmente idle";

    case "loading":
      return "Cargando...";

    case "success":
      return state.data.name;

    case "error":
      return describeError(state.error);

    default:
      const pred: never = state;
      throw new Error("Estado desconocido");
  }
}

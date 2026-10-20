import { type ApiError } from "./types";

export function describeError(api: ApiError): string {
  switch (api.kind) {
    case "network":
      return "Sin conexion";
    case "http":
      return `Error HTTP ${api.status}`;
    case "invalid-data":
      return `Datos invalidos ${api.message}`;

    default:
      const pred: never = api;
      throw new Error("Tipo no valido");
  }
}

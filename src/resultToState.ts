import { type ApiError, type Pokemon } from "./types";

import { type RequestState } from "./types";

import { type Result } from "./types";

export function resultToState(
  result: Result<Pokemon, ApiError>,
): RequestState<Pokemon, ApiError> {
  if (result.ok) {
    return {
      data: result.data,
      status: "success",
    };
  } else {
    return {
      status: "error",
      error: result.error,
    };
  }
}

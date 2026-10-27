import { type RequestState } from "./types";

import { type Result } from "./types";

export function resultToState<T, E>(result: Result<T, E>): RequestState<T, E> {
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

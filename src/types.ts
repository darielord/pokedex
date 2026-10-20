export type Pokemon = {
  readonly id: number;
  readonly name: string;
  readonly sprites: { readonly front_default: string | null };
  readonly types: readonly {
    readonly slot: number;
    readonly type: {
      readonly name: string;
    };
  }[];
};

export type ApiError =
  | { readonly kind: "network" }
  | { readonly kind: "http"; readonly http: number }
  | { readonly kind: "invalid-data"; readonly invalid: string };

const charizard: Pokemon = {
  id: 6,
  name: "charizard",
  sprites: { front_default: "texto" },
  types: [
    {
      slot: 1,
      type: {
        name: "fire",
      },
    },
    {
      slot: 2,
      type: {
        name: "flying",
      },
    },
  ],
};

export type RequestState<T, E> =
  | { readonly status: "idle" }
  | { readonly status: "loading" }
  | { readonly status: "success"; readonly data: T }
  | { readonly status: "error"; readonly error: E };

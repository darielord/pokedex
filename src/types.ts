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

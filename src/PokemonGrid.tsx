import { describeError } from "./describeError";
import { usePokemonList } from "./usePokemonList";
import { PokemonItem } from "./PokemonItem";

export function PokemonGrid() {
  const state = usePokemonList();

  switch (state.status) {
    case "idle":
      return <p> {"Idle"} </p>;

    case "loading":
      return <p> {"Espera..."} </p>;

    case "success":
      return state.data.results.length === 0 ? (
        <p> {"Vacio"} </p>
      ) : (
        <div className="PokemonGrid">
          {" "}
          {state.data.results.map((item) => {
            return <PokemonItem name={item.name} key={item.name} />;
          })}{" "}
        </div>
      );

    case "error":
      return <p> {describeError(state.error)} </p>;

    default:
      const pred: never = state;
      throw new Error("Estado desconocido");
  }
}

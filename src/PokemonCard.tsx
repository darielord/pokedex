import { type Pokemon } from "./types";

export function PokemonCard(Poke: { Pokemon: Pokemon }) {
  return (
    <div>
      {Poke.Pokemon.name}
      {Poke.Pokemon.sprites.front_default && (
        <img src={Poke.Pokemon.sprites.front_default} alt={Poke.Pokemon.name} />
      )}
      <ul>
        {Poke.Pokemon.types.map((t) => {
          return <li key={t.slot}>{t.type.name}</li>;
        })}
      </ul>
    </div>
  );
}

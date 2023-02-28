import pokemonCard from "./PokemonCard.module.css";

export const PokemonCard = ({ element }) => {
  let pokemon = element;
  return (
    <div className={pokemonCard.container}>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.avatar} alt="" />
      <h2>{pokemon.powerLevel}</h2>
      <h2>{pokemon.aggressive ? "It's aggresive" : "It's not aggresive"}</h2>
    </div>
  );
};

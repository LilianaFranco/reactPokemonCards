export const PokemonCard = ({ element }) => {
  let pokemon = element;
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.avatar} alt="" />
      <h2>{pokemon.powerLevel}</h2>
      <h2>{pokemon.aggressive ? "It's aggresive" : "It's not aggresive"}</h2>
    </div>
  );
};

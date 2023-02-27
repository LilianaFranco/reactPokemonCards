import pokemonsJson from "../../pokemons.json";

export const Pokemons = ({ type }) => {
  let pokemonByType = pokemonsJson[type];
  console.log(pokemonByType);

  return (
    <div>
      {pokemonByType.map((pomekon) => {
        return (
          <div key={pomekon.id}>
            <h1>{pomekon.name}</h1>
            <img src={pomekon.avatar} alt="" />
            <h2>{pomekon.powerLevel}</h2>
            <h2>
              {pomekon.aggressive ? "It's aggresive" : "It's not aggresive"}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

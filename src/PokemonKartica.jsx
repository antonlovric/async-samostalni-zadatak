import { useEffect, useState } from 'react';

const PokemonKartica = () => {
  const [pokemon, postaviPokemona] = useState(null);
  async function dohvatiPodatke() {
    const rezultat = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const podaci = await rezultat.json();
    postaviPokemona(podaci);
  }

  useEffect(() => {
    dohvatiPodatke();
  }, []);

  return (
    <>
      <h2>Moj pokemon: {pokemon?.name}</h2>
      <div className='kartica'>
        <div className='zaglavlje'>
          <p>{pokemon?.name}</p>
          <img src={pokemon?.sprites.front_shiny} alt='' />
        </div>
        <div>
          {pokemon?.stats.map((move, index) => (
            <div className='statistika' key={index}>
              <span>{move?.stat?.name}:</span>
              {move?.base_stat}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PokemonKartica;

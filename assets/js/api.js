const getPokemons = async (offset = 10, limit = 10) => {
  let data = [];
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?{offset=${offset}&limit=${limit}}`
    );
    data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
  return data;
};

const getInfoPokemons = async () => {
  const pokemons = await getPokemons();
  const promises = pokemons.map((pokemon) => {
    const response = fetch(pokemon.url);
    return response;
  });
  return Promise.all(promises);
};

const createPokemonCard = async () => {
  const responses = await getInfoPokemons()
    .then((data) => data)
    .then((data) => {
      console.log(data);
    });

  // const card = document.createElement("div");
  // card.className = "card";
  // card.innerHTML = `
  //   <ims src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
  //   <h2>${pokemon.name}</h2>
  //   <p>${pokemon.types.map((type) => type.type.name).join(", ")}</p>
  // `;
  // return card;
};

createPokemonCard();

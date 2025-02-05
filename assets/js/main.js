console.log("Sucesso!");
<<<<<<< HEAD
const container = document.querySelector(".content");
const listaOrdenada = document.querySelector(".pokemons");
class PokemonModel {
  constructor(name, number, type, types, photo) {
    this.name = name;
    this.number = number;
    this.type = type;
    this.types = types;
    this.photo = photo;
  }
}

// Função para buscar Pokémons
const fetchPokemons = async (offset = 0, limit = 10) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

// Função para obter informações detalhadas dos Pokémons
const fetchPokemonDetails = async (pokemons) => {
  const promises = pokemons.map(async (pokemon) => {
    const response = await fetch(pokemon.url);
    return response.json();
  });
  return Promise.all(promises);
};

// Função para criar uma instância de PokemonModel
const createPokemonModel = (detailPokemon) =>
  new PokemonModel(
    detailPokemon.name,
    detailPokemon.id,
    detailPokemon.types[0].type.name,
    detailPokemon.types,
    detailPokemon.sprites.front_default
  );

// Função para mapear os dados detalhados para o modelo de Pokémon
const mapToPokemonModel = (pokemonsData) =>
  pokemonsData.map(createPokemonModel);

// Função para criar os cartões de Pokémon
const createPokemonCards = (pokemons) => {
  pokemons.forEach((pokemon) => {
    const li = document.createElement("li");
    li.classList.add("pokemon");
    li.innerHTML = `
      <span class="number">${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type">${type.type.name}</li>`)
            .join("")}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}" />
      </div>
    `;
    listaOrdenada.appendChild(li);
  });
};

// Função principal para orquestrar as outras funções
const initializePokemonList = async () => {
  const pokemons = await fetchPokemons();
  const pokemonsData = await fetchPokemonDetails(pokemons);
  const detailedPokemons = mapToPokemonModel(pokemonsData);
  createPokemonCards(detailedPokemons);
};

initializePokemonList();

const createLoadMoreButton = () => {
  const button = document.createElement("button");
  button.textContent = "Carregar mais";
  button.classList.add("button");

  button.addEventListener("click", async () => {
    try {
      const offset = listaOrdenada.children.length;
      const pokemons = await fetchPokemons(offset, 10);
      const pokemonsData = await fetchPokemonDetails(pokemons);
      const detailedPokemons = mapToPokemonModel(pokemonsData);
      createPokemonCards(detailedPokemons);
    } catch (error) {
      console.error("Erro ao carregar mais Pokémons:", error);
    }
  });

  container.appendChild(button);
};

// Adiciona o botão ao contêiner
createLoadMoreButton();
=======
>>>>>>> eb1cdf2f6525dfbc286aa7d50672e459bd0d3160

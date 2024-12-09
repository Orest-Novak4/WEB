const pokemonList = [
    { name: "Charmander", id: 4 },
    { name: "Squirtle", id: 7 },
    { name: "Pikachu", id: 25 },
    { name: "Jigglypuff", id: 39 },
    { name: "Bulbasaur", id: 1 },
    { name: "Charizard", id: 6 },
    { name: "Butterfree", id: 12 },
    { name: "Beedrill", id: 15 },
    { name: "Rattata", id: 19 },
    { name: "Meowth", id: 52 },
    { name: "Geodude", id: 74 },
    { name: "Ponyta", id: 77 },
    { name: "Eevee", id: 133 },
    { name: "Snorlax", id: 143 },
    { name: "Mew", id: 151 },
    { name: "Mewtwo", id: 150 }
];

const container = document.getElementById('pokemon-container');

function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';

    const img = document.createElement('img');
    img.src = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png;
    img.alt = pokemon.name;

    const link = document.createElement('a');
    link.href = https://bulbapedia.bulbagarden.net/wiki/${pokemon.name}_(Pokémon);
    link.target = '_blank';
    link.textContent = pokemon.name;

    card.appendChild(img);
    card.appendChild(link);

    return card;
}

pokemonList.forEach(pokemon => {
    const card = createPokemonCard(pokemon);
    container.appendChild(card);
});
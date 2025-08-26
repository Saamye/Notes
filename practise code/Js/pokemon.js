async function getPokemon(pokemonName) {
    try {
        if(typeof pokemonName === "string") {
            const URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
        } else {throw new Error("Wrong input!")}
    } catch (error) {
        console.error("Could not connect to the server!..", error)
    }
}
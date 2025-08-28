async function getPokemon(pokemonName) {
    try {
        
        if (typeof pokemonName === "string") { //checking if the user entered a string
            
            const URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`); //trying to fetch the API based on the input

            if(!response.ok) throw new Error(response.status); //to check if the response was successfull using the response.ok functionality

            const pokemon = await response.json() //retrive info if await was successfull
            console.log(pokemon);

            
            //store the properties from the retrived object  
            const name = pokemon.name;
            const height = pokemon.height;
            const weight = pokemon.weight;
            const image = pokemon.sprites.front_default;



            const typesOfPokemon = pokemon.types.map((element) => element.type.name);
                
            const sound = Object.entries(pokemon.cries).map((key, value) => {
                {
                    soundType: key,
                    sound: value
                }
            })




        } else throw new Error("Wrong input!");

    } catch (error) {

        console.error("Could not connect to the server!..", error)
    
    }
}




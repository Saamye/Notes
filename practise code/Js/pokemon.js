async function getPokemon(pokemonName) {
    try {
        
        if (typeof pokemonName === "string") { //checking if the user entered a string
            
            const URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`); //trying to fetch the API based on the input

            if(!response.ok) throw new Error(response.status); //to check if the response was successfull using the response.ok functionality

            const pokemon = await response.json() //retrive info if await was successfull
            console.log(pokemon); 
                
        } else throw new Error("Wrong input!");

    } catch (error) {

        console.error("Could not connect to the server!..", error)
    
    }
}




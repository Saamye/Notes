async function getPokemon(pokemonName) {
    try {
        
        //checking if the user entered a string
        if (typeof pokemonName === "string") {
            
            //trying to fetch the API based on the input
            const URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);

            //to check if the response was successfull using the response.ok functionality
            if(!response.ok) { throw new Error("Was not able to Fetch the API!!!")}
          
              
        } else { throw new Error("Wrong input!") }


    } catch (error) {
        console.error("Could not connect to the server!..", error)
    }
}




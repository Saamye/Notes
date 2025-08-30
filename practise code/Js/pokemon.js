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



            const sounds = Object.entries(pokemon.cries).map(([key, value]) => {
                return {
                    soundType: key,
                    sound: value
                };
            });

            const card = document.createElement("div");
            card.classList.add("pokemon-card");

            const img = document.createElement("img");
            img.src = image;
            card.appendChild(img);

            const pokemonInfo = document.createElement("p");
            pokemonInfo.style.margin = "5px";
            pokemonInfo.style.fontSize = "12px";
            pokemonInfo.innerHTML = `
                ${name} <br>
                ${height*0.1}/m <br>
                ${weight}oz <br>
                ${types.join(",")}
            
            `;
            card.appendChild(pokemonInfo);

            const soundCont = document.createElement("div");
            
            for (let i = 0; i < sounds.length; i++) {
                const button = document.createElement("button");
                button.textContent = sounds[i].soundType;
                button.addEventListener("click", () => {
                    const cry = new Audio(sounds[i].sound)  
                    cry.play();
                })
            };


        } else throw new Error("Wrong input!");

    } catch (error) {

        console.error("Could not connect to the server!..", error)
    
    }
}




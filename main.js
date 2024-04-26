// //EJERCICIO 2.1


let ahora = null
document.querySelector('#ejercicio21').addEventListener('click',async (e)=>{
    e.preventDefault
    document.querySelector('#tiempo22').innerHTML = 0 + " milisegundos"
    document.querySelector('#tiempo23').innerHTML = 0 + " milisegundos"
    document.querySelector('#listaPokemons').innerHTML = ""
    ahora = new Date().getTime()


    const pokemon = []
    for (let i = 0; i < 12; i++) {
        let arrayPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
        arrayPokemon = await arrayPokemon.json()
        pokemon.push(arrayPokemon)  
    }
    inyectaPokemon(pokemon)

})

async function inyectaPokemon(pokemon){

    try { 
        for (let i = 0; i < pokemon.length; i++) {

            document.querySelector('#listaPokemons').innerHTML += 
            `
            <div class="col-md-2">
                <div class="card shadow">
                    <img src="${pokemon[i].sprites.front_default}">
                    <div class="card-body">
                        <h5 class="card-title text-capitalize">${pokemon[i].name}</h5>
                        <div class="card-text">ID: ${pokemon[i].id}</div>
                        <div class="card-text">Tipo: ${pokemon[i].types.map(type => type.type.name).join(', ')}</div>
                        <div class="card-text">Peso: ${pokemon[i].weight}</div>
                        <div class="card-text">Altura: ${pokemon[i].height}</div>
                    </div>
                </div>
            </div>
        `
            
        }
        let ahoraDespues = new Date().getTime()
        let resultadoHoras = ahoraDespues  - ahora
        document.querySelector('#tiempo21').innerHTML = resultadoHoras + " milisegundos"

    } catch (error) { 
        console.log('Se ha producido un error en la petición', error);
    }

}


// //EJERCICIO 2.2

let ahora2 = null
document.querySelector('#ejercicio22').addEventListener('click',(e)=>{
    e.preventDefault
    document.querySelector('#tiempo21').innerHTML = 0 + " milisegundos"
    document.querySelector('#tiempo23').innerHTML = 0 + " milisegundos"
    document.querySelector('#listaPokemons').innerHTML = ""
    ahora = new Date().getTime()
    const pokemon = []
    fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(resp => resp.json())
    .then(respJSON => {
        pokemon.push(respJSON)
        fetch('https://pokeapi.co/api/v2/pokemon/2')
        .then(resp => resp.json())
        .then(respJSON => {
            pokemon.push(respJSON)
            fetch('https://pokeapi.co/api/v2/pokemon/3')
            .then(resp => resp.json())
            .then(respJSON => {
                pokemon.push(respJSON)
                fetch('https://pokeapi.co/api/v2/pokemon/4')
                .then(resp => resp.json())
                .then(respJSON => {
                    pokemon.push(respJSON)
                    fetch('https://pokeapi.co/api/v2/pokemon/5')
                    .then(resp => resp.json())
                    .then(respJSON => {
                        pokemon.push(respJSON)
                        fetch('https://pokeapi.co/api/v2/pokemon/6')
                        .then(resp => resp.json())
                        .then(respJSON => {
                            pokemon.push(respJSON)
                            fetch('https://pokeapi.co/api/v2/pokemon/7')
                            .then(resp => resp.json())
                            .then(respJSON => {
                                pokemon.push(respJSON)
                                fetch('https://pokeapi.co/api/v2/pokemon/8')
                                .then(resp => resp.json())
                                .then(respJSON => {
                                    pokemon.push(respJSON)
                                    fetch('https://pokeapi.co/api/v2/pokemon/9')
                                    .then(resp => resp.json())
                                    .then(respJSON => {
                                        pokemon.push(respJSON)
                                        fetch('https://pokeapi.co/api/v2/pokemon/10')
                                        .then(resp => resp.json())
                                        .then(respJSON => {
                                            pokemon.push(respJSON)
                                            fetch('https://pokeapi.co/api/v2/pokemon/11')
                                            .then(resp => resp.json())
                                            .then(respJSON => {
                                                pokemon.push(respJSON)
                                                fetch('https://pokeapi.co/api/v2/pokemon/12')
                                                .then(resp => resp.json())
                                                .then(respJSON => {
                                                    pokemon.push(respJSON)
                                                    inyectaPokemon2(pokemon)  
                                        
                                                })
                                    
                                            })
                                
                                        })
                            
                                    })
                        
                                })
                    
                            })

                        })

                    })

                })

            })

        })

    })

})


async function inyectaPokemon2(pokemon){
    
    try { 
        for (let i = 0; i < pokemon.length; i++) {
                document.querySelector('#listaPokemons').innerHTML += 
                `
                <div class="col-md-2">
                    <div class="card shadow">
                        <img src="${pokemon[i].sprites.front_default}">
                        <div class="card-body">
                            <h5 class="card-title text-capitalize">${pokemon[i].name}</h5>
                            <div class="card-text">ID: ${pokemon[i].id}</div>
                            <div class="card-text">Tipo: ${pokemon[i].types.map(type => type.type.name).join(', ')}</div>
                            <div class="card-text">Peso: ${pokemon[i].weight}</div>
                            <div class="card-text">Altura: ${pokemon[i].height}</div>
                        </div>
                    </div>
                </div>
            `
        }
        let ahoraDespues = new Date().getTime()
        let resultadoHoras = ahoraDespues  - ahora
        document.querySelector('#tiempo22').innerHTML = resultadoHoras + " milisegundos"

    } catch (error) { 
        console.log('Se ha producido un error en la petición', error)
    }

}

//EJERCICIO 2.3

document.querySelector('#ejercicio23').addEventListener('click',(e)=>{
    
    e.preventDefault

    document.querySelector('#tiempo21').innerHTML = 0 + " milisegundos"
    document.querySelector('#tiempo22').innerHTML = 0 + " milisegundos"
    document.querySelector('#listaPokemons').innerHTML = ""

    let ahora3 = new Date().getTime()
    
    leerPokemonConPromise()

    async function leerPokemonConPromise(){
        
        const arrayPokemons=[]

        for(let i=0;i<12;i++){
          arrayPokemons[i] = fetch(`https:/pokeapi.co/api/v2/pokemon/${i+1}`).then(resp=>resp.json())
        }
        const respuestas  =  await Promise.all(arrayPokemons)


        for (let i = 0; i < respuestas.length; i++) {
                document.querySelector('#listaPokemons').innerHTML += 
                `
                <div class="col-md-2">
                    <div class="card shadow">
                        <img src="${respuestas[i].sprites.front_default}">
                        <div class="card-body">
                            <h5 class="card-title text-capitalize">${respuestas[i].name}</h5>
                            <div class="card-text">ID: ${respuestas[i].id}</div>
                            <div class="card-text">Tipo: ${respuestas[i].types.map(type => type.type.name).join(', ')}</div>
                            <div class="card-text">Peso: ${respuestas[i].weight}</div>
                            <div class="card-text">Altura: ${respuestas[i].height}</div>
                        </div>
                    </div>
                </div>
            `
            }   
        }

        let ahoraDespues = new Date().getTime()
        let resultadoHoras = ahoraDespues  - ahora3
        document.querySelector('#tiempo23').innerHTML = resultadoHoras + " milisegundos"


    })




// let listaProductos = document.querySelector("#listaProductos");
let pokedex = document.querySelector("#pokedex");
let miPokedex = [];

// Obtiene los productos de la API
// Obtiene produtos
// let obtieneProductos = () => {
//   // Promise o Promesa
//   fetch("https://fakestoreapi.com/products/")
//     .then((res) => res.json())
//     .then((productosObtenidos) => {
//       console.log("Productos obtenidos ", productosObtenidos);

//       productosObtenidos.forEach((producto, indice) => {
//         console.log("Producto ", producto);
//         listaProductos.innerHTML += `
//                 <div class="col-12 col-md-3 col-lg-3">
//                     <div class="card">
//                         <img src="${
//                           producto.image
//                         }" class="card-img-top imagenProducto py-2" alt="...">
//                         <div class="card-body">
//                             <h5 class="card-title
//                             ">${producto.title.slice(0, 25)}</h5>
//                             <p class="card-text">${producto.description.slice(
//                               0,
//                               100
//                             )}</p>
//                             <p class="card-text text-danger">$${
//                               producto.price
//                             }</p>
//                             <a href="#" class="btn btn-primary">Comprar</a>
//                         </div>
//                     </div>
//                 </div>
//                 `;
//       });
//     });
// };

obtenerPokemon = () => {
  fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${Math.floor(
      Math.random() * 501
    )}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      miPokedex = data.results;

      miPokedex.forEach((id) => {
        fetch(id.url)
          .then((response) => response.json())
          .then((pokemon) => {
            console.log(pokemon);
            pokedex.innerHTML += `
                        <div class="col-12 col-md-3 col-lg-3">
                            <div class="card">
                                <img src="${pokemon.sprites.front_default}" class="card-img-top imagenPokemon py-2" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${pokemon.name}</h5>
                                    <p class="card-text">Altura: ${pokemon.height}</p>
                                    <p class="card-text">Peso: ${pokemon.weight}</p>
                                    <p class="card-text">Habilidades</p> 
                                    <ul>
                                        <li>${pokemon.abilities[0].ability.name}</li>
                                        <li>${pokemon.abilities[1].ability.name}</li>
                                    </ul>
                                    <p class="card-text">Tipo: ${pokemon.types[0].type.name}</p>
                                    <p class="card-text">Experiencia base: ${pokemon.base_experience}</p>
                                    <a href="#" class="btn btn-primary">Agregar a mi Pokedex</a>

                                </div>
                            </div>
                        </div>
            `;
          });
      });
    });
};

obtenerPokemon();

obtieneProductos();

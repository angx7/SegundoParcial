let btnBuscar = document.querySelector("#btnBuscar");
let textoBuscar = document.querySelector("#textoBuscar");

obtieneProductos();
obtieneCategorias();

// let listaProductos = document.querySelector("#listaProductos");
// let listaCategorias = document.querySelector("#listaCategorias");
// let productos = [];
// let productosMostrar = [];

// let obtieneCategorias = () => {
//   fetch("https://fakestoreapi.com/products/categories")
//     .then((res) => res.json())
//     .then((categoriasObtenidas) => {
//     //   console.log("Categorias obtenidas ", categoriasObtenidas);
//       categoriasObtenidas.forEach((categoria, indice) => {
//         // console.log("Categoria ", categoria);
//         categoria = categoria.replace("'", "");
//         listaCategorias.innerHTML += `
//                     <li class="nav-item">
//                         <a class="nav-link" href="#" onclick="muestraProductos('${categoria}')">${categoria.toUpperCase()}</a>
//                     </li>
//                 `;
//       });
//     });
// };

// obtieneCategorias();

// let muestraProductos = (categoria) => {
// //   console.log("Categoria seleccionada ", categoria);

//   productosMostrar = productos.slice();
// //   console.log("Productos ", productosMostrar);
//   if (categoria != "") {
//     productosMostrar = productos.filter(
//       (producto) => producto.category == categoria
//     );
//   }
// //   console.log("Productos a mostrar ", productosMostrar);
//   renderProductos();
// };

// let renderProductos = () => {
//   listaProductos.innerHTML = "";
//   productosMostrar.forEach((producto, indice) => {
//     listaProductos.innerHTML += `
//         <div class="col-12 col-md-3">
//             <div class="card" style="width: 18rem;">
//                 <img src="${
//                   producto.image
//                 }" class="card-img-top imagenProducto py-2" alt="">
//                 <div class="card-body">
//                     <h5 class="card-title">${producto.title}</h5>
//                     <p class="card-text">${producto.description.slice(
//                       0,
//                       100
//                     )}</p>
//                     <p class="text-danger">$ ${producto.price}</p>
//                     <a href="#" class="btn btn-primary">Comprar</a>
//                 </div>
//             </div>
//         </div>
//         `;
//   });
// };

// // Obtiene produtos
// let obtieneProductos = () => {
//   // Promise o Promesa
//   fetch("https://fakestoreapi.com/products/")
//     .then((res) => res.json())
//     .then((productosObtenidos) => {
//     //   console.log("Productos obtenidos ", productosObtenidos);

//       productos = productosObtenidos.slice();

//       productosObtenidos.forEach((producto, indice) => {
//         // console.log("Producto ", producto);

//         listaProductos.innerHTML += `
//                 <div class="col-12 col-md-3">
//                     <div class="card" style="width: 18rem;">
//                         <img src="${
//                           producto.image
//                         }" class="card-img-top imagenProducto py-2" alt="">
//                         <div class="card-body">
//                             <h5 class="card-title">${producto.title}</h5>
//                             <p class="card-text">${producto.description.slice(
//                               0,
//                               100
//                             )}</p>
//                             <p class="text-danger">$ ${producto.price}</p>
//                             <a href="#" class="btn btn-primary">Comprar</a>
//                         </div>
//                     </div>
//                 </div>
//                 `;
//       });
//     });
// };

// obtieneProductos();

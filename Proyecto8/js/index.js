let formulario = document.getElementById("formulario");
let formularioEditar = document.getElementById("formularioEditar");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let idTarea = document.getElementById("idTarea");
let listaTareas = document.getElementById("listaTareas");
let btnGuardar = document.getElementById("btnGuardar");
let btnGuardarEditar = document.getElementById("btnGuardarEditar");


let tareas = [
    {
        nombre: "Alex",
        fecha: "2012-12-12",
        descripcion: "Lavar el auto con agua y jabón."
    },
    {
        nombre: "Santiago",
        fecha: "2012-12-12",
        descripcion: "Saca a pasear al perro."
    },
    {
        nombre: "Samantha",
        fecha: "2024-03-10",
        descripcion: "Ir a la carne asada."
    },
];



let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, index) => {
        listaTareas.innerHTML += `
        <div class='row'>
            <div class='col-3 border p-3'>
                <strong>${tarea.nombre}</strong>
            </div>
            <div class='col-3 border p-3'>
                <strong>${tarea.fecha}</strong>
            </div>
            <div class='col-4 border p-3'>
                <strong>${tarea.descripcion}</strong>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-success' data-bs-toggle="modal" data-bs-target="#editarTarea" onclick='editarTarea(${index})'>Editar</button>
            </div>
            <div class='col-1 border p-3 text-center'>
                <button class='btn btn-danger' onclick='borrarTarea(${index})'>Eliminar</button>
            </div>
        </div>
        `;
    });
}
mostrarTareas();
let AgregarDatos = () => {
    let datos = {
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
    };
    tareas.push(datos);
    mostrarTareas();

}

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss", "modal");
    btnGuardar.click();
}

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss", "modal");
    btnGuardarEditar.click();
}

let borrarTarea = (index) => {
    tareas.splice(index, 1);
    mostrarTareas();
}

let editarTarea = (index) => {
    nombreEditar.value = tareas[index].nombre;
    fechaEditar.value = tareas[index].fecha;
    descripcionEditar.value = tareas[index].descripcion;
    idTarea.value = index;
}

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].fecha = fechaEditar.value;
    tareas[indice].descripcion = descripcionEditar.value;
    cerrarModalEditar();
    mostrarTareas();
});


formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    AgregarDatos();
    cerrarModal();
    formulario.reset();
});

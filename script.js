// Arreglo para almacenar las tareas
let tareas = [];

// Función para agregar una nueva tarea
function añadirTarea() {
  const descripcion = document.getElementById("tarea").value;
  const plazo = document.getElementById("plazo").value;
  const importante = document.getElementById("importante").checked; // Obtener el valor del checkbox
  const categoria = document.getElementById("categoria").value
    let fecha = new Date("2024-11-19")
  // Validación básica
  if (descripcion === "" || plazo === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  if (plazo<fecha){
        alert("tienes buen plazo")
  } else if (plazo>fecha) {
    alert("pon una mejor fecha")
  }else {
    alert("se termina hoy")
  }
  // Crear tarea como un objeto
  const nuevaTarea = {
    descripcion: descripcion,
    plazo: plazo,
    estado: "pendiente", // es el estado inicial de todas las tareas
    importante: importante, // Valor booleano indicando si es importante o no
    categoria: categoria
    
  };

  tareas.push(nuevaTarea); // Agregar la tarea al arreglo
  mostrarTareas(); // Actualizar la lista de tareas
}

// Función para mostrar las tareas en la lista
function mostrarTareas() {
  const lista = document.getElementById("lista-tareas");
  lista.innerHTML = ""; // Limpiar la lista

  // Recorrer las tareas y mostrarlas
  //.length en JavaScript se utiliza para obtener la cantidad de elementos en un array, el número de caracteres en una cadena, o el número de elementos en otros objetos tipo colección. Aquí tienes unos ejemplos para ilustrarlo
  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];

    const li = document.createElement("li");
    //se utiliza para obtener o establecer el contenido textual de un elemento li (list item) en un documento HTML
    li.textContent = `${tarea.descripcion} - Plazo: ${tarea.plazo} - Estado: ${tarea.estado} - categoria: ${tarea.categoria} - Importante:  ${tarea.importante ? ' Sí ' : ' No '}`; 

    // Botón para cambiar estado
    const botonEstado = document.createElement("button");  //Crea un nuevo elemento HTML de tipo boton.
    botonEstado.textContent = "     Cambiar Estado ";  //Asigna el texto " Cambiar Estado " como el contenido del botón.
    botonEstado.onclick = () => cambiarEstado(i);  //Define una función que se ejecutará cuando el botón sea clicado.
    li.appendChild(botonEstado);

    lista.appendChild(li); //Añadir interactividad a las tareas (como botones funcionales)
  }
}

// Función para cambiar el estado de una tarea usando un switch
function cambiarEstado(indice) {
  const tarea = tareas[indice];

  switch (tarea.estado) {
    case "pendiente":
      tarea.estado = "en progreso";
      break;
    case "en progreso":
      tarea.estado = "completada";
      break;
    case "completada":
      tarea.estado = "atrasada";
      break;
    case "atrasada":
      tarea.estado = "pendiente";
      break;
    default:
      tarea.estado = "pendiente";
  }

  mostrarTareas(); // Actualizar la lista
}

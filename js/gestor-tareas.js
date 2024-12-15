// --- Inicialización ---
const tareas = []; // Creamos un array donde vamos a almacenar todas las tareas que se vayan generando

// --- Función para agregar una tarea --- 
function agregarTarea() {
  const descripcion = document.getElementById("descripcion").value.trim(); 
  // Seleccionamos el valor de #descripcion. Eliminamos espacios innecesarios del inicio y final de una cadena con el método string .trim
  const fechaLimite = document.getElementById("fechaLimite").value; 
  // Seleccionamos el valor del input Fecha seleccionada
  const esImportante = document.getElementById("esImportante").checked; 
  // Seleccionamos el booleano de si Importante Checkbox está seleccionado
  const notas = document.getElementById("notas").value.trim(); 
  // Seleccionamos el valor de #notas. Método string .trim para eliminar espacios innecesarios.

  // Validación básica si no hay descripción que agregar.
  if (!descripcion) {
    alert("La descripción de la tarea es obligatoria.");
    return;
  }

  // Creamos un objeto para representar la tarea
  const tarea = {
    descripcion,                   // La descripción o título de la tarea. Se toma directamente del campo de entrada del usuario. Es lo mismo que escribir descripcion: descripcion
    fecha: fechaLimite || "Sin fecha",  // La fecha límite de la tarea, tomada del campo de fecha. Si el usuario no selecciona una fecha, se asigna "Sin fecha" por defecto. 
    importante: esImportante,      // Un valor booleano (true/false) que indica si la tarea fue marcada como "importante" o no.
    notas,                         // Notas adicionales sobre la tarea. Se toman del campo textarea. Es lo mismo que escribir notas: notas
    completada: false,             // Un valor booleano que inicialmente es `false` y representa si la tarea está completada o pendiente.
  };

  // Agregamos la tarea al array de tareas
  tareas.push(tarea); // Método push() añade un elemento al final del array

  // Limpiar el formulario
  document.getElementById("descripcion").value = "";
  document.getElementById("fechaLimite").value = "";
  document.getElementById("esImportante").checked = false;
  document.getElementById("notas").value = "";

  actualizarTareas();
}

// --- Función para actualizar la lista de tareas ---
function actualizarTareas() {
  const listaTareas = document.getElementById("listaTareas");
  listaTareas.innerHTML = ""; // Limpiamos el contenido previo

  tareas.forEach((tarea, indice) => {
    // Método forEach() recorre el array y ejecuta una función para cada elemento. 
    // Con los datos del array vamos a construir el html sustituyendo las variables por los datos del array en cada índice.
    const tareaHTML = `
      <div class="tarea ${tarea.importante ? "importante" : ""}">
        <div class="info">
          <h3>${tarea.descripcion}</h3>
          <p>Fecha límite: ${tarea.fecha}</p>
          <p>${tarea.notas ? `Notas: ${tarea.notas}` : ""}</p>
        </div>
        <div class="acciones">
          <button onclick="toggleCompletar(${indice})">
            ${tarea.completada ? "Desmarcar" : "Completar"} 
          </button>
          <button onclick="eliminarTarea(${indice})">Eliminar</button>
        </div>
      </div>
    `; // en el botón usamos el operador ternario para hacer una condicional sencilla 
    listaTareas.innerHTML += tareaHTML; // Agregamos el HTML al contenedor
  });

  actualizarEstadisticas();
}

// --- Función para alternar el estado de completado ---
function toggleCompletar(indice) {                    // Accedemos al objeto. La función recibe el índice de la tarea en el array tareas como argumento. 
  tareas[indice].completada = !tareas[indice].completada;  // Y cambiamos el valor booleano.  Se utiliza el operador lógico ! (NOT) 
                                                            // para invertir el valor actual de la propiedad completada
 
  actualizarTareas();
}

// --- Función para eliminar una tarea ---
function eliminarTarea(indice) {
  tareas.splice(indice, 1); // Método splice() elimina elementos del array en el indice dado
  actualizarTareas();
}

// --- Función para mostrar estadísticas ---
function actualizarEstadisticas() {
  const total = tareas.length; // Atributo length nos da el tamaño del array
  
  const completadas = tareas.filter(tarea => tarea.completada).length; 
  // Método filter() devuelve un nuevo array con elementos que cumplen una condición, que en este caso es que tareas tienen completada en true

  const importantes = tareas.filter(tarea => tarea.importante).length;
// En este caso es que tareas tienen importante en true
  const estadisticasHTML = `
    <p><strong>Total de tareas:</strong> ${total}</p>
    <p><strong>Completadas:</strong> ${completadas}</p>
    <p><strong>Importantes:</strong> ${importantes}</p>
    <p><strong>Pendientes:</strong> ${total - completadas}</p>
  `;
  // Ahora le decimos que el HTML de estadisticas Tareas será construida así
  document.getElementById("estadisticasTareas").innerHTML = estadisticasHTML;
}

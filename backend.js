console.log("Welcome to notes app. This is app.js");

document.addEventListener("DOMContentLoaded",function(){
  let addBtn = document.getElementById("addBtn"); //let en JavaScript se utiliza para declarar una variable local en el ámbito de bloque. 
  //búsqueda en el documento HTML actual en busca de un elemento con el ID "addBtn". Cuando se encuentra un elemento con ese ID,
  // este código asigna una referencia a ese elemento al variable addBtn.

  addBtn.addEventListener("click" , addText);   // Aquí pasamos una referencia a la función addText sin invocarla.


  document.getElementById('playButton').addEventListener('click', function() {
    var audio = document.getElementById('audio');
    audio.play();
    this.style.display = 'none'; // Ocultar el botón después de reproducir
  });

  // Reproducir audio automáticamente cuando la página se haya cargado completamente
  window.addEventListener('load', function() {
    var audio = document.getElementById('audio');
    audio.play();
  });
});


// Aquí definimos la función addText correctamente.
function addText() {
  // Código para manejar el evento aquí
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes")
  if(notes == null){
    notesObj = [];
    console.log(horaFormateada() + " Se va añadir al objeto notes además de crearlo debido a que esta vacio del localStorage el texto " + addTxt.value)
  } 
  else{
    notesObj = JSON.parse(notes) //Utiliza el método JSON.parse() que toma la cadena JSON como entrada y la convierte en un objeto JavaScript,.
    console.log(horaFormateada() + " Se va añadir al objeto notes del localStorage el texto " + addTxt.value)
  }
  notesObj.push(addTxt.value) //añadimos el valor de la variable addTxt que es el cuadro de texto
  localStorage.setItem("notes",JSON.stringify(notesObj)) //localStorage.setItem("notes",JSON.stringify(notesObj)) guarda el objeto notesObj 
  //en el almacenamiento local del navegador web bajo la clave "notes". La próxima vez que el usuario abra la aplicación,
  
  addTxt.value = "";//reiniciamos el valor del addtxt
  showNotes();
};

/**
 * Función para mostrar las notas almacenadas localmente en el navegador.
 */
function showNotes() {
  // Obtener las notas del almacenamiento local
  let notes = localStorage.getItem("notes");

  // Verificar si hay notas almacenadas
  if (notes == null) {
    // Si no hay notas, inicializar un arreglo vacío
    notesObj = [];
  } else {
    // Si hay notas, convertir el JSON almacenado en un objeto JavaScript
    notesObj = JSON.parse(notes);
  }

  // Variable para almacenar el HTML de las notas
  let html = "";

  // Iterar sobre cada nota en el objeto de notas
  notesObj.forEach(function(element, index) {
    // Construir el HTML de una tarjeta de nota para cada nota
    html += `
      <div class="noteCard my-2 mx-2 card" style="width: 18rem">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text"> ${element}</p>
          <button class="btn btn-primary">Delete Note</button>
        </div>
      </div>`;
  });

  // Obtener el elemento HTML donde se mostrarán las notas
  let notesElm = document.getElementById("notes");

  // Verificar si hay notas para mostrar
  if (notesObj.length != 0) {
    // Si hay notas, agregar el HTML de las notas al elemento
    notesElm.innerHTML = html;
  } else {
    // Si no hay notas, mostrar un mensaje indicando que no hay notas
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
};



function horaFormateada(){
  let fechaActual = moment();
  let fechaFormateada = fechaActual.format('DD/MM/YYYY HH:mm:ss');
  return fechaFormateada;
};





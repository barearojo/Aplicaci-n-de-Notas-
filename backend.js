const moment = require('moment'); // Importar la biblioteca moment.js
console.log("Welcome to notes app. This is app.js");

document.addEventListener("DOMContentLoaded",function(){
  let addBtn = document.getElementById("addBtn"); //let en JavaScript se utiliza para declarar una variable local en el ámbito de bloque. 
  //búsqueda en el documento HTML actual en busca de un elemento con el ID "addBtn". Cuando se encuentra un elemento con ese ID,
  // este código asigna una referencia a ese elemento al variable addBtn.

  addBtn.addEventListener("click" , addText);   // Aquí pasamos una referencia a la función addText sin invocarla.
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
    console.log(horaFormateada + " Se va añadir al objeto notes del localStorage el texto " + addTxt.value)
  }
  notesObj.push(addTxt.value) //añadimos el valor de la variable addTxt que es el cuadro de texto
  localStorage.setItem("notes",JSON.stringify(notesObj)) //localStorage.setItem("notes",JSON.stringify(notesObj)) guarda el objeto notesObj 
  //en el almacenamiento local del navegador web bajo la clave "notes". La próxima vez que el usuario abra la aplicación,
  
  addTxt.value = "";//reiniciamos el valor del addtxt
  //showNotes();
};

function horaFormateada(){
  let fechaActual = moment();
  let fechaFormateada = fechaActual.format('DD/MM/YYYY HH:mm:ss');
  return fechaFormateada.stringify;
}





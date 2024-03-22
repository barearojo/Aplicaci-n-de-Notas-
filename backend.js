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
  let notes = document.getElementById("notes");
   
};





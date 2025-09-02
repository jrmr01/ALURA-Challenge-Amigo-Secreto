let amigos = [];

// Agrega amigo a la lista
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else {
    amigos.push(nombreAmigo);
    document.querySelector("#amigo").value = "";
    mostrarListaAmigo();
  }
}

// Permite agregar amigo presionando Enter en el teclado
document.addEventListener("DOMContentLoaded", function() {
  const inputAmigo = document.getElementById("amigo");
  inputAmigo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      agregarAmigo();
    }
  });
});


// Muestra la lista de amigos en el HTML
function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigos[index];

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}


// Sortea un amigo de la lista
function sortearAmigo() {
  let cantidadAmigos = amigos.length;
  if (cantidadAmigos === 0) {
    alert("Por favor, inserte un nombre antes de sortear");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigos[indiceAmigo];
    alert("¡El ganador del sorteo es: " + amigos[indiceAmigo] + "!");
  }
}

// Borrar la lista de amigos
function borrarListaAmigos() {
  amigos = [];
  mostrarListaAmigo();
  let resultadoHTML = document.querySelector("#resultado");
  resultadoHTML.innerHTML = "";
}
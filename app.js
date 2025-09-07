let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre válido");
    return;
  }

  amigos.push(nombre);
  input.value = ""; // limpia el campo después de añadir
  mostrarLista();
}

function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpia la lista antes de volver a mostrarla

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById("resultado");
  resultado.textContent = `El amigo secreto es: ${amigos[indice]}`;
}

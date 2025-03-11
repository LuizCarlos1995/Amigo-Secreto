let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        input.value = '';
    } else {
        alert('Nome inválido ou já adicionado.');
    }
}

function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Nenhum amigo adicionado. Por favor, adicione amigos para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `Amigo secreto sorteado: ${amigoSorteado}`;
}

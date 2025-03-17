const nomes = [];

function adicionarNome() {
    const inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    if (nomes.includes(nome)) {
        alert(`O nome "${nome}" já foi adicionado.`);
        return;
    }

    nomes.push(nome);
    console.log(`Nome "${nome}" adicionado com sucesso.`);
    console.log("Lista atualizada:", nomes);

    inputNome.value = "";
    atualizarListaNomes();
}

function sortearAmigo() {
    if (nomes.length < 2) {
        alert("Adicione pelo menos dois nomes antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nomes.length);
    const amigoSorteado = nomes[indiceAleatorio];
    console.log(`O amigo secreto é: ${amigoSorteado}`);

    document.getElementById("resultado").innerHTML = `<li>O amigo secreto é: ${amigoSorteado}</li>`;
}

function atualizarListaNomes() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < nomes.length; i++) {
        const itemLista = document.createElement("li");
        itemLista.textContent = nomes[i];
        listaAmigos.appendChild(itemLista);
    }
}

document.querySelector(".button-add").addEventListener("click", adicionarNome);
document.querySelector(".button-draw").addEventListener("click", sortearAmigo);

function adicionar(){
    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split(" - ")[0];
    let valorProduto = parseFloat((produto.split(" - ")[1]).replace("R$",""));

    let quantidade = parseInt(document.getElementById("quantidade").value);

    mostrarCarrinho(quantidade, nomeProduto, valorProduto);

    mudarValorTotal(quantidade, valorProduto);

    (document.getElementById("quantidade")).value = "";
}

function mostrarCarrinho(quantidade, nomeProduto, valorProduto){
    let listProdCarrinho = document.getElementById("lista-produtos");

    listProdCarrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;
}

function mudarValorTotal(quantidade, valorProduto){
    let tagTotal = document.getElementById("valor-total");
    let valTotal = parseFloat(((tagTotal.textContent).replace("R$ ","")));

    valTotal += parseFloat(quantidade * valorProduto);
    
    tagTotal.textContent = `R$ ${valTotal}`;
}

function limpar(){
    (document.getElementById("valor-total")).textContent = "R$ 0";
    (document.getElementById("quantidade")).value = "";
    (document.getElementById("lista-produtos")).innerHTML = "";
}
function adicionar(){
    let selectProduto = document.getElementById("produto");
    let produto = selectProduto.value;
    let quebrarProduto = produto.split(" - ");

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let nomeProduto = quebrarProduto[0];
    let valorProduto = parseFloat((quebrarProduto[1]).replace("R$",""));

    mostrarCarrinho(quantidade, nomeProduto, valorProduto);

    mudarValorTotal(quantidade, valorProduto);
}

function mostrarCarrinho(quantidade, nomeProduto, valorProduto){
    let listProdCarrinho = document.getElementById("lista-produtos");

    listProdCarrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
        </section>`;
}

function mudarValorTotal(quantidade, valorProduto){
    let total = document.getElementById("valor-total");
    let valTotal = parseFloat((total.textContent).replace("R$",""));

    valTotal += parseFloat(quantidade * valorProduto);

    total.textContent = `R$${valTotal}`;
}

function limpar(){
    (document.getElementById("valor-total")).textContent = "R$1400";
    (document.getElementById("lista-produtos")).innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul">1x</span> Celular <span class="texto-azul">R$1400</span>
        </section>`;
}
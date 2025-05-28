document.addEventListener("DOMContentLoaded", () => {
    const listaCarrinho = document.getElementById("lista-carrinho");
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // 🛠️ Garante que as quantidades mínimas sejam respeitadas ao carregar a página
    function garantirQuantidadesMinimas() {
        carrinho.forEach(produto => {
            const quantidadeMinima = quantidadesMinimas[produto.id] || 1;
            if (produto.quantidade < quantidadeMinima) {
                produto.quantidade = quantidadeMinima;
            }
        });
        

        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    garantirQuantidadesMinimas(); // 🔥 Chamada aqui para garantir as quantidades mínimas antes da renderização

    renderizarCarrinho();


    // 🔄 Função única para alterar quantidade (+ ou -)
    window.alterarQuantidade = function(index, valor) {
        const produto = carrinho[index];
        if (!produto) return;

        const novaQuantidade = produto.quantidade + valor;
        const quantidadeMinima = quantidadesMinimas[produto.id] || 1;

        if (novaQuantidade < quantidadeMinima) {
            alert(`🚫 A quantidade mínima para ${produto.name} é ${quantidadeMinima} unidades.`);
            return;
        }

        produto.quantidade = novaQuantidade;
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        renderizarCarrinho();
    };

    // 🚫 Função para remover um produto do carrinho
    window.removerProduto = function(index) {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        renderizarCarrinho();
    };

    // 🛒 Renderiza o carrinho na tela
    function renderizarCarrinho() {
        listaCarrinho.innerHTML = "";
        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
            return;
        }

        let total = 0;

        carrinho.forEach((produto, index) => {
            const div = document.createElement("div");
            div.classList.add("card", "mb-3");
            div.innerHTML = `
                <div class="row align-items-center">
                    <div class="col-12 col-md-7">
                        <h5 class="card-title">${produto.name}</h5>
                        <p class="card-text">Preço unitário: R$${produto.price.toFixed(2)}</p>
                        <p>Quantidade mínima: ${quantidadesMinimas[produto.id] || 1}</p>
                        <p class="card-text">Quantidade: <span id="quantidade-${index}">${produto.quantidade}</span></p>
                    </div>
                    <div class="col-12 col-md-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
                        <button class="btn btn-sm btn-danger" onclick="removerProduto(${index})">Remover</button>
                        <button class="btn btn-sm btn-primary" onclick="alterarQuantidade(${index}, -1)">-</button>
                        <button class="btn btn-sm btn-primary" onclick="alterarQuantidade(${index}, 1)">+</button>
                    </div>
                </div>
            `;
            listaCarrinho.appendChild(div);
            total += produto.price * produto.quantidade;
        });

        // Mostra total e forma de pagamento
        const totalElement = document.createElement("div");
        totalElement.className = "row mt-3 fw-bold";
        totalElement.innerHTML = `
            <div class="col-md-8">Total:</div>
            <div class="col-md-4 text-end">R$ ${total.toFixed(2)}</div>
        `;
        listaCarrinho.appendChild(totalElement);

        // Forma de pagamento
        const formaPagamentoDiv = document.createElement("div");
        formaPagamentoDiv.className = "mt-3";
        formaPagamentoDiv.innerHTML = `
            <label for="forma-pagamento" class="form-label">Forma de Pagamento:</label>
            <select id="forma-pagamento" class="form-select">
                <option value="pix">Pix</option>
                <option value="debito">Cartão de Débito</option>
                <option value="credito">Cartão de Crédito</option>
                <option value="dinheiro">À vista (Dinheiro Físico)</option>
            </select>
        `;
        listaCarrinho.appendChild(formaPagamentoDiv);

        // Botão WhatsApp
        const whatsappButton = document.createElement("button");
        whatsappButton.className = "btn btn-success mt-3 w-100";
        whatsappButton.textContent = "Enviar para WhatsApp";
        whatsappButton.onclick = () => enviarParaWhatsApp(total);
        listaCarrinho.appendChild(whatsappButton);
    }

    // 📲 Envia mensagem para WhatsApp
    function enviarParaWhatsApp(total) {
        const formaPagamento = document.getElementById("forma-pagamento").value;
        let mensagem = "🛒 *Lista de Produtos - MIMI BEBIDAS* 🛒\n\n";

        carrinho.forEach((produto) => {
            const subtotal = produto.price * produto.quantidade;
            mensagem += `*Produto:* ${produto.name}\n`;
            mensagem += `*Preço Unitário:* R$${produto.price.toFixed(2)}\n`;
            mensagem += `*Quantidade:* ${produto.quantidade}\n`;
            mensagem += `*Subtotal:* R$${subtotal.toFixed(2)}\n\n`;
        });

        mensagem += `*Total:* R$${total.toFixed(2)}\n`;
        mensagem += `*Forma de Pagamento:* ${formatarFormaPagamento(formaPagamento)}\n`;

        if (formaPagamento === "pix") {
            mensagem += `\n*Chave Pix:* Irei ENVIAR a chave pix assim que separar seus produtos para envio.`;
        }

        const url = `https://wa.me/5588993502977?text= ${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");

        deletarProdutos();
    }

    // 💳 Formata a forma de pagamento
    function formatarFormaPagamento(forma) {
        switch (forma) {
            case "pix": return "Pix";
            case "debito": return "Cartão de Débito";
            case "credito": return "Cartão de Crédito";
            case "dinheiro": return "À vista (Dinheiro Físico)";
            default: return "Não especificado";
        }
    }

    // 🧹 Limpa o carrinho após envio
    function deletarProdutos() {
        carrinho = [];
        localStorage.removeItem("carrinho");
        renderizarCarrinho();
        alert("Os produtos foram removidos do carrinho após o envio!");
    }

    // 🔍 Evento global para os botões ".btn-adicionar"
    document.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-adicionar")) {
            const produtoId = parseInt(event.target.getAttribute("data-id"));
            adicionarAoCarrinho(produtoId);
        }
    });

    // 🔄 Inicializa o carrinho
    renderizarCarrinho();
});
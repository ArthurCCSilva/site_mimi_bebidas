document.addEventListener("DOMContentLoaded", () => {
    // 📌 Elementos do DOM
    const listaCarrinho = document.getElementById("lista-carrinho");
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // 📌 Quantidades mínimas por produto
    const quantidadesMinimas = {
        11: 2,  14: 6,  15: 6,  32: 6,  34: 6,  36: 6,
        38: 6,  39: 2,  49: 6,  60: 6,  68: 3,  86: 2,
        92: 2,  93: 2,  94: 2,  113: 3, 115: 3,123:6, 125: 3
    };

    // 🔄 Função para calcular total do carrinho
    function calcularTotal() {
        return carrinho.reduce((acc, produto) => acc + (produto.price * produto.quantidade), 0);
    }

    // 🔄 Função para garantir quantidades mínimas (se total < 24)
    function garantirQuantidadesMinimas() {
        let total = calcularTotal();
        if (total < 24) {
            carrinho.forEach(produto => {
                const quantidadeMinima = quantidadesMinimas[produto.id] || 1;
                if (produto.quantidade < quantidadeMinima) {
                    produto.quantidade = quantidadeMinima;
                }
            });
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
        }
    }

    // 🔄 Verifica e reinicia carrinho caso total fique abaixo de R$24
    function verificarTotalEReiniciarCarrinho() {
        let total = calcularTotal();
        if (total < 24) {
            carrinho.forEach(produto => {
                produto.quantidade = quantidadesMinimas[produto.id] || 1;
            });
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            renderizarCarrinho();
        }
    }

    // 🔄 Função única para alterar quantidade (+ ou -)
    window.alterarQuantidade = function(index, valor) {
        const produto = carrinho[index];
        if (!produto) return;

        let total = calcularTotal();
        const novaQuantidade = produto.quantidade + valor;

        if (total < 24) {
            const quantidadeMinima = quantidadesMinimas[produto.id] || 1;
            if (novaQuantidade < quantidadeMinima) {
                alert(`🚫 A quantidade mínima para ${produto.name} é ${quantidadeMinima} unidades. A quantidade mínima foi ajustada automaticamente.`);
                produto.quantidade = quantidadeMinima;
            } else {
                produto.quantidade = novaQuantidade;
            }
        } else {
            if (novaQuantidade < 1) {
                alert(`🚫 Você deve selecionar pelo menos 1 unidade de ${produto.name}.`);
                return;
            }
            produto.quantidade = novaQuantidade;
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        renderizarCarrinho();
    };

    // 🚫 Função para remover um produto do carrinho
    window.removerProduto = function(index) {
        carrinho.splice(index, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        verificarTotalEReiniciarCarrinho(); // ✅ Verifica se total caiu abaixo de R$24
        renderizarCarrinho();
    };

    // 🛒 Renderiza o carrinho na tela
    function renderizarCarrinho() {
        listaCarrinho.innerHTML = "";
        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
            return;
        }

        let total = calcularTotal();

        carrinho.forEach((produto, index) => {
            const div = document.createElement("div");
            div.classList.add("card", "mb-3");

            // Exibe quantidade mínima apenas se total for menor que 24
            let quantidadeMinimaTexto = total < 24 ? `<p>Quantidade mínima: ${quantidadesMinimas[produto.id] || 1}</p>` : "";

            div.innerHTML = `
                <div class="row align-items-center">
                    <div class="col-12 col-md-7">
                        <h5 class="card-title">${produto.name}</h5>
                        <p class="card-text">Preço unitário: R$${produto.price.toFixed(2)}</p>
                        ${quantidadeMinimaTexto}
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
        });

        exibirTotalCarrinho(total);
        exibirFormaPagamento();
        exibirBotaoWhatsApp(total);
    }

    // 📌 Exibe total do carrinho
    function exibirTotalCarrinho(total) {
        const totalElement = document.createElement("div");
        totalElement.className = "row mt-3 fw-bold";
        totalElement.innerHTML = `<div class="col-md-8">Total:</div><div class="col-md-4 text-end">R$ ${total.toFixed(2)}</div>`;
        listaCarrinho.appendChild(totalElement);
    }

    // 📌 Exibe forma de pagamento
    function exibirFormaPagamento() {
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
    }

    // 📲 Envia mensagem para WhatsApp
    function exibirBotaoWhatsApp(total) {
        const whatsappButton = document.createElement("button");
        whatsappButton.className = "btn btn-success mt-3 w-100";
        whatsappButton.textContent = "Enviar para WhatsApp";
        whatsappButton.onclick = () => enviarParaWhatsApp(total);
        listaCarrinho.appendChild(whatsappButton);
    }

    // 📲 Função para enviar o pedido via WhatsApp
    function enviarParaWhatsApp(total) {
        const formaPagamento = document.getElementById("forma-pagamento").value;
        let mensagem = "🛒 *Lista de Produtos - MIMI BEBIDAS* 🛒\n\n";

        carrinho.forEach(produto => {
            const subtotal = produto.price * produto.quantidade;
            mensagem += `*Produto:* ${produto.name}\n*Preço:* R$${produto.price.toFixed(2)}\n*Quantidade:* ${produto.quantidade}\n*Subtotal:* R$${subtotal.toFixed(2)}\n\n`;
        });

        mensagem += `*Total:* R$${total.toFixed(2)}\n*Forma de Pagamento:* ${formaPagamento}`;
        const url = `https://wa.me/5588993502977?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    }

    // 📌 Inicializa o carrinho
    garantirQuantidadesMinimas();
    renderizarCarrinho();
});
document.addEventListener("DOMContentLoaded", () => {
    // 📌 Elementos do DOM
    const listaCarrinho = document.getElementById("lista-carrinho");
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];



    // 🔄 Função para calcular total do carrinho
    function calcularTotal() {
        return carrinho.reduce((acc, produto) => acc + (produto.price * produto.quantidade), 0);
    }

    // 🔄 Função para garantir quantidades mínimas (se total < 24)
    function garantirQuantidadesMinimas() {
        let total = calcularTotal();

        // ✅ Verifica se existe pelo menos um produto com quantidade mínima igual a 1
        const temProdutoComMinimoUm = carrinho.some(produto => (quantidadesMinimas[produto.id] || 1) === 1);

        if (total < 24 && !temProdutoComMinimoUm) {
            carrinho.forEach(produto => {
                const quantidadeMinima = quantidadesMinimas[produto.id] || 1;

                // ✅ Somente ajusta produtos se **NÃO houver** um produto com mínimo igual a 1
                if (quantidadeMinima > 1 && produto.quantidade < quantidadeMinima) {
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
    window.alterarQuantidade = function (index, valor) {
        const produto = carrinho[index];
        if (!produto) return;

        let total = calcularTotal();
        const quantidadeMinima = quantidadesMinimas[produto.id] || 1;
        const novaQuantidade = produto.quantidade + valor;

        // 🔎 Verifica quantos produtos existem no carrinho
        let quantidadeProdutos = carrinho.length;

        // ✅ Mantém quantidade mínima se total for menor que R$24 OU se houver apenas um produto
        if (total < 24 || quantidadeProdutos === 1) {
            if (novaQuantidade < quantidadeMinima) {
                alert(`🚫 A quantidade mínima para ${produto.name} é ${quantidadeMinima} unidades. A quantidade mínima foi ajustada automaticamente.`);
                produto.quantidade = quantidadeMinima;
            } else {
                produto.quantidade = novaQuantidade;
            }
        } else {
            // ✅ Se total > R$24 e há mais de um produto, permite ajuste livre, mas mínimo de 1
            if (novaQuantidade < 1) {
                alert(`🚫 Você deve selecionar pelo menos 1 unidade de ${produto.name}.`);
                return;
            }
            produto.quantidade = novaQuantidade;
        }

        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        renderizarCarrinho();
        // ✅ Recarrega a página se o total for menor que R$24
        if (calcularTotal() < 24) {
            location.reload();
        }

    };

    // 🚫 Função para remover um produto do carrinho
    window.removerProduto = function (index) {
        carrinho.splice(index, 1); // ✅ Remove o produto do carrinho
        localStorage.setItem("carrinho", JSON.stringify(carrinho));

        let total = calcularTotal();
        let quantidadeProdutos = carrinho.length;

        // ✅ Se após a remoção houver apenas 1 produto, aplica a quantidade mínima
        if (quantidadeProdutos === 1) {
            carrinho.forEach(produto => {
                const quantidadeMinima = quantidadesMinimas[produto.id] || 1;
                if (produto.quantidade < quantidadeMinima) {
                    produto.quantidade = quantidadeMinima;
                }
            });
            alert("⚠️ Como há apenas um produto no carrinho, a quantidade mínima foi reaplicada.");
        }

        verificarTotalEReiniciarCarrinho(); // ✅ Verifica se o total caiu abaixo de R$24 e ajusta se necessário
        renderizarCarrinho(); // 🔄 Atualiza a interface do carrinho

        // ✅ Recarrega a página se o total for menor que R$24
        if (calcularTotal() < 24) {
            location.reload();
        }

    };

    // 🛒 Renderiza o carrinho na tela
    function renderizarCarrinho() {
        listaCarrinho.innerHTML = "";
        if (carrinho.length === 0) {
            listaCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
            return;
        }

        let total = calcularTotal();

        // ✅ Verifica se existe pelo menos um produto com quantidade mínima igual a 1 no carrinho
        const temProdutoComMinimoUm = carrinho.some(produto => (quantidadesMinimas[produto.id] || 1) === 1);

        carrinho.forEach((produto, index) => {
            const div = document.createElement("div");
            div.classList.add("card", "mb-3");

            let quantidadeMinima = quantidadesMinimas[produto.id] || 1;

            // ✅ Define se a quantidade mínima deve ser exibida
            let mostrarQuantidadeMinima =
                (total < 24) || // Mostra se total for menor que R$24
                (!temProdutoComMinimoUm && produto.quantidade < quantidadeMinima); // Só exibe se não houver um produto com mínimo igual a 1

            let quantidadeMinimaTexto = (mostrarQuantidadeMinima && !temProdutoComMinimoUm) ? `<p>Quantidade mínima: ${quantidadeMinima}</p>` : "";

            div.innerHTML = `
            <div class="row align-items-center">
                <div class="col-12 col-md-7">
                    <h5 class="card-title">${produto.name}</h5>
                    <p class="card-text">Preço unitário: R$${produto.price.toFixed(2)}</p>
                    ${quantidadeMinimaTexto}
                    <p class="card-text">Quantidade: <span id="quantidade-${index}">${produto.quantidade}</span></p>
                </div>
                <div class="col-md-5 d-flex gap-2 justify-content-center my-3">
                    <button class="btn btn-sm btn-danger me-2" onclick="removerProduto(${index})">Remover</button>
                    <button class="btn btn-sm btn-primary me-2" onclick="alterarQuantidade(${index}, -1)">-</button>
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

        mensagem += `*Total:* R$${total.toFixed(2)}\n*Forma de Pagamento:* ${formaPagamento}\n`;

        // ✅ Adiciona a chave Pix se a forma de pagamento for Pix
        if (formaPagamento === "pix") {
            const chavePix = "**Irei enviar a chave pix após a confirmação do seu pedido.**"; // Substitua pelo número correto
            mensagem += `*🔗 Chave Pix:* ${chavePix}\n`;
        }

        const url = `https://wa.me/5588993502977?text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");

        // ✅ Limpa o carrinho após envio do pedido
        carrinho = []; // Esvazia o array do carrinho
        localStorage.removeItem("carrinho"); // Remove do armazenamento local
        renderizarCarrinho(); // Atualiza a interface do carrinho

    }

    // 🔔 Função para exibir notificação quando quantidade mínima é ajustada automaticamente
    function exibirNotificacaoAtualizacaoQuantidade() {
        alert("🔔 A quantidade mínima dos produtos foi ajustada automaticamente. Valor total somado ficou abaixo de R$24,00");
    }

    // 📌 Inicializa o carrinho
    garantirQuantidadesMinimas();
    renderizarCarrinho();
});
const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const LIMITE_PARCELAMENTO = 250;
const NUMERO_PARCELAS = 5;

function formatarReais(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function avaliarParcelamento(valorProduto1, valorProduto2) {
  const total = valorProduto1 + valorProduto2;

  if (total <= LIMITE_PARCELAMENTO) {
    const valorParcela = total / NUMERO_PARCELAS;
    return `Compra aprovada para parcelamento! ${NUMERO_PARCELAS}x de ${formatarReais(valorParcela)}.`;
  }

  return `Valor total (${formatarReais(total)}) excede o limite de ${formatarReais(LIMITE_PARCELAMENTO)} para parcelamento em ${NUMERO_PARCELAS}x.`;
}

function lerValor(pergunta, callback) {
  terminal.question(pergunta, (resposta) => {
    const texto = resposta.trim().replace(",", ".");
    const valor = Number(texto);

    if (isNaN(valor) || texto === "" || valor < 0) {
      console.log("Entrada inválida: digite um valor numérico positivo.\n");
      lerValor(pergunta, callback);
      return;
    }

    callback(valor);
  });
}

function iniciarDesafio() {
  lerValor("Valor do produto 1: R$ ", (produto1) => {
    lerValor("Valor do produto 2: R$ ", (produto2) => {
      console.log(avaliarParcelamento(produto1, produto2));
      terminal.close();
    });
  });
}

terminal.on("SIGINT", () => {
  console.log("\nPrograma interrompido. Até a próxima!");
  process.exit(0);
});

iniciarDesafio();
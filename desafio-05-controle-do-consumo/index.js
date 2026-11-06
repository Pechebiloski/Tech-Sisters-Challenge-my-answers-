const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calcularMedia(totalConsumo, dias) {
  return totalConsumo / dias;
}

function lerNumero(mensagem, validador, mensagemErro, callback) {
  terminal.question(mensagem, (resposta) => {
    const texto = resposta.trim().replace(",", ".");
    const valor = Number(texto);

    if (isNaN(valor) || texto === "" || !validador(valor)) {
      console.log(mensagemErro);
      lerNumero(mensagem, validador, mensagemErro, callback);
      return;
    }

    callback(valor);
  });
}

function lerConsumos(diasRestantes, somaAtual, callback) {
  if (diasRestantes === 0) {
    callback(somaAtual);
    return;
  }

  lerNumero(
    `Consumo do dia ${diasRestantes} (kWh): `,
    (v) => v >= 0,
    "Entrada inválida! Informe dias maiores que 0 e consumos não negativos.",
    (consumo) => {
      lerConsumos(diasRestantes - 1, somaAtual + consumo, callback);
    }
  );
}

function iniciarDesafio() {
  lerNumero(
    "Quantidade de dias: ",
    (v) => v > 0,
    "Entrada inválida! Informe dias maiores que 0 e consumos não negativos.",
    (dias) => {
      lerNumero(
        "Limite diário (kWh): ",
        (v) => v >= 0,
        "Entrada inválida! O limite não pode ser negativo.",
        (limite) => {
          lerConsumos(dias, 0, (totalConsumo) => {
            const mediaDiaria = calcularMedia(totalConsumo, dias);
            
            const formatar = (n) => Number(n.toFixed(2));
            const mediaFormatada = formatar(mediaDiaria);

            console.log(`Consumo Total: ${formatar(totalConsumo)} kWh | Média Diária: ${mediaFormatada} kWh`);

            if (mediaFormatada > limite) {
              console.log(`Atenção: O consumo médio diário (${mediaFormatada} kWh) ficou ACIMA do limite estipulado (${limite} kWh).`);
            } else {
              console.log(`Parabéns: consumo médio DENTRO do limite.`);
            }

            terminal.close();
          });
        }
      );
    }
  );
}

terminal.on("SIGINT", () => {
  console.log("\nPrograma interrompido.");
  process.exit(0);
});

iniciarDesafio();
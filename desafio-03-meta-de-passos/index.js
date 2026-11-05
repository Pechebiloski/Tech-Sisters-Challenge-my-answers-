const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const contaMeta = 8000;

function avaliarMeta(passosRealizados) {
  if (passosRealizados > contaMeta) {
    const passosExcedentes = passosRealizados - contaMeta;
    return `Parabéns! Você ultrapassou a meta por ${passosExcedentes} passos.`;
  }

  if (passosRealizados === contaMeta) {
    return `Parabéns! Você bateu a meta exata de ${contaMeta} passos.`;
  }

  const passosFaltantes = contaMeta - passosRealizados;
  return `Você não bateu a meta. Faltaram ${passosFaltantes} passos.`;
}

function iniciarDesafio() {
  terminal.question("Quantidade de passos (ou 'sair' para encerrar): ", (resposta) => {
    const textoDigitado = resposta.trim();

    if (textoDigitado.toLowerCase() === "sair") {
      console.log("Encerrando o programa... Bom descanso!");
      terminal.close();
      return;
    }

    const passosValidados = Number(textoDigitado.replace(",", "."));

    if (isNaN(passosValidados) || textoDigitado === "" || passosValidados < 0) {
      console.log("Entrada inválida: digite uma quantidade de passos válida ou 'sair'.\n");
      iniciarDesafio();
      return;
    }

    console.log(avaliarMeta(passosValidados) + "\n");
    iniciarDesafio();
  });
}

terminal.on("SIGINT", () => {
  console.log("\nPrograma interrompido. Até a próxima!");
  process.exit(0);
});

iniciarDesafio();
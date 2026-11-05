const readline = require("readline");

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function classificarNumero(valor) {
  if (valor > 0) return "POSITIVO";
  if (valor < 0) return "NEGATIVO";
  return "NULO";
}

function iniciarDesafio() {
  terminal.question("Digite um número (ou 'sair' para encerrar): ", (respostaUsuario) => {
    
    const textoDigitado = respostaUsuario.trim();

    if (textoDigitado.toLowerCase() === "sair") {
      console.log("Encerrando o programa... Até mais! ｡ﾟ•┈୨♡୧┈• ｡ﾟ");
      terminal.close();
      process.exit(0); 
    }
    
    const numeroValidado = Number(textoDigitado.replace(",", "."));

    if (isNaN(numeroValidado) || textoDigitado === "") {
      console.log("(⇀‸↼‶) Entrada inválida: digite um número válido ou 'sair'.\n");
      iniciarDesafio();
      return;
    }

    const resultado = classificarNumero(numeroValidado);
    console.log(`O número ${numeroValidado} é ${resultado}.\n`);

    iniciarDesafio(); 
  });
}

terminal.on("SIGINT", () => {
  console.log("\n\nPrograma interrompido pelo usuário. Até a próxima! ｡ﾟ•┈୨♡୧┈• ｡ﾟ");
  process.exit(0);
});

iniciarDesafio(); 
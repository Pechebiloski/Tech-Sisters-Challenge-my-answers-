# 💻 Tech Sisters | Desafio #04

## Compra parcelada

> Desafio de lógica de programação proposto pela comunidade Tech Sisters.

### 📌 Sobre o desafio

Desenvolver um programa que receba os valores de dois produtos e verifique se a compra pode ser parcelada em 5 vezes.

A loja permite o parcelamento de compras com valor total menor ou igual a R$ 250,00.

O programa calcula o valor total da compra e, caso o parcelamento seja permitido, informa o valor de cada parcela. Caso contrário, exibe uma mensagem indicando que o limite foi excedido.

### 🛠️ Tecnologias utilizadas

- JavaScript
- Node.js
- Módulo `readline`

### ⚙️ Conceitos aplicados

- Variáveis e constantes
- Entrada e saída de dados
- Operações aritméticas
- Estruturas condicionais (`if/else`)
- Funções
- Callbacks
- Validação de entradas
- Formatação de valores monetários
- Reutilização de funções

### 🎯 Regras de negócio

- Receber o valor de dois produtos.
- Calcular o valor total da compra.
- Verificar se o total é menor ou igual a R$ 250,00.
- Se aprovado, dividir o valor total em 5 parcelas.
- Se exceder o limite, informar o valor total e o limite permitido.

### 🧪 Casos de teste

| Entrada | Resultado esperado |
|---|---|
| Produto 1: R$ 100,00 + Produto 2: R$ 100,00 | Compra aprovada para parcelamento! 5x de R$ 40,00. |
| Produto 1: R$ 180,00 + Produto 2: R$ 100,00 | Valor total (R$ 280,00) excede o limite de R$ 250,00 para parcelamento em 5x. |

### ▶️ Como executar

É necessário ter o Node.js instalado.

```bash
node index.js
```

O programa solicitará os valores dos dois produtos pelo terminal.

### 💗 Comunidade

Desafio desenvolvido como parte do **Desafio do Código — Tech Sisters**.

Cada desafio é uma oportunidade de aprender, praticar e evoluir na programação.
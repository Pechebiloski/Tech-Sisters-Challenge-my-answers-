# ⚡ Desafio #05 — Controle do Consumo de Energia

Projeto desenvolvido como parte do **Desafio do Código**, iniciativa do PinkLab / Tech Sisters, com o objetivo de praticar lógica de programação, validação de dados e estruturas de repetição.

## ꒱˖♡ Sobre o projeto

O programa permite acompanhar o consumo diário de energia elétrica de uma residência durante um período informado pelo usuário.

A aplicação solicita a quantidade de dias analisados, o consumo de cada dia em kWh e um limite diário de consumo. Ao final, calcula o consumo total, a média diária e verifica se o consumo médio ficou acima ou dentro do limite estabelecido.

## ⚙️ Funcionalidades

- Solicitação da quantidade de dias analisados.
- Validação para impedir quantidades de dias menores ou iguais a zero.
- Entrada individual do consumo diário em kWh.
- Validação para impedir consumos negativos.
- Definição de um limite diário de consumo pelo usuário.
- Cálculo do consumo total de energia.
- Cálculo da média diária utilizando uma função.
- Comparação da média diária com o limite informado.
- Exibição de resultados e mensagens de acordo com o consumo médio.
- Tratamento de entradas inválidas, permitindo que o usuário tente novamente.

## 💻 Tecnologias utilizadas

- JavaScript
- Node.js
- Módulo `readline`

## 📚 Conceitos praticados

- Funções
- Recursividade
- Estruturas condicionais (`if/else`)
- Validação de dados
- Manipulação de entradas via terminal
- Acumuladores
- Cálculos matemáticos
- Callback functions
- Tratamento de entradas numéricas

## ▶️ Como executar

É necessário ter o [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

2. Acesse a pasta do projeto:

```bash
cd NOME_DO_REPOSITORIO
```

3. Execute o programa:

```bash
node index.js
```

## 🧪 Exemplo de execução

**Entrada:**

```text
Quantidade de dias: 3
Limite diário (kWh): 11
Consumo do dia 3 (kWh): 10
Consumo do dia 2 (kWh): 12
Consumo do dia 1 (kWh): 14
```

**Saída:**

```text
Consumo Total: 36 kWh | Média Diária: 12 kWh
Atenção: O consumo médio diário (12 kWh) ficou ACIMA do limite estipulado (11 kWh).
```

## ♡ Objetivo de aprendizagem

Desenvolver a capacidade de estruturar soluções utilizando lógica de programação, funções e validações, aplicando esses conceitos em um problema prático relacionado ao consumo de energia elétrica.

---

**TECH SISTERS • DESAFIO DO CÓDIGO #05**  
Desenvolvido por Peche ♡

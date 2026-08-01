# Perguntas de Entrevista: Closures e Escopo

## Pergunta

O que é uma Closure em JavaScript e qual é a utilidade prática desse conceito no desenvolvimento do dia a dia?

---

## 🧠 Explicação Teórica

Uma closure (fechamento) ocorre quando uma função interna "lembra" e mantém acesso ao escopo léxico (variáveis) da função externa que a criou, mesmo após a função externa ter terminado sua execução. É uma consequência direta do escopo estático do JavaScript.

---

## 🗣️ Roteiro de Resposta para a Entrevista

- "Uma **Closure** é a combinação de uma função agrupada com referências ao seu estado circundante, ou seja, ao seu escopo léxico."
- "Em termos simples, uma função interna sempre terá acesso às variáveis da função pai que a envolve, mesmo depois que a função pai já terminou de rodar."
- "Na prática, usamos closures para encapsulamento de dados, permitindo simular variáveis e métodos privados que não podem ser modificados diretamente de fora da função, ou para criar fábricas de funções configuráveis."

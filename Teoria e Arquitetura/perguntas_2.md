# Perguntas de Entrevista: Comparações e Hoisting

## Pergunta

Qual é a diferença real entre `==` e `===` em JavaScript? Além disso, explique o que significa o conceito de "Hoisting".

---

## 🧠 Explicação Teórica

- **Comparações**: O operador `==` realiza coerção de tipos (type coercion), ou seja, tenta converter os operandos para o mesmo tipo antes de comparar. O operador `===` (estrito) compara o valor e o tipo, sem fazer conversões mágicas.
- **Hoisting**: É o comportamento do interpretador do JavaScript de mover as declarações de funções e variáveis (apenas com `var`) para o topo do seu escopo de execução antes que o código comece a rodar. Variáveis com `let` e `const` também sofrem hoisting, mas entram na "Temporal Dead Zone" e geram erro se acessadas antes da linha de declaração.

---

## 🗣️ Roteiro de Resposta para a Entrevista

- "A diferença é que o `==` compara apenas o valor após tentar converter os dois lados para o mesmo tipo, enquanto o `===` exige que o valor E o tipo sejam estritamente idênticos, sendo a prática padrão recomendada no mercado."
- "Por exemplo, `1 == '1'` retorna true, mas `1 === '1'` retorna false."
- "Já o **Hoisting** é o mecanismo onde o JavaScript eleva as declarações de funções e variáveis para o topo do escopo durante a fase de compilação."
- "Se declararmos uma variável com `var`, podemos chamá-la antes da linha de criação e ela retornará `undefined`. Se for com `let` ou `const`, o hoisting acontece, mas o código quebra com um erro de referência se tentarmos acessá-la antes da hora."

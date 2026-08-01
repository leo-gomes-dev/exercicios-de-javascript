// =============================================================================
// DESAFIOS DE JAVASCRIPT: TRANSFORMAÇÃO E ACHATAMENTO DE ARRAYS (BLOCO 2)
// =============================================================================

/**
 * DESAFIO 1: O Achatador Universal
 *
 * Implemente uma função que receba um array com múltiplos níveis de aninhamento
 * (profundidade desconhecida) e retorne um novo array totalmente plano (1 nível).
 *
 * Exemplo: [1, [2, [3, [4]]], 5] -> [1, 2, 3, 4, 5]
 *
 * Dica de Entrevista: Tente resolver usando o método nativo adequado e, se quiser
 * um desafio extra, tente resolver usando recursão e reduce.
 */
function achatarArray(array) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 2: Mapear e Achatar (O efeito flatMap)
 *
 * Você recebeu uma lista de frases. Escreva uma função que transforme essa lista
 * em um único array contendo todas as palavras isoladas, em letras minúsculas e
 * sem pontuação (remova pontos e vírgulas).
 *
 * Exemplo: ["Olá, Mundo!", "JavaScript é incrível."]
 *      -> ["olá", "mundo", "javascript", "é", "incrível"]
 */
function extrairPalavras(frases) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: O Poder do Reduce (Agrupamento de Dados)
 *
 * Receba um array de objetos representando produtos e agrupe-os por sua categoria.
 * O resultado deve ser um único objeto onde as chaves são as categorias e os valores
 * são arrays com os nomes dos produtos pertencentes a ela.
 *
 * Entrada: [
 *   { nome: 'Camiseta', categoria: 'Roupas' },
 *   { nome: 'Celular', categoria: 'Eletrônicos' },
 *   { nome: 'Calça', categoria: 'Roupas' }
 * ]
 *
 * Saída: {
 *   Roupas: ['Camiseta', 'Calça'],
 *   Eletrônicos: ['Celular']
 * }
 */

function agruparPorCategoria(produtos) {
  // Escreva seu código aqui
}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestes() {
  console.log("🚀 Iniciando testes dos seus exercícios...\n");
  let erros = 0;

  // Teste 1
  try {
    const t1 = achatarArray([1, [2, [3, [4]]], 5, [[6]]]);
    const esp1 = JSON.stringify([1, 2, 3, 4, 5, 6]);
    if (JSON.stringify(t1) !== esp1)
      throw new Error(`Esperado ${esp1}, mas recebeu ${JSON.stringify(t1)}`);
    console.log("✅ Desafio 1: Passou!");
  } catch (e) {
    console.error("❌ Desafio 1: Falhou ->", e.message);
    erros++;
  }

  // Teste 2
  try {
    const t2 = extrairPalavras([
      "Estude muito, JS!",
      "O mercado busca seniores.",
    ]);
    const esp2 = JSON.stringify([
      "estude",
      "muito",
      "js",
      "o",
      "mercado",
      "busca",
      "seniores",
    ]);
    if (JSON.stringify(t2) !== esp2)
      throw new Error(`Esperado ${esp2}, mas recebeu ${JSON.stringify(t2)}`);
    console.log("✅ Desafio 2: Passou!");
  } catch (e) {
    console.error("❌ Desafio 2: Falhou ->", e.message);
    erros++;
  }

  // Teste 3
  try {
    const itens = [
      { nome: "Notebook", categoria: "Tech" },
      { nome: "Teclado", categoria: "Tech" },
      { nome: "Cadeira", categoria: "Móveis" },
    ];
    const t3 = agruparPorCategoria(itens);
    const esp3 = JSON.stringify({
      Tech: ["Notebook", "Teclado"],
      Móveis: ["Cadeira"],
    });
    if (JSON.stringify(t3) !== esp3)
      throw new Error(`Esperado ${esp3}, mas recebeu ${JSON.stringify(t3)}`);
    console.log("✅ Desafio 3: Passou!");
  } catch (e) {
    console.error("❌ Desafio 3: Falhou ->", e.message);
    erros++;
  }

  console.log(`\n📊 Resultado final: ${3 - erros}/3 desafios concluídos.`);
}

executarTestes();

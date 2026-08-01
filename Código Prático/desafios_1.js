// =============================================================================
// DESAFIOS DE JAVASCRIPT: LOGICA ES S ENCIAL DE ARRAYS (BLOCO 1)
// =============================================================================

/* OK *
 * DESAFIO 1: Remover Duplicados
 *
 * Escreva uma função que receba um array com números repetidos e retorne
 * um novo array contendo apenas os números únicos.
 *
 * Exemplo: [1, 2, 2, 3, 4, 4, 5] -> [1, 2, 3, 4, 5]
 */
function removerDuplicados(array) {
  // Escreva seu código aqui
}

/* OK *
 * DESAFIO 2: Filtrar Pares e Ímpares
 *
 * Escreva uma função que receba um array de números e retorne um objeto
 * com duas propriedades: 'pares' (um array só com os números pares) e
 * 'impares' (um array só com os números ímpares).
 *
 * Exemplo: [1, 2, 3, 4, 6] -> { pares:, impares: [1, 3] }
 */
function separarParesEImpares(numeros) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: Totalizar Estoque (Reduce)
 *
 * Escreva uma função que receba um array de objetos (produtos) onde cada um tem
 * 'preco' e 'quantidade'. Use o método reduce para calcular o valor total de
 * todo o estoque somado.
 *
 * Exemplo: [{ preco: 10, quantidade: 2 }, { preco: 5, quantidade: 4 }] -> 40
 */
function calcularTotalEstoque(produtos) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 4: Ordenação Numérica
 *
 * Escreva uma função que ordene um array de números de forma decrescente
 * (do maior para o menor).
 *
 * Exemplo: [3, 1, 10, 5, 2] -> [10, 5, 3, 2, 1]
 */
function ordenarDecrescente(numeros) {}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestes() {
  console.log("🚀 Iniciando testes dos seus exercícios básicos...\n");
  let erros = 0;

  // Teste 1
  try {
    const t1 = removerDuplicados([1, 1, 2, 3, 3, 4, 5, 5]);
    const esp1 = JSON.stringify([1, 2, 3, 4, 5]);
    if (JSON.stringify(t1) !== esp1) {
      throw new Error(`Esperado ${esp1}, recebeu ${JSON.stringify(t1)}`);
    }
    console.log("✅ Desafio 1 (Remover Duplicados): Passou!");
  } catch (e) {
    console.error("❌ Desafio 1 (Remover Duplicados): Falhou ->", e.message);
    erros++;
  }

  // Teste 2
  try {
    const t2 = separarParesEImpares([10, 15, 22, 33, 40]);
    const esp2 = JSON.stringify({ pares: [10, 22, 40], impares: [15, 33] });
    if (JSON.stringify(t2) !== esp2) {
      throw new Error(`Esperado ${esp2}, recebeu ${JSON.stringify(t2)}`);
    }
    console.log("✅ Desafio 2 (Separar Pares/Ímpares): Passou!");
  } catch (e) {
    console.error("❌ Desafio 2 (Separar Pares/Ímpares): Falhou ->", e.message);
    erros++;
  }

  // Teste 3
  try {
    const itens = [
      { preco: 100, quantidade: 2 }, // 200
      { preco: 50, quantidade: 3 }, // 150
      { preco: 10, quantidade: 5 }, // 50
    ];
    const t3 = calcularTotalEstoque(itens);
    if (t3 !== 400) throw new Error(`Esperado 400, recebeu ${t3}`);
    console.log("✅ Desafio 3 (Totalizar Estoque): Passou!");
  } catch (e) {
    console.error("❌ Desafio 3 (Totalizar Estoque): Falhou ->", e.message);
    erros++;
  }

  // Teste 4
  try {
    const t4 = ordenarDecrescente([5, 8, 1, 100, 24]);
    const esp4 = JSON.stringify([100, 24, 8, 5, 1]);
    if (JSON.stringify(t4) !== esp4)
      throw new Error(`Esperado ${esp4}, recebeu ${JSON.stringify(t4)}`);
    console.log("✅ Desafio 4 (Ordenação Decrescente): Passou!");
  } catch (e) {
    console.error("❌ Desafio 4 (Ordenação Decrescente): Falhou ->", e.message);
    erros++;
  }

  console.log(`\n📊 Resultado final: ${4 - erros}/4 desafios concluídos.`);
}

executarTestes();

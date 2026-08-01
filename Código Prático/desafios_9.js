// =============================================================================
// DESAFIOS DE JAVASCRIPT: CASOS COMPLEXOS DE ENTREVISTAS (BLOCO 9)
// =============================================================================

/**
 * DESAFIO 1: Achar Elementos Únicos Exclusivos (Interseção Inversa / Filter)
 *
 * Em entrevistas perguntam o oposto da interseção: ache elementos que aparecem
 * APENAS no primeiro array, mas que NÃO estejam de jeito nenhum no segundo array.
 *
 * Entrada: [1, 2, 3, 4] e [3, 4, 5, 6]
 * Saída: [1, 2]
 */
function encontrarDiferencaExclusiva(array1, array2) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 2: Desatarraxar e Mapear Sub-listas (Map e Reduce ou FlatMap)
 *
 * Você possui pedidos de clientes, onde cada pedido tem uma sub-lista de "itens".
 * Crie um código que extraia TODOS os nomes de produtos comprados em um único array plano.
 *
 * Entrada: [ { id: 1, itens: ['Teclado', 'Mouse'] }, { id: 2, itens: ['Monitor'] } ]
 * Saída: ['Teclado', 'Mouse', 'Monitor']
 */
function mesclarSublistasItens(pedidos) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: Paginar e Proteger de Páginas Fora do Limite (Slice Seguro)
 *
 * Modifique a lógica tradicional de paginação. Se o usuário passar um número de página
 * maior do que o total real existente de páginas possíveis, sua função deve retornar
 * automaticamente uma lista contendo os itens da ÚLTIMA página possível em vez de retornar um array vazio.
 *
 * Exemplo: 5 itens, limite 2 (Máximo 3 páginas). Se pedir página 99, retorna os itens da página 3.
 */
function paginacaoSegura(itens, pagina, limite) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 4: Agrupamento com Contador e Média Baseado em Reduce
 *
 * Desafio nível Sênior: Escreva uma função que leia uma lista de avaliações de filmes
 * e retorne um único objeto contendo a média aritmética de nota de cada filme.
 *
 * Entrada: [ { filme: 'Matrix', nota: 10 }, { filme: 'Matrix', nota: 8 }, { filme: 'Avatar', nota: 9 } ]
 * Saída: { Matrix: 9, Avatar: 9 }
 */
function calcularMediaNotasFilmes(avaliacoes) {
  // Escreva seu código aqui
}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestesBloco7() {
  console.log("🚀 Iniciando testes do Bloco 7...\n");
  let erros = 0;

  // Teste 1
  try {
    const r1 = encontrarDiferencaExclusiva([1, 2, 3, 4, 1], [3, 4, 5]);
    if (JSON.stringify(r1) !== JSON.stringify([1, 2])) throw new Error();
    console.log("✅ Desafio 1 (Diferença Exclusiva): Passou!");
  } catch (e) {
    console.error("❌ Desafio 1 (Diferença Exclusiva): Falhou");
    erros++;
  }

  // Teste 2
  try {
    const r2 = mesclarSublistasItens([{ itens: ["A"] }, { itens: ["B", "C"] }]);
    if (r2.length !== 3 || r2[1] !== "B") throw new Error();
    console.log("✅ Desafio 2 (Mesclar Itens Flat): Passou!");
  } catch (e) {
    console.error("❌ Desafio 2 (Mesclar Itens Flat): Falhou");
    erros++;
  }

  // Teste 3
  try {
    const r3 = paginacaoSegura(["A", "B", "C", "D", "E"], 99, 2); // Deve ir para última pagina (pág 3) que contém ['E']
    if (JSON.stringify(r3) !== JSON.stringify(["E"])) throw new Error();
    console.log("✅ Desafio 3 (Paginação Segura): Passou!");
  } catch (e) {
    console.error("❌ Desafio 3 (Paginação Segura): Falhou");
    erros++;
  }

  // Teste 4
  try {
    const r4 = calcularMediaNotasFilmes([
      { filme: "Inception", nota: 10 },
      { filme: "Inception", nota: 6 },
    ]);
    if (r4.Inception !== 8) throw new Error();
    console.log("✅ Desafio 4 (Média com Reduce): Passou!");
  } catch (e) {
    console.error("❌ Desafio 4 (Média com Reduce): Falhou");
    erros++;
  }

  console.log(
    `\n📊 Resultado final do Bloco 7: ${4 - erros}/4 desafios concluídos.`,
  );
}

executarTestesBloco7();

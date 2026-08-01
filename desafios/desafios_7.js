// =============================================================================
// DESAFIOS DE JAVASCRIPT: E-COMMERCE E AGREGADORES (BLOCO 7)
// =============================================================================

/**
 * DESAFIO 1: Interseção de Carrinhos (Produtos Desejados Comuns)
 *
 * Em ferramentas de marketing, queremos achar clientes com interesses idênticos.
 * Escreva uma função que descubra quais IDs de produtos estão tanto na lista de desejos
 * do Cliente A quanto na do Cliente B. Filtre duplicados do resultado final.
 */
function itensComunsDesejados(carrinhoA, carrinhoB) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 2: Agrupamento por Categoria com Reduce
 *
 * Transforme um array de produtos em um catálogo agrupado por categoria.
 * As chaves devem ser as categorias e os valores devem ser arrays de nomes de produtos correspondentes.
 *
 * Entrada: [ { nome: 'Mouse', cat: 'Tech' }, { nome: 'Sofá', cat: 'Casa' }, { nome: 'Teclado', cat: 'Tech' } ]
 * Saída: { Tech: ['Mouse', 'Teclado'], Casa: ['Sofá'] }
 */
function agruparProdutosPorCategoria(produtos) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: Filtro Avançado com Cálculo de Descontos (Map e Filter)
 *
 * Filtre produtos cujo preço original seja acima de R$100. Depois, aplique uma
 * taxa de liquidação onde todos ganham 10% de desconto. Retorne um array apenas com
 * objetos no formato `{ nome, precoComDesconto }`.
 */
function aplicarDescontoFiltro(produtos) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 4: Paginação Infinita com Posição de Cursor (Slice)
 *
 * Em "infinite scroll", enviamos o último ID visualizado. Mas para tabelas tradicionais fixas,
 * o backend aceita a estratégia clássica de deslocamento ("Offset"). Crie uma função que fatie o array
 * pulando uma quantidade X de itens ignorados ("offset") e pegando apenas a quantidade máxima permitida ("limite").
 *
 * Exemplo: itens = [A,B,C,D,E], offset = 1, limite = 3 -> Retorna [B, C, D]
 */
function paginarPorOffset(itens, offset, limite) {
  // Escreva seu código aqui
}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestesBloco5() {
  console.log("🚀 Iniciando testes do Bloco 5...\n");
  let erros = 0;

  // Teste 1
  try {
    const r1 = itensComunsDesejados(
      ["p1", "p2", "p3", "p1"],
      ["p3", "p4", "p1"],
    );
    if (JSON.stringify(r1.sort()) !== JSON.stringify(["p1", "p3"]))
      throw new Error();
    console.log("✅ Desafio 1 (Produtos Comuns): Passou!");
  } catch (e) {
    console.error("❌ Desafio 1 (Produtos Comuns): Falhou");
    erros++;
  }

  // Teste 2
  try {
    const lista = [
      { nome: "TV", cat: "Eletro" },
      { nome: "Fone", cat: "Tech" },
      { nome: "Geladeira", cat: "Eletro" },
    ];
    const r2 = agruparProdutosPorCategoria(lista);
    if (r2.Eletro.length !== 2 || r2.Tech[0] !== "Fone") throw new Error();
    console.log("✅ Desafio 2 (Agrupamento por Categoria): Passou!");
  } catch (e) {
    console.error("❌ Desafio 2 (Agrupamento por Categoria): Falhou");
    erros++;
  }

  // Teste 3
  try {
    const lista = [
      { nome: "Caneta", preco: 5 },
      { nome: "Monitor", preco: 1000 },
      { nome: "Cadeira", preco: 200 },
    ];
    const r3 = aplicarDescontoFiltro(lista);
    if (r3.length !== 2 || r3[0].precoComDesconto !== 900) throw new Error();
    console.log("✅ Desafio 3 (Filtro e Desconto Map): Passou!");
  } catch (e) {
    console.error("❌ Desafio 3 (Filtro e Desconto Map): Falhou");
    erros++;
  }

  // Teste 4
  try {
    const r4 = paginarPorOffset(
      ["Item1", "Item2", "Item3", "Item4", "Item5"],
      2,
      2,
    );
    if (JSON.stringify(r4) !== JSON.stringify(["Item3", "Item4"]))
      throw new Error();
    console.log("✅ Desafio 4 (Paginação por Offset): Passou!");
  } catch (e) {
    console.error("❌ Desafio 4 (Paginação por Offset): Falhou");
    erros++;
  }

  console.log(
    `\n📊 Resultado final do Bloco 5: ${4 - erros}/4 desafios concluídos.`,
  );
}

executarTestesBloco5();

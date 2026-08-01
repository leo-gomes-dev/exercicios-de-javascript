// =============================================================================
// DESAFIOS DE JAVASCRIPT: ANÁLISE DE DASHBOARD E USUÁRIOS (BLOCO 8)
// =============================================================================

/**
 * DESAFIO 1: Validação e Higienização de CPFs Brutos (Map e Filter)
 *
 * Formulários capturam strings poluídas. Escreva uma função que remova traços e pontos de
 * um array de CPFs. Remova do array retornado qualquer registro que não possua exatamente 11 dígitos numéricos.
 *
 * Entrada: ["123.456.789-00", "4567891230", "000.111.222-33"]
 * Saída: ["12345678900", "00011122233"]
 */
function higienizarCpfLista(cpfs) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 2: Interseção de Amigos Sugeridos (Filtro de Redes Sociais)
 *
 * Crie uma função que encontre amigos em comum entre duas pessoas utilizando os arrays de tags/interesses.
 * Retorne os interesses idênticos que batem nas duas listas, em ordem alfabética.
 */
function tagsEmComum(interessesPessoa1, interessesPessoa2) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: Faturamento Total Anual por Moeda (Reduce Avançado)
 *
 * Uma empresa internacional opera em Real (BRL) e Dólar (USD). Use o .reduce() para criar
 * um balanço consolidado que some o faturamento separado por moeda.
 *
 * Entrada: [ { valor: 50, moeda: 'USD' }, { valor: 120, moeda: 'BRL' }, { valor: 100, moeda: 'USD' } ]
 * Saída: { USD: 150, BRL: 120 }
 */
function calcularFaturamentoPorMoeda(vendas) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 4: Paginação de Rankings de Pontuação (Sort e Slice)
 *
 * Em um game, queremos exibir o placar dos líderes. O array vem bagunçado.
 * Ordene os competidores da maior pontuação para a menor, e retorne apenas os classificados daquela página.
 *
 * Entrada: [{nome: 'A', pts: 10}, {nome: 'B', pts: 50}, {nome: 'C', pts: 30}], pagina = 1, limite = 2
 * Saída: [{nome: 'B', pts: 50}, {nome: 'C', pts: 30}]
 */
function rankingPaginado(jogadores, pagina, limite) {
  // Escreva seu código aqui
}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestesBloco6() {
  console.log("🚀 Iniciando testes do Bloco 6...\n");
  let erros = 0;

  // Teste 1
  try {
    const r1 = higienizarCpfLista([
      "111.222.333-44",
      "999-888",
      "555.555.555-55",
    ]);
    if (r1.length !== 2 || r1[0] !== "11122233344") throw new Error();
    console.log("✅ Desafio 1 (Higienizar CPFs): Passou!");
  } catch (e) {
    console.error("❌ Desafio 1 (Higienizar CPFs): Falhou");
    erros++;
  }

  // Teste 2
  try {
    const r2 = tagsEmComum(["js", "react", "css"], ["node", "css", "js"]);
    if (JSON.stringify(r2) !== JSON.stringify(["css", "js"])) throw new Error();
    console.log("✅ Desafio 2 (Tags em Comum): Passou!");
  } catch (e) {
    console.error("❌ Desafio 2 (Tags em Comum): Falhou");
    erros++;
  }

  // Teste 3
  try {
    const r3 = calcularFaturamentoPorMoeda([
      { valor: 10, moeda: "EUR" },
      { valor: 20, moeda: "BRL" },
      { valor: 30, moeda: "EUR" },
    ]);
    if (r3.EUR !== 40 || r3.BRL !== 20) throw new Error();
    console.log("✅ Desafio 3 (Soma por Moeda): Passou!");
  } catch (e) {
    console.error("❌ Desafio 3 (Soma por Moeda): Falhou");
    erros++;
  }

  // Teste 4
  try {
    const r4 = rankingPaginado(
      [{ pts: 5 }, { pts: 100 }, { pts: 80 }, { pts: 90 }],
      1,
      2,
    );
    if (r4[0].pts !== 100 || r4[1].pts !== 90) throw new Error();
    console.log("✅ Desafio 4 (Ranking Paginado): Passou!");
  } catch (e) {
    console.error("❌ Desafio 4 (Ranking Paginado): Falhou");
    erros++;
  }

  console.log(
    `\n📊 Resultado final do Bloco 6: ${4 - erros}/4 desafios concluídos.`,
  );
}

executarTestesBloco6();

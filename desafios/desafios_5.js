// =============================================================================
// DESAFIOS DE JAVASCRIPT: CRUZAMENTO DE DADOS E PERFORMANCE (BLOCO 5)
// =============================================================================

/**
 * DESAFIO 1: Interseção de Arrays (Elementos em Comum)
 *
 * Escreva uma função que receba dois arrays de números e retorne um novo array
 * contendo apenas os elementos que estão presentes em AMBOS os arrays (sem duplicados).
 * Dica: O método .includes() ou a estrutura Set podem te ajudar aqui.
 *
 * Exemplo: [1, 2, 3] e [2, 3, 4] -> [2, 3]
 */
function encontrarIntersecao(array1, array2) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 2: Indexação para Busca Rápida (Performance);
 *
 * Buscar um item dentro de um array gigante usando .find() a todo momento é lento (O(n)).
 * Escreva uma função que receba um array de objetos (usuarios) e o transforme em um
 * ÚNICO OBJETO (Dicionário/Mapa) onde a CHAVE é o 'id' do usuário e o VALOR é o objeto inteiro.
 *
 * Entrada: [{ id: 'u1', nome: 'Ana' }, { id: 'u2', nome: 'Beto' }]
 * Saída: { u1: { id: 'u1', nome: 'Ana' }, u2: { id: 'u2', nome: 'Beto' } }
 */
function indexarUsuariosPorId(usuarios) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: Mesclar Histórico de Transações (Agrupamento com Soma)
 *
 * Você recebeu um array de transações financeiras. Use o .reduce() para criar um objeto
 * que soma o valor total gasto por cada cliente. As chaves devem ser o 'clienteId' e
 * os valores devem ser o total acumulado de dinheiro gasto por ele.
 *
 * Entrada: [
 *   { clienteId: 'c1', valor: 100 },
 *   { clienteId: 'c2', valor: 50 },
 *   { clienteId: 'c1', valor: 250 }
 * ]
 * Saída: { c1: 350, c2: 50 }
 */
function calcularGastoPorCliente(transacoes) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 4: Paginação Simples de Dados (Slice)
 *
 * Ao exibir dados em uma tabela, precisamos paginá-los. Escreva uma função que receba
 * um array de itens, o número da página (começando em 1) e o tamanho da página (itens por página).
 * Retorne apenas os elementos que pertencem àquela página específica usando o método .slice().
 *
 * Exemplo: itens = [A, B, C, D, E], pagina = 2, limite = 2 -> Retorna [C, D]
 */
function paginarDados(itens, pagina, limite) {
  // Escreva seu código aqui
}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestesBloco3() {
  console.log(
    "🚀 Iniciando testes dos seus exercícios avançados (Bloco 3)...\n",
  );
  let erros = 0;

  // Teste 1
  try {
    const t1 = encontrarIntersecao([1, 2, 2, 3, 4], [2, 3, 3, 5]);
    const esp1 = JSON.stringify([2, 3]);
    // Ordena para garantir que a ordem dos fatores não mude o resultado do teste
    if (JSON.stringify(t1.sort()) !== esp1)
      throw new Error(`Esperado ${esp1}, recebeu ${JSON.stringify(t1)}`);
    console.log("✅ Desafio 1 (Interseção): Passou!");
  } catch (e) {
    console.error("❌ Desafio 1 (Interseção): Falhou ->", e.message);
    erros++;
  }

  // Teste 2
  try {
    const lista = [
      { id: "10", nome: "Alice" },
      { id: "20", nome: "Bob" },
    ];
    const t2 = indexarUsuariosPorId(lista);
    const esp2 = JSON.stringify({
      10: { id: "10", nome: "Alice" },
      20: { id: "20", nome: "Bob" },
    });
    if (JSON.stringify(t2) !== esp2)
      throw new Error(`Esperado mapa indexado, recebeu ${JSON.stringify(t2)}`);
    console.log("✅ Desafio 2 (Indexação O(1)): Passou!");
  } catch (e) {
    console.error("❌ Desafio 2 (Indexação O(1)): Falhou ->", e.message);
    erros++;
  }

  // Teste 3
  try {
    const compras = [
      { clienteId: "userA", valor: 20 },
      { clienteId: "userB", valor: 150 },
      { clienteId: "userA", valor: 80 },
      { clienteId: "userA", valor: 15 },
    ];
    const t3 = calcularGastoPorCliente(compras);
    const esp3 = JSON.stringify({ userA: 115, userB: 150 });
    if (JSON.stringify(t3) !== esp3)
      throw new Error(`Esperado ${esp3}, recebeu ${JSON.stringify(t3)}`);
    console.log("✅ Desafio 3 (Soma por Cliente): Passou!");
  } catch (e) {
    console.error("❌ Desafio 3 (Soma por Cliente): Falhou ->", e.message);
    erros++;
  }

  // Teste 4
  try {
    const produtos = [
      "Projetor",
      "Teclado",
      "Mouse",
      "Monitor",
      "Fone",
      "Suporte",
    ];
    const pagina1 = paginarDados(produtos, 1, 3); // Deve trazer os 3 primeiros
    const pagina2 = paginarDados(produtos, 2, 3); // Deve trazer os 3 últimos

    if (
      JSON.stringify(pagina1) !==
      JSON.stringify(["Projetor", "Teclado", "Mouse"])
    ) {
      throw new Error(`Página 1 incorreta: recebeu ${JSON.stringify(pagina1)}`);
    }
    if (
      JSON.stringify(pagina2) !== JSON.stringify(["Monitor", "Fone", "Suporte"])
    ) {
      throw new Error(`Página 2 incorreta: recebeu ${JSON.stringify(pagina2)}`);
    }
    console.log("✅ Desafio 4 (Paginação com Slice): Passou!");
  } catch (e) {
    console.error("❌ Desafio 4 (Paginação com Slice): Falhou ->", e.message);
    erros++;
  }

  console.log(
    `\n📊 Resultado final do Bloco 3: ${4 - erros}/4 desafios concluídos.`,
  );
}

executarTestesBloco3();

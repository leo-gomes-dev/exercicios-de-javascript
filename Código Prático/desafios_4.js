// =============================================================================
// DESAFIOS DE JAVASCRIPT: MANIPULAÇÃO AVANÇADA DE ARRAYS (BLOCO 4)
// =============================================================================

/**
 * DESAFIO 1: Procurar Usuário por Propriedade (Find)
 *
 * Escreva uma função que receba um array de objetos (usuarios) e um email.
 * A função deve encontrar o usuário que possui aquele email e retornar o seu 'nome'.
 * Se não encontrar ninguém com esse email, retorne a string "Usuário não encontrado".
 *
 * Exemplo: [{ nome: 'Ana', email: 'ana@test.com' }] e 'ana@test.com' -> 'Ana'
 */
function encontrarUsuarioPorEmail(usuarios, emailProcurado) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 2: Verificar Presença Condicional (Some)
 *
 * Escreva uma função que receba um array de objetos representando produtos em um carrinho.
 * Ela deve retornar true se houver PELO MENOS UM produto que custe mais de R$ 1000,
 * e false caso contrário.
 *
 * Exemplo: [{ nome: 'Meia', preco: 20 }, { nome: 'Notebook', preco: 3500 }] -> true
 */
function possuiProdutoPremium(carrinho) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: Inverter Palavras (Map e String manipulation)
 *
 * Escreva uma função que receba um array de strings (frases ou palavras) e retorne
 * um novo array onde todas as palavras estejam escritas de trás para frente.
 * Dica: Você precisará transformar as strings em arrays para inverter e depois juntá-las.
 *
 * Exemplo: ['java', 'script'] -> ['avaj', 'tpirc']
 */
function inverterPalavras(palavras) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 4: Achatar e Somar Matriz (Flat / Reduce)
 *
 * Escreva uma função que receba uma matriz (um array de arrays contendo números)
 * e retorne a soma de absolutamente todos os números contidos nela.
 * Dica: Existe um método de array chamado .flat() que transforma sub-arrays em uma lista única.
 *
 * Exemplo: [[1, 2], [3, 4], [5]] -> 15
 */
function somarMatriz(matriz) {
  // Escreva seu código aqui
}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestesBloco2() {
  console.log(
    "🚀 Iniciando testes dos seus exercícios avançados (Bloco 2)...\n",
  );
  let erros = 0;

  // Teste 1
  try {
    const lista = [
      { nome: "Carlos", email: "carlos@exemplo.com" },
      { nome: "Beatriz", email: "biatriz@exemplo.com" },
      { nome: "Daniel", email: "daniel@exemplo.com" },
    ];
    const t1_sucesso = encontrarUsuarioPorEmail(lista, "biatriz@exemplo.com");
    const t1_falha = encontrarUsuarioPorEmail(lista, "inexistente@exemplo.com");

    if (t1_sucesso !== "Beatriz")
      throw new Error(`Esperado 'Beatriz', recebeu '${t1_sucesso}'`);
    if (t1_falha !== "Usuário não encontrado")
      throw new Error(
        `Esperado 'Usuário não encontrado', recebeu '${t1_falha}'`,
      );

    console.log("✅ Desafio 1 (Encontrar Usuário): Passou!");
  } catch (e) {
    console.error("❌ Desafio 1 (Encontrar Usuário): Falhou ->", e.message);
    erros++;
  }

  // Teste 2
  try {
    const compras1 = [
      { nome: "Caneta", preco: 5 },
      { nome: "Celular", preco: 1200 },
    ];
    const compras2 = [
      { nome: "Camiseta", preco: 80 },
      { nome: "Tênis", preco: 250 },
    ];

    if (possuiProdutoPremium(compras1) !== true)
      throw new Error("Esperado true para carrinho com item de R$ 1200");
    if (possuiProdutoPremium(compras2) !== false)
      throw new Error(
        "Esperado false para carrinho sem itens acima de R$ 1000",
      );

    console.log("✅ Desafio 2 (Produto Premium / Some): Passou!");
  } catch (e) {
    console.error(
      "❌ Desafio 2 (Produto Premium / Some): Falhou ->",
      e.message,
    );
    erros++;
  }

  // Teste 3
  try {
    const t3 = inverterPalavras(["roma", "amor", "dev"]);
    const esp3 = JSON.stringify(["amor", "roma", "ved"]);
    if (JSON.stringify(t3) !== esp3) {
      throw new Error(`Esperado ${esp3}, recebeu ${JSON.stringify(t3)}`);
    }
    console.log("✅ Desafio 3 (Inverter Palavras): Passou!");
  } catch (e) {
    console.error("❌ Desafio 3 (Inverter Palavras): Falhou ->", e.message);
    erros++;
  }

  // Teste 4
  try {
    const t4 = somarMatriz([[10, 20], [5, 5], [10, 10, 10], [20]]);
    if (t4 !== 90) throw new Error(`Esperado 90, recebeu ${t4}`);
    console.log("✅ Desafio 4 (Somar Matriz): Passou!");
  } catch (e) {
    console.error("❌ Desafio 4 (Somar Matriz): Falhou ->", e.message);
    erros++;
  }

  console.log(
    `\n📊 Resultado final do Bloco 2: ${4 - erros}/4 desafios concluídos.`,
  );
}

executarTestesBloco2();

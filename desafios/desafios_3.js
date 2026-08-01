// =============================================================================
// NOVO LOTE DE DESAFIOS: MAIS LÓGICA ESSENCIAL DE ARRAYS (BLOCO 3)
// =============================================================================

/**
 * DESAFIO 1: Encontrar o Maior e o Menor Número
 *
 * Escreva uma função que receba um array de números e retorne um objeto
 * contendo o maior e o menor número encontrados no array.
 *
 * Exemplo: [5, 2, 9, 1, 7] -> { maior: 9, menor: 1 }
 */
function encontrarMaiorEMenor(numeros) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 2: Contar Frequência de Elementos
 *
 * Escreva uma função que receba um array de strings (como frutas ou nomes)
 * e retorne um objeto contando quantas vezes cada string apareceu.
 *
 * Exemplo: ['maçã', 'banana', 'maçã'] -> { maçã: 2, banana: 1 }
 */
function contarFrequencia(itens) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: Validar Todos os Elementos (Every)
 *
 * Escreva uma função que verifique se todos os usuários de uma lista
 * são maiores de idade (idade igual ou maior que 18). A função deve retornar
 * true se todos forem maiores, e false caso contrário.
 *
 * Exemplo: [{ idade: 20 }, { idade: 15 }] -> false
 */
function todosSaoMaioresDeIdade(usuarios) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 4: Média de Notas (Reduce básico)
 *
 * Escreva uma função que receba um array de números (notas) e retorne
 * a média aritmética simples delas.
 *
 * Exemplo: [10, 8, 6] -> 8
 */
function calcularMedia(notas) {
  // Escreva seu código aqui
}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestes() {
  console.log("🚀 Iniciando testes do novo lote de exercícios...\n");
  let erros = 0;

  // Teste 1
  try {
    const t1 = encontrarMaiorEMenor([10, -5, 23, 0, 8]);
    const esp1 = JSON.stringify({ maior: 23, menor: -5 });
    if (JSON.stringify(t1) !== esp1)
      throw new Error(`Esperado ${esp1}, recebeu ${JSON.stringify(t1)}`);
    console.log("✅ Desafio 1 (Maior e Menor): Passou!");
  } catch (e) {
    console.error("❌ Desafio 1 (Maior e Menor): Falhou ->", e.message);
    erros++;
  }

  // Teste 2
  try {
    const t2 = contarFrequencia(["js", "python", "js", "java", "js", "python"]);
    const esp2 = JSON.stringify({ js: 3, python: 2, java: 1 });
    if (JSON.stringify(t2) !== esp2)
      throw new Error(`Esperado ${esp2}, recebeu ${JSON.stringify(t2)}`);
    console.log("✅ Desafio 2 (Contar Frequência): Passou!");
  } catch (e) {
    console.error("❌ Desafio 2 (Contar Frequência): Falhou ->", e.message);
    erros++;
  }

  // Teste 3
  try {
    const u1 = [{ idade: 25 }, { idade: 30 }, { idade: 18 }];
    const u2 = [{ idade: 25 }, { idade: 16 }, { idade: 21 }];

    if (todosSaoMaioresDeIdade(u1) !== true)
      throw new Error("Esperado true para u1, recebeu false");
    if (todosSaoMaioresDeIdade(u2) !== false)
      throw new Error("Esperado false para u2, recebeu true");

    console.log("✅ Desafio 3 (Validar Maiores de Idade): Passou!");
  } catch (e) {
    console.error(
      "❌ Desafio 3 (Validar Maiores de Idade): Falhou ->",
      e.message,
    );
    erros++;
  }

  // Teste 4
  try {
    const t4 = calcularMedia([7, 8, 9, 10]);
    if (t4 !== 8.5) throw new Error(`Esperado 8.5, recebeu ${t4}`);
    console.log("✅ Desafio 4 (Calcular Média): Passou!");
  } catch (e) {
    console.error("❌ Desafio 4 (Calcular Média): Falhou ->", e.message);
    erros++;
  }

  console.log(`\n📊 Resultado final: ${4 - erros}/4 desafios concluídos.`);
}

executarTestes();

// =============================================================================
// DESAFIOS DE JAVASCRIPT: MANIPULAÇÃO DE STRINGS E TEXTOS (BLOCO 6)
// =============================================================================

/**
 * DESAFIO 1: Extrair e Formatar Iniciais de Nomes (Map e Split)
 *
 * Em interfaces, costuma-se usar avatares com as iniciais do usuário. Escreva
 * uma função que receba uma string com o nome completo de uma pessoa e retorne
 * apenas a primeira letra do primeiro nome e a primeira letra do último nome em MAIÚSCULAS.
 *
 * Exemplo: "joão silva ferreira" -> "JF"
 * Exemplo: "Ana Maria de Souza" -> "AS" (Ignore conectores como "de", "da" se conseguir, ou pegue o último)
 */
function obterIniciaisNome(nomeCompleto) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 2: Contagem de Palavras em Texto Complexo (Reduce e Split)
 *
 * Escreva uma função que receba um parágrafo e retorne um objeto indicando quantas
 * vezes cada palavra apareceu. Ignore diferenças entre maiúsculas/minúsculas e remova pontuações.
 *
 * Entrada: "O gato pegou o rato. O rato correu!"
 * Saída: { o: 3, gato: 1, pegou: 1, rato: 2, correu: 1 }
 */
function contarFrequenciaPalavras(texto) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: Gerador de Slug para URLs amigáveis (Split e Map)
 *
 * Sistemas de blog convertem títulos em URLs. Escreva uma função que transforme um título
 * em letras minúsculas, remova caracteres especiais e junte as palavras com hífen (-).
 *
 * Entrada: "Aprenda JavaScript Avançado em 10 Dias!"
 * Saída: "aprenda-javascript-avancado-em-10-dias"
 */
function gerarSlugUrl(titulo) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 4: Paginação de Linhas de um Arquivo de Log (Split e Slice)
 *
 * Você leu um arquivo de texto gigante com logs quebrados por quebra de linha (\n).
 * Crie uma função que receba a string única do log, a página e o limite por página,
 * retornando apenas as linhas daquela página formatadas.
 *
 * Entrada: "LOG1\nLOG2\nLOG3\nLOG4", pagina = 2, limite = 2
 * Saída: ["LOG3", "LOG4"]
 */
function paginarLinhasLog(logCompleto, pagina, limite) {
  // Escreva seu código aqui
}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestesBloco4() {
  console.log("🚀 Iniciando testes do Bloco 4...\n");
  let erros = 0;

  // Teste 1
  try {
    const r1 = obterIniciaisNome("Carlos alberto de oliveira siqueira");
    if (r1 !== "CS") throw new Error(`Esperado 'CS', recebeu '${r1}'`);
    console.log("✅ Desafio 1 (Iniciais do Nome): Passou!");
  } catch (e) {
    console.error("❌ Desafio 1 (Iniciais do Nome): Falhou ->", e.message);
    erros++;
  }

  // Teste 2
  try {
    const r2 = contarFrequenciaPalavras("Code, code, code. Eat, sleep, code.");
    if (r2.code !== 4 || r2.eat !== 1)
      throw new Error(`Contagem incorreta: ${JSON.stringify(r2)}`);
    console.log("✅ Desafio 2 (Frequência de Palavras): Passou!");
  } catch (e) {
    console.error(
      "❌ Desafio 2 (Frequência de Palavras): Falhou ->",
      e.message,
    );
    erros++;
  }

  // Teste 3
  try {
    const r3 = gerarSlugUrl("  Criando Apps Incríveis com React Native!  ");
    if (r3 !== "criando-apps-incriveis-com-react-native")
      throw new Error(`Slug inválido: ${r3}`);
    console.log("✅ Desafio 3 (Gerador de Slug): Passou!");
  } catch (e) {
    console.error("❌ Desafio 3 (Gerador de Slug): Falhou ->", e.message);
    erros++;
  }

  // Teste 4
  try {
    const logs = "Erro A\nErro B\nErro C\nErro D\nErro E";
    const r4 = paginarLinhasLog(logs, 2, 2);
    if (JSON.stringify(r4) !== JSON.stringify(["Erro C", "Erro D"]))
      throw new Error(`Paginação incorreta: ${JSON.stringify(r4)}`);
    console.log("✅ Desafio 4 (Paginação de Logs): Passou!");
  } catch (e) {
    console.error("❌ Desafio 4 (Paginação de Logs): Falhou ->", e.message);
    erros++;
  }

  console.log(
    `\n📊 Resultado final do Bloco 4: ${4 - erros}/4 desafios concluídos.`,
  );
}

executarTestesBloco4();

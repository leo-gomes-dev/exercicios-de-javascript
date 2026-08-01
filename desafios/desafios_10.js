// =============================================================================
// DESAFIOS DE JAVASCRIPT: BUSCA, VERIFICAÇÃO E VALIDAÇÃO (BLOCO 10)
// =============================================================================

/**
 * DESAFIO 1: Validação de Permissões de Rotas (Includes e Some)
 *
 * Em sistemas Full Stack, controlamos o acesso a rotas baseado nos cargos (roles) do usuário.
 * Escreva uma função que receba um array de cargos permitidos para acessar uma página
 * e um objeto contendo os dados do usuário conectado (com suas respectivas permissões).
 * Retorne true se pelo menos um dos cargos do usuário estiver na lista de permitidos.
 *
 * Entrada: permitidos = ['admin', 'editor'], usuario = { roles: ['user', 'editor'] }
 * Saída: true
 */
function verificarAcessoRota(cargosPermitidos, usuario) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 2: Gerenciar Fila de Cliques Recentes sem Duplicados (IndexOf e Splice)
 *
 * Painéis administrativos monitoram os últimos itens clicados. Escreva uma função que
 * adicione um novo 'id' ao início de um histórico (array de itens recentes).
 * Se o 'id' já existir em qualquer posição da lista, remova-o da posição antiga usando .splice()
 * antes de inseri-lo no topo, garantindo que o array não tenha duplicados.
 *
 * Entrada: historico = ['p1', 'p2', 'p3'], novoId = 'p2'
 * Saída: ['p2', 'p1', 'p3']
 */
function atualizarHistoricoCliques(historico, novoId) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 3: Validação de Segurança de Payload de API (Every)
 *
 * Ao receber dados em um controlador do Node.js, precisamos validar se o objeto enviado
 * possui todos os campos obrigatórios preenchidos (não nulos e não vazios). Escreva uma
 * função que valide as chaves de um objeto enviado no corpo da requisição contra uma lista de campos exigidos.
 *
 * Entrada: payload = { nome: 'Mouse', preco: 50 }, obrigatorios = ['nome', 'preco', 'estoque']
 * Saída: false (pois falta 'estoque')
 */
function validarCamposObrigatorios(payload, camposObrigatorios) {
  // Escreva seu código aqui
}

/**
 * DESAFIO 4: Localizar e Atualizar Registro de Sessão (FindIndex)
 *
 * No backend, gerenciamos sessões ativas de usuários. Escreva uma função que busque um usuário
 * pelo 'token' dele dentro de um array de sessões. Se encontrar, atualize a propriedade
 * 'ultimaAtividade' para o timestamp atual e retorne o array completo. Se não encontrar, retorne false.
 */
function atualizarAtividadeSessao(sessoes, tokenAlvo) {
  // Escreva seu código aqui
}

// =============================================================================
// SISTEMA AUTOMÁTICO DE TESTES (Não mexa aqui)
// =============================================================================
function executarTestesBloco8() {
  console.log("🚀 Iniciando testes do Bloco 8...\n");
  let erros = 0;

  // Teste 1
  try {
    const user = { roles: ["guest", "premium"] };
    const r1 = verificarAcessoRota(["admin", "premium"], user);
    if (r1 !== true)
      throw new Error("Deveria permitir acesso para usuário premium");
    console.log("✅ Desafio 1 (Verificação de Acesso): Passou!");
  } catch (e) {
    console.error("❌ Desafio 1 (Verificação de Acesso): Falhou ->", e.message);
    erros++;
  }

  // Teste 2
  try {
    const lista = ["id1", "id2", "id3"];
    const r2 = atualizarHistoricoCliques(lista, "id3");
    if (r2[0] !== "id3" || r2.length !== 3)
      throw new Error(`Histórico desalinhado: ${JSON.stringify(r2)}`);
    console.log("✅ Desafio 2 (Histórico sem Duplicados): Passou!");
  } catch (e) {
    console.error(
      "❌ Desafio 2 (Histórico sem Duplicados): Falhou ->",
      e.message,
    );
    erros++;
  }

  // Teste 3
  try {
    const reqBody = { titulo: "Livro JS", tags: ["tech"] };
    const r3 = validarCamposObrigatorios(reqBody, ["titulo", "autor"]);
    if (r3 !== false)
      throw new Error("Deveria rejeitar payload sem o campo 'autor'");
    console.log("✅ Desafio 3 (Validação de Payload): Passou!");
  } catch (e) {
    console.error("❌ Desafio 3 (Validação de Payload): Falhou ->", e.message);
    erros++;
  }

  // Teste 4
  try {
    const sessoesAtivas = [
      { token: "t123", ultimaAtividade: 0 },
      { token: "t456", ultimaAtividade: 0 },
    ];
    const r4 = atualizarAtividadeSessao(sessoesAtivas, "t123");
    if (!r4 || r4[0].ultimaAtividade === 0)
      throw new Error("Sessão não foi atualizada corretamente");
    console.log("✅ Desafio 4 (Localizar e Atualizar Sessão): Passou!");
  } catch (e) {
    console.error(
      "❌ Desafio 4 (Localizar e Atualizar Sessão): Falhou ->",
      e.message,
    );
    erros++;
  }

  console.log(
    `\n📊 Resultado final do Bloco 8: ${4 - erros}/4 desafios concluídos.`,
  );
}

executarTestesBloco8();

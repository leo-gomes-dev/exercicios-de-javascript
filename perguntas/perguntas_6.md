# Perguntas de Entrevista: SQL vs NoSQL

## Pergunta

Explique a diferença técnica entre bancos de dados relacionais (SQL) e não-relacionais (NoSQL). Dê um exemplo prático de cenário para o uso de cada um.

---

## 🧠 Explicação Teórica

- **SQL (Relacional)**: Organizado em tabelas rígidas com linhas e colunas. Usa chaves primárias/estrangeiras para conectar dados. Focado nas propriedades **ACID** (Atomicidade, Consistência, Isolamento, Durabilidade) para garantir integridade perfeita dos dados.
- **NoSQL (Não-Relacional)**: Pode ser baseado em documentos (JSON), grafos, colunas ou chave-valor. Não exige esquema fixo anterior e escala horizontalmente com facilidade distribuindo dados entre múltiplos servidores.

---

## 🗣️ Roteiro de Resposta para a Entrevista

- "Bancos SQL, como PostgreSQL e MySQL, utilizam esquemas rígidos e focam na consistência absoluta dos dados através de relacionamentos estruturados e transações complexas."
- "Bancos NoSQL, como MongoDB, usam esquemas flexíveis (documentos JSON dinâmicos), priorizando alta velocidade de escrita e facilidade de escala horizontal."
- "Eu usaria **SQL** para um sistema financeiro, ERP corporativo ou qualquer fluxo onde um dado corrompido ou desalinhado gere prejuízo (como tabelas de pedidos e transações bancárias)."
- "Eu usaria **NoSQL (MongoDB)** para um sistema de feed de rede social, catálogo de produtos com atributos variáveis, ou histórico de logs de sensores, onde a estrutura muda muito e o volume de dados cresce de forma exponencial."

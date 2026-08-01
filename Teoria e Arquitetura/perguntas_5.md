# Perguntas de Entrevista: Estratégias de Cache com Redis

## Pergunta

Quando você decide introduzir uma camada de cache como o Redis na arquitetura de um sistema, em vez de consultar o banco de dados principal?

---

## 🧠 Explicação Teórica

Bancos de dados relacionais e NoSQL tradicionais gravam e leem dados no disco rígido, o que gera latência de milissegundos e processamento de consultas complexas. O Redis armazena os dados totalmente em memória RAM na estrutura de Chave-Valor. A velocidade de resposta cai para microssegundos, aliviando a carga do banco de dados principal.

---

## 🗣️ Roteiro de Resposta para a Entrevista

- "Eu decido usar o **Redis** como camada de cache quando identifico dados na aplicação que possuem **alta taxa de leitura** e **baixa frequência de alteração**."
- "Exemplos clássicos são: listagens de produtos na página inicial de um e-commerce, sessões ativas de usuários logados, tokens de autenticação ou configurações globais do sistema."
- "Consultar o banco de dados principal (como PostgreSQL) a cada clique satura as conexões. Salvando o JSON desses dados no Redis com um tempo de expiração (TTL), aumentamos a velocidade da API drasticamente e reduzimos os custos de infraestrutura."

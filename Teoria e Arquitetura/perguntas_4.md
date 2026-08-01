# Perguntas de Entrevista: REST vs GraphQL

## Pergunta

Quais são as diferenças fundamentais entre uma arquitetura de API REST e GraphQL? Em quais cenários você escolheria cada uma?

---

## 🧠 Explicação Teórica

- **REST**: Baseado em recursos expostos através de URLs fixas e verbos HTTP padrão (`GET`, `POST`, `PUT`, `DELETE`). Cada endpoint retorna uma estrutura de dados fixa definida pelo servidor.
- **GraphQL**: Uma linguagem de consulta para APIs baseada em um único endpoint (geralmente `/graphql`). O cliente envia uma query especificando exatamente as propriedades que deseja receber do schema do servidor.

---

## 🗣️ Roteiro de Resposta para a Entrevista

- "O REST trabalha com múltiplos endpoints onde a estrutura dos dados retornados é fixa. Isso pode gerar problemas como **over-fetching** (trazer mais dados do que a tela precisa, gastando banda) ou **under-fetching** (precisar fazer 3 requisições em endpoints diferentes para montar uma única tela)."
- "O GraphQL resolve isso usando um único endpoint centralizado onde o cliente dita o formato da resposta, eliminando dados desnecessários."
- "Eu escolheria **REST** para aplicações padrão de mercado, microserviços internos simples e cenários onde o cache HTTP nativo do navegador é muito importante."
- "Eu escolheria **GraphQL** se estivesse desenvolvendo um front-end complexo (como um dashboard) que consome dados de múltiplos microsserviços legados e precisa otimizar a performance de rede em dispositivos móveis."

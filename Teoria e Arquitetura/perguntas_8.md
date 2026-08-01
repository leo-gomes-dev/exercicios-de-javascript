# Perguntas de Entrevista: Segurança com CORS

## Pergunta

O que significa a sigla CORS, por que esse erro acontece no navegador e como você o resolve corretamente em uma API Node.js?

---

## 🧠 Explicação Teórica

**CORS** significa _Cross-Origin Resource Sharing_ (Compartilhamento de Recursos entre Origens Diferentes). É uma política de segurança nativa aplicada pelos navegadores (Same-Origin Policy). Por padrão, um site hospedado em `http://meufront.com` não pode ler dados de uma API hospedada em `http://minhaapi.com`, a menos que a API diga explicitamente ao navegador que permite esse acesso através de headers HTTP específicos.

---

## 🗣️ Roteiro de Resposta para a Entrevista

- "O **CORS** não é um erro de código no servidor, mas sim um bloqueio de segurança que o próprio navegador faz para proteger o usuário."
- "Ele impede que scripts de domínios maliciosos façam requisições não autorizadas para outras APIs em nome do usuário."
- "Para resolver isso em uma API Node.js/Express, nós configuramos os headers de resposta HTTP corretos, especificamente o `Access-Control-Allow-Origin`."
- "Na prática, instalamos o middleware oficial chamado `cors` e o configuramos passando uma lista (whitelist) contendo estritamente as URLs dos nossos ambientes de Front-end autorizados."

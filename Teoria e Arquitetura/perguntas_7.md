# Perguntas de Entrevista: Autenticação Segura com JWT

## Pergunta

Como funciona o fluxo de autenticação usando JWT (JSON Web Token)? Onde você deve armazenar esse token no Front-end para garantir o máximo de segurança?

---

## 🧠 Explicação Teórica

O JWT é composto por três partes divididas por pontos: Header, Payload (dados públicos como id do usuário) e Signature (assinatura criptográfica gerada com uma chave secreta do servidor). O servidor não salva o token na sessão; ele simplesmente descriptografa a assinatura para validar se o token é autêntico.

- **Armazenamento**: Guardar no `localStorage` deixa o token vulnerável a ataques **XSS (Cross-Site Scripting)**, onde scripts maliciosos injetados leem o armazenamento local. O local seguro é usar cookies marcados com as flags `HttpOnly` e `Secure`.

---

## 🗣️ Roteiro de Resposta para a Entrevista

- "O fluxo começa quando o usuário envia as credenciais. O servidor valida, gera um **JWT** assinado com uma chave secreta e o devolve para o cliente. Nas próximas requisições, o cliente anexa esse token no cabeçalho `Authorization` para provar quem ele é."
- "Sobre segurança no armazenamento do Front-end: colocar o JWT no `localStorage` é um risco crítico porque qualquer script JavaScript de terceiros rodando na página consegue ler esse token via ataque XSS."
- "A recomendação de segurança máxima no mercado é enviar o token do backend configurado dentro de um **Cookie com a flag HttpOnly**."
- "Dessa forma, o navegador anexa o token de forma automática e transparente nas requisições HTTP, mas proíbe o código JavaScript do Front-end de ler ou acessar o valor do cookie, mitigando o risco de roubo de sessão."

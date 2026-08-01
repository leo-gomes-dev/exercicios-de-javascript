# Perguntas de Entrevista (Comportamental): Incidentes em Produção

## Pergunta

Se um código escrito por você for implantado (deploy) e acabar derrubando o ambiente de produção, qual é o seu plano de ação imediato?

---

## 🧠 Explicação Teórica

Erros acontecem com qualquer nível de senioridade. O objetivo da pergunta é validar o seu controle emocional e o seu alinhamento com a cultura de responsabilidade sem culpabilização individual (blameless post-mortem).

---

## 🗣️ Roteiro de Resposta para a Entrevista

- "O meu foco principal e imediato é **mitigar o impacto no cliente final e estabilizar o sistema** o mais rápido possível. Não é hora de procurar culpados ou tentar ler linhas de log com o sistema fora do ar."
- "O plano de ação padrão é realizar o **rollback imediato** do deploy para a última versão estável conhecida que estava funcionando perfeitamente em produção."
- "Após o sistema voltar a operar normalmente e os clientes estarem seguros, aí sim começamos a fase de investigação de causa raiz."
- "Vou analisar os logs de erro do servidor (como Datadog ou Sentry), isolar o bug no ambiente de desenvolvimento local, corrigir o código, criar testes automatizados adicionais para garantir que esse erro específico nunca mais se repita, e documentar o aprendizado com o time."

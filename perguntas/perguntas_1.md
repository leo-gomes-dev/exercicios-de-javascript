# Perguntas de Entrevista: Event Loop e Assincronismo

## Pergunta

O que é o Event Loop no Node.js e como ele gerencia operações assíncronas sem travar a aplicação sendo single-threaded?

---

## 🧠 Explicação Teórica

O JavaScript executa código de forma síncrona e em uma única thread (Call Stack). Para não travar o sistema esperando uma rota de API responder ou um banco de dados ler um arquivo, o Node.js delega essas tarefas pesadas para o sistema operacional ou para um pool de threads interno do C++ (chamado Libuv). Quando essa tarefa termina, ela envia um aviso para uma fila (Callback Queue). O Event Loop é um mecanismo que fica rodando infinitamente verificando: "A pilha de código principal acabou? Se sim, pega a próxima tarefa da fila e executa".

---

## 🗣️ Roteiro de Resposta para a Entrevista

- "O Node.js é single-threaded para o nosso código JavaScript, o que significa que ele executa uma coisa por vez na Call Stack."
- "Porém, ele não trava em operações pesadas porque ele usa a biblioteca **Libuv** por baixo dos panos, que gerencia um pool de threads em C++ para computação pesada e I/O assíncrono."
- "O **Event Loop** é o maestro desse processo: ele monitora a pilha de execução principal e, assim que ela fica vazia, ele puxa os callbacks que terminaram de processar na fila secundária (Callback Queue) e os joga de volta para a thread principal."
- "Isso permite que o Node.js lide com milhares de conexões simultâneas com excelente performance em cenários de alto I/O."

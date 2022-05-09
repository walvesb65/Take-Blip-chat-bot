# Desafio Take Blip (API) :rocket:

![GitHub repo size](https://img.shields.io/github/repo-size/walvesb65/Take-Blip-chat-bot?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/walvesb65/Take-Blip-chat-bot?style=for-the-badge)

- Projeto desenvolvido durante o processo seletivo da Take Blip

## Sobre

![image](https://user-images.githubusercontent.com/78650776/167337581-ef568bda-ee9e-45ec-ad8a-67b4a6d6db38.png)

> Uma API desenvolvida durante o processo seletivo da TakeBlip, seu objetivo é consumir a API do github para ser utilizada pelo chatbot construido a partir de sua plataforma.

> Funcionalidades:

```/GET takeblip/repository```

> Retorna um array com os cinco epositórios mais antigos que utilizam C#
  ```js
  [
     {...},
     {...},
     {...},
     {...},
     {...},
  ]
  ```

> Os repositórios possuem a seguinte estrutura
  ```ts
  {
   fullName: string,
   image: string,
   description: string,
   language: string,
  }
  ```

## Tecnologias utilizadas na construção do projeto
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [NodeJs](https://nodejs.org/en/)
- [Cors](https://github.com/expressjs/cors)
- [Axios](https://axios-http.com/)
- [Jest](https://jestjs.io/pt-BR/)
- [Supertest](https://eslint.org/)
- [Nodemon](https://github.com/remy/nodemon#nodemon)

## Pré-requisitos
Ter instalado em sua máquina as seguintes ferramentas:

* [Git](https://git-scm.com), 
* [Node.js](https://nodejs.org/en/),
* [npm](https://www.npmjs.com/).

## Para rodar o projeto localmente:
1. Clone o repositório
  ```bash
    $ git clone git@github.com:walvesb65/Take-Blip-chat-bot.git
  ```
2. Entre na pasta do repositório que você acabou de clonar:
  ```bash
    $ cd Take-Blip-chat-bot
    $ cd api
  ```

3. Instale as dependências:
  ```bash
    $ npm install
  ```

4. Teste a aplicação:
  ```bash
    $ npm test
  ```

5. Rode a aplicação:
  ```bash
    $ npm start
  ```
  * Para ter acesso a resposta da requisição use a url: http://localhost:3000/takeblip/repository

---
:keyboard: por [Willian Alves (Will)](https://www.linkedin.com/in/willianalmeidaalves/) 😊
# **Encurtador de URLs**

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/RonaldoAntonucci/challenger-encurtador">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/RonaldoAntonucci/challenger-encurtador">
  <img alt="Stars" src="https://img.shields.io/github/stars/RonaldoAntonucci/challenger-encurtador">
  <img alt="Repository Size" src="https://img.shields.io/github/repo-size/RonaldoAntonucci/challenger-encurtador">
</p>

# Descrição
A api recebe uma requisição **POST** com uma URL e retorna uma short URL como resposta. A short url é válida por 7 dias.
Ao realizar uma requisição do tipo **GET** passando a shortUrl como parametro é feito uma redirecionamento para a URL correta.

Desenvolvido seguindo a **Clean Architecture** e **SOLID**

[**para acessar em produçao**](https://encurtador-api.ronaldoantonucci.com.br/docs)

# Use Cases

1. [Encurtar](./requirements/encurtar.md)
2. [Redirecionar](./requirements/redirecionar.md)
3. **Documentação** pode ser acessada através da rota **/docs**

# Documentação da api
https://encurtador-api.ronaldoantonucci.com.br/docs/

# Techs

  - [Typescript](https://www.typescriptlang.org/)
  - [Express](https://expressjs.com/pt-br/)
  - [Postgres](https://www.postgresql.org/)
  - [Typeorm](https://typeorm.io/#/)
  - [Crypto](https://nodejs.org/api/crypto.html)
  - [Swagger](https://swagger.io/)

# Requisitos
  - Ter [**node:14x**](https://nodejs.org/en/) instalado
  - Ter [**yarn:1x**](https://yarnpkg.com/)
  - Ter [**docker**](https://www.docker.com/)
  - Ter [**docker-compose**](https://docs.docker.com/compose/)

  <hr>

## Começando
``` bash
  # Clonar o projeto:
  $ https://github.com/RonaldoAntonucci/challenger-encurtador.git

  # Entrar no diretório:
  $ cd challenger-encurtador

  # Instalar as dependências:
  $ yarn install

  # Gerar o build
  $ yarn build

  # Crie um arquivo .env
  $ cp .env.example .env

  # Crie um arquivo database.prod.json
  $ cp database.example.json database.prod.json

  # rodar a aplicação através do docker-compose
  $ yarn up
```

<hr>

## Para rodar os tests

  **UNITÁRIOS**
<br>
os tests unitários podem ser rodados sem nenhuma configuração adicional
``` bash
  $ yarn test:unit
```
<hr>
  *** INTEGRAÇÃO ***
<br>

para rodar os tests de integração é necessário ter um banco de dados postgres rodando,
ele pode ser criado através do comando do docker:

``` bash
  $ docker run --name pg -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=encurtador-test -p 5433:5432 -d postgres
```

E então rode os testes
``` bash
  $ yarn test
```

<hr>

# Rodando em modo **DEV**

Muda o NODE_ENV no arquivo .env para **"dev"**

Crie um banco de dados postgres
``` bash
  $ docker run --name pg-dev -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=encurtador-test -p 5432:5432 -d postgres
```

Rode o sistema
``` bash
  $ yarn dev:server
```

<hr>

Feito por [Ronaldo Antonucci](https://github.com/RonaldoAntonucci/challenger-encurtador)

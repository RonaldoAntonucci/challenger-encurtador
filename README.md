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
  - Ter [**docker**](https://www.docker.com/)
  - Ter [**docker-compose**](https://docs.docker.com/compose/)

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

  # rodar a aplicação através do docker-compose
  $ yarn up
```

Feito por [Ronaldo Antonucci](https://github.com/RonaldoAntonucci/challenger-encurtador)

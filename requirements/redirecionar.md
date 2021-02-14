# Redirecionar

## Caso de sucesso

1. [x] Recebe uma requisição do tipo **GET** na rota **/**
2. [x] Pega a url do banco de dados baseado no parametro **shortUrl**
3. [x] Redireciona para a url correta

## Exceções

1. [x] Retornar erro **404** se a URL não existir
2. [x] retorna **500** se ocorrer um erro ao pegar a url do banco

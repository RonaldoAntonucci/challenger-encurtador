# SignIn

## Caso de sucesso

1. [ ] Recebe uma requisição do tipo **POST** na rota **/encurtador**
2. [ ] Valida dados obrigatórios **url**
3. [ ] Valida que o campo **url** é uma url válida
4. [ ] Gera uma url encurtada (**mínimo 5 e máximo 10 caracteres**)
5. [ ] Salva a url gerada relacionando com a url antiga no banco de dados
6. [ ] Retorna **200** com a nova url

## Exceções

1. [ ] Retorna erro **404** se a API  não existir
2. [ ] Retorna erro **400** se a url não for fornecida pelo client
3. [ ] Retorna **400** se a url não for válida
4. [ ] Retorna **500** se ocorrer um erro ao gerar a nova url
5. [ ] Retorna **500** se ocorrer um erro ao salvar a nova url
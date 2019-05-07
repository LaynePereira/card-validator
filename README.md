# Validador de dados de cartões de crédito v.1.0.0

**Esta biblioteca se destina à validação de números de Cartões de Crédito, para uso em aplicações web.**
Nesta versão, você é capaz de validar números de Cartão de Crédito com 16 números, espaços ( ), traços (-) e pontos (.) não são validos.

## Como instalar:

```shell

$  npm install card-validator-jess

```

## Como utilizar:

```node

> const cardValidator = require("card-validator-jess");
> console.log(cardValidator.cardValidator("14411201432235942"))
> // returns "true"

```

## roadmap oficial do projeto

#### versão 3.0.0 (sem previsão, aceita-se contribuições)
- README translated to english;
- validação com codigo de segurança;

#### versão 2.0.0 (previsão outubro/2019)
- implementação da opção "espaços";
- implementação da opção validar por bandeira.
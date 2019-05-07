# Validador de Cartão de Crédito v.1.0.0

**Esta biblioteca se destina à validação de números de Cartão de Credito **
Nesta versão, você é capaz de validar números de Cartão de Credito com 16 números, pontos (.) e traços (-) não são validos.

## Como instalar:

```shell

$  npm install card-validator-jess

```

## Como utilizar:

```node

> const cardValidator = require("cpfValidator-jess");
> console.log(cardValidator("4411201432235942"))
> // returns "true"

```

## roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidades: validação de números de Cartão de Crédito com 16 números, pontos (.) e traços (-) não são validos.
- retorna true ou false.

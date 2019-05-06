# Conversor de números v.1.0.0

**Esta biblioteca se destina à validação de números de CPF (Cadastro de Pessoas Físicas)**
Nesta versão, você é capaz de validar números de CPF com 11 números, pontos (.) e traços (-) não são validos.

## Como instalar:

```shell

$  npm install cpfValidator-jess

```

## Como utilizar:

```node

> const cpfValidator = require("cpfValidator-jess");
> console.log(cpfValidator("123.456.789-09"))
> // returns "true"

```

## roadmap oficial do projeto

#### versão 1.0.0 (released)
- funcionalidades: validação de números de CPF com 11 números, pontos (.) e traços (-) não são validos.
- retorna true ou false.

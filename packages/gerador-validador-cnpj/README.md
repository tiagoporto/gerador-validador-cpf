# gerador-validador-cnpj

[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/gerador-validador-cpf/unit-tests.yml?label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/gerador-validador-cpf/actions/workflows/unit-tests.yml)
[![Coverage Status](https://img.shields.io/coverallsCoverage/github/tiagoporto/gerador-validador-cpf.svg?logo=coveralls&style=flat-square)](https://coveralls.io/github/tiagoporto/gerador-validador-cpf)
[![Mutation Score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/gerador-validador-cpf/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/gerador-validador-cpf/main)

Biblioteca JS para gerar e validar CNPJ (Cadastro Nacional da Pessoa Jurídica) do Brasil.

## Docs

Leia em outros idiomas: [English](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cnpj/README.en.md), [Español](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/packages/gerador-validador-cnpj/README.es.md) e Português(Brasil)

## Playground

TODO

## Instalação

Instalação com npm:

```bash
npm install gerador-validador-cnpj
```

Instalação com deno(jsr):

```bash
deno add jsr:@tiagoporto/gerador-validador-cnpj
```

## Uso

### Gerando CNPJ

```javascript
import { generate as generateCNPJ } from 'gerador-validador-cnpj'
// jsr import from "@tiagoporto/gerador-validador-cnpj"

const cnpj = generateCNPJ()
console.log(cnpj) // 00000000000000

const formattedCNPJ = generateCNPJ({ format: true })
console.log(formattedCNPJ) // 00.000.000/0000-00
```

### Validando CNPJ

```javascript
import { validate as validadeCNPJ } from 'gerador-validador-cnpj'
// jsr import from "@tiagoporto/gerador-validador-cnpj"

const isCNPJValid = validadeCNPJ('01234567890000')
const isFormattedCNPJValid = validadeCNPJ('01.234.567/8900-00')
```

## Licença

Este projeto está licenciado sob a [licença MIT](https://github.com/tiagoporto/gerador-validador-cpf/blob/main/LICENSE).
